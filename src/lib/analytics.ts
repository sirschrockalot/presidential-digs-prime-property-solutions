type AnalyticsEventPayload = Record<string, unknown>;

type AnalyticsDispatcher = (eventName: string, payload?: AnalyticsEventPayload) => void;

// Simple, swappable dispatcher. By default, logs to the console.
// To connect to GA4, GTM, or another tool, replace the body of this function.
const defaultDispatcher: AnalyticsDispatcher = (eventName, payload) => {
  // eslint-disable-next-line no-console
  console.debug("[analytics]", eventName, payload ?? {});

  // Example GA4 integration:
  // if (typeof window !== "undefined" && typeof window.gtag === "function") {
  //   window.gtag("event", eventName, payload);
  // }

  // Example GTM / dataLayer integration:
  // if (typeof window !== "undefined" && Array.isArray((window as any).dataLayer)) {
  //   (window as any).dataLayer.push({ event: eventName, ...payload });
  // }
};

let dispatcher: AnalyticsDispatcher = defaultDispatcher;

export const setAnalyticsDispatcher = (nextDispatcher: AnalyticsDispatcher) => {
  dispatcher = nextDispatcher;
};

const track = (eventName: string, payload?: AnalyticsEventPayload) => {
  try {
    dispatcher(eventName, payload);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Analytics dispatcher error", error);
  }
};

export const trackPageView = (path: string, title?: string) => {
  track("page_view", { path, title });
};

export const trackNavClick = (label: string, href: string, location: "header" | "footer" | "mobile-menu") => {
  track("nav_click", { label, href, location });
};

export const trackCTA = (label: string, location: string, href?: string) => {
  track("cta_click", { label, location, href });
};

export interface TrackLeadSubmittedPayload {
  source?: string;
  page?: string;
  [key: string]: unknown;
}

export const trackLeadSubmitted = (payload: TrackLeadSubmittedPayload) => {
  track("lead_submitted", payload);
};

