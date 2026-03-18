export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const {
    name,
    email,
    phone,
    propertyAddress,
    askingPrice,
    arv,
    rehabEstimate,
    dealType,
    notes,
    fileName,
    source,
    page,
    honeypot,
  } = req.body || {};

  // Basic spam protection: ignore submissions that fill the honeypot field
  const isSpam = typeof honeypot === "string" && honeypot.trim().length > 0;

  if (!isSpam) {
    if (!name || !email || !phone || !propertyAddress || !askingPrice || !dealType) {
      return res.status(400).json({ error: "Missing required fields." });
    }
  }

  const id = (globalThis.crypto && crypto.randomUUID && crypto.randomUUID()) || `${Date.now()}`;
  const submittedAt = new Date().toISOString();

  const normalizedJV = {
    id,
    name,
    email,
    phone,
    propertyAddress,
    askingPrice,
    arv: arv ?? "",
    rehabEstimate: rehabEstimate ?? "",
    dealType,
    notes: notes ?? "",
    fileName: fileName ?? "",
    source: source ?? "website",
    page: page ?? null,
    submittedAt,
    isSpam,
  };

  // eslint-disable-next-line no-console
  console.info("[jv] received", { id: normalizedJV.id, isSpam: normalizedJV.isSpam });

  const webhookUrl = process.env.TURNKEY_JV_WEBHOOK_URL;
  const apiKey = process.env.TURNKEY_API_KEY;

  const safeName = normalizedJV.name || "";
  const [firstName, ...restName] = safeName.trim().split(" ");
  const lastName = restName.join(" ");

  const digitsOnlyPhone = (normalizedJV.phone || "").replace(/\D/g, "");
  const normalizedPhone = digitsOnlyPhone.length === 10 ? digitsOnlyPhone : digitsOnlyPhone;

  const turnkeyPayload = {
    api_key: apiKey || "",
    leadsource: `${normalizedJV.source || "website"} - JV`,
    fname: firstName || "",
    lname: lastName || "",
    phone: normalizedPhone,
    email: normalizedJV.email || "",
    address: normalizedJV.propertyAddress || "",
    city: "",
    state: "",
    zip: "",
    ask_price: normalizedJV.askingPrice || "",
    beds: "",
    baths: "",
    notes: [
      normalizedJV.dealType ? `Deal type: ${normalizedJV.dealType}` : "",
      normalizedJV.arv ? `ARV: ${normalizedJV.arv}` : "",
      normalizedJV.rehabEstimate ? `Rehab estimate: ${normalizedJV.rehabEstimate}` : "",
      normalizedJV.notes,
      normalizedJV.fileName ? `File: ${normalizedJV.fileName}` : "",
      normalizedJV.page ? `Page: ${normalizedJV.page}` : "",
      normalizedJV.isSpam ? "Flagged as spam by honeypot" : "",
    ]
      .filter(Boolean)
      .join(" | "),
  };

  if (!webhookUrl || !apiKey) {
    // eslint-disable-next-line no-console
    console.error("[jv] TURNKEY_JV_WEBHOOK_URL or TURNKEY_API_KEY is not set. JV lead will not be forwarded.");
    return res.status(502).json({ error: "We couldn't submit your request. Please try again in a moment." });
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(turnkeyPayload),
    });

    if (!webhookResponse.ok) {
      // eslint-disable-next-line no-console
      console.error("[jv] Turnkey JV webhook failed", {
        status: webhookResponse.status,
        statusText: webhookResponse.statusText,
      });
      return res.status(502).json({ error: "We couldn't submit your request. Please try again in a moment." });
    }

    let body;
    try {
      body = await webhookResponse.json();
    } catch {
      body = null;
    }

    if (body && body.result === "fail") {
      // eslint-disable-next-line no-console
      console.error("[jv] Turnkey JV webhook returned failure", {
        reason: body.reason,
      });
      return res.status(502).json({ error: "We couldn't submit your request. Please try again in a moment." });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[jv] Turnkey JV webhook error", error);
    return res.status(502).json({ error: "We couldn't submit your request. Please try again in a moment." });
  }

  return res.status(200).json({ id });
}

