export interface SubmitLeadPayload {
  name: string;
  phone: string;
  email: string;
  address: string;
  message?: string;
  source?: string;
  page?: string;
  smsConsent: boolean;
  honeypot?: string;
}

export interface SubmitLeadResult {
  id: string;
}

const getLeadEndpoint = () => {
  const base = import.meta.env.VITE_LEAD_API_BASE_URL;
  if (base) {
    try {
      const url = new URL("/api/leads", base);
      return url.toString();
    } catch {
      // eslint-disable-next-line no-console
      console.warn("Invalid VITE_LEAD_API_BASE_URL, falling back to relative /api/leads");
    }
  }
  return "/api/leads";
};

export async function submitLead(payload: SubmitLeadPayload): Promise<SubmitLeadResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const endpoint = getLeadEndpoint();

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Lead submission failed with status ${response.status}`);
    }

    const data = (await response.json().catch(() => null)) as { id?: string } | null;

    return {
      id: data?.id ?? "",
    };
  } catch (error) {
    // Surface a clean, user-friendly error while preserving details in the console for debugging.
    // eslint-disable-next-line no-console
    console.error("submitLead error", error);
    throw new Error("We couldn't submit your request. Please try again in a moment.");
  } finally {
    clearTimeout(timeout);
  }
}

