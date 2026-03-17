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

    if (!smsConsent) {
      return res.status(400).json({ error: "SMS consent is required." });
    }
  }

  const id = (globalThis.crypto && crypto.randomUUID && crypto.randomUUID()) || `${Date.now()}`;

  // TODO:INTEGRATION - connect this handler to your CRM, email service,
  // or internal lead intake system. The payload below is the normalized shape
  // you can rely on from the frontend.
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
    receivedAt: new Date().toISOString(),
    isSpam,
  };

  // eslint-disable-next-line no-console
  console.info("[lead] received", normalizedLead);

  // For now, respond immediately; future integrations can await CRM/API calls above.
  return res.status(200).json({ id });
}

