export interface SubmitLeadPayload {
  name: string;
  phone: string;
  email: string;
  address: string;
  message?: string;
  source?: string;
  page?: string;
}

export interface SubmitLeadResult {
  id: string;
}

// TODO:API - point this to your real backend endpoint when ready
const LEAD_ENDPOINT = "/api/leads";

export async function submitLead(payload: SubmitLeadPayload): Promise<SubmitLeadResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(LEAD_ENDPOINT, {
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

