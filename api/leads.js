export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, phone, email, address, message, source, page, smsConsent, honeypot } = req.body || {};

  // Basic spam protection: ignore submissions that fill the honeypot field
  const isSpam = typeof honeypot === "string" && honeypot.trim().length > 0;

  if (!isSpam) {
    if (!name || !phone || !email || !address) {
      return res.status(400).json({ error: "Missing required fields." });
    }
  }

  const id = (globalThis.crypto && crypto.randomUUID && crypto.randomUUID()) || `${Date.now()}`;
  const submittedAt = new Date().toISOString();

  const normalizedLead = {
    id,
    name,
    phone,
    email,
    address,
    message: message ?? "",
    source: source ?? "website",
    page: page ?? null,
    smsConsent: Boolean(smsConsent),
    receivedAt: submittedAt,
    submittedAt,
    isSpam,
  };

  // eslint-disable-next-line no-console
  console.info("[lead] received", { id: normalizedLead.id, isSpam: normalizedLead.isSpam });

  const webhookUrl = process.env.TURNKEY_LEAD_WEBHOOK_URL;
  const apiKey = process.env.TURNKEY_API_KEY;

  // Map normalized lead into the payload Turnkey expects.
  // See Turnkey docs: api_key, leadsource, fname, lname, phone, email, address, city, state, zip, ask_price, beds, baths, notes.
  const safeName = normalizedLead.name || "";
  const [firstName, ...restName] = safeName.trim().split(" ");
  const lastName = restName.join(" ");

  const digitsOnlyPhone = (normalizedLead.phone || "").replace(/\D/g, "");
  const normalizedPhone = digitsOnlyPhone.length === 10 ? digitsOnlyPhone : digitsOnlyPhone;

  const turnkeyPayload = {
    api_key: apiKey || "",
    leadsource: normalizedLead.source || "website",
    fname: firstName || "",
    lname: lastName || "",
    phone: normalizedPhone,
    email: normalizedLead.email || "",
    address: normalizedLead.address || "",
    city: "",
    state: "",
    zip: "",
    ask_price: "",
    beds: "",
    baths: "",
    notes: [
      normalizedLead.message,
      normalizedLead.page ? `Page: ${normalizedLead.page}` : "",
      normalizedLead.smsConsent ? "SMS consent: true" : "SMS consent: false",
      normalizedLead.isSpam ? "Flagged as spam by honeypot" : "",
    ]
      .filter(Boolean)
      .join(" | "),
  };

  if (!webhookUrl || !apiKey) {
    // eslint-disable-next-line no-console
    console.error("[lead] TURNKEY_LEAD_WEBHOOK_URL or TURNKEY_API_KEY is not set. Lead will not be forwarded.");
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
      console.error("[lead] Turnkey webhook failed", {
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
      console.error("[lead] Turnkey webhook returned failure", {
        reason: body.reason,
      });
      return res.status(502).json({ error: "We couldn't submit your request. Please try again in a moment." });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[lead] Turnkey webhook error", error);
    return res.status(502).json({ error: "We couldn't submit your request. Please try again in a moment." });
  }

  return res.status(200).json({ id });
}

