type AnalyticsEventPayload = Record<string, unknown>;

type AnalyticsDispatcher = (eventName: string, payload?: AnalyticsEventPayload) => void;

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const GTM_CONTAINER_ID = import.meta.env.VITE_GTM_CONTAINER_ID;

const consoleDispatcher: AnalyticsDispatcher = (eventName, payload) => {
  // eslint-disable-next-line no-console
  console.debug("[analytics]", eventName, payload ?? {});
};

const ga4Dispatcher: AnalyticsDispatcher = (eventName, payload) => {
  if (typeof window === "undefined") return;
  const gtag = (window as any).gtag;
  if (typeof gtag !== "function" || !GA_MEASUREMENT_ID) return;
  gtag("event", eventName, {
    send_to: GA_MEASUREMENT_ID,
    ...payload,
  });
};

const gtmDispatcher: AnalyticsDispatcher = (eventName, payload) => {
  if (typeof window === "undefined") return;
  const dataLayer = (window as any).dataLayer;
  if (!Array.isArray(dataLayer) || !GTM_CONTAINER_ID) return;
  dataLayer.push({
    event: eventName,
    ...payload,
  });
};

let dispatcher: AnalyticsDispatcher = consoleDispatcher;

export const initAnalytics = () => {
  if (GA_MEASUREMENT_ID && GTM_CONTAINER_ID) {
    dispatcher = (eventName, payload) => {
      ga4Dispatcher(eventName, payload);
      gtmDispatcher(eventName, payload);
      consoleDispatcher(eventName, payload);
    };
  } else if (GA_MEASUREMENT_ID) {
    dispatcher = (eventName, payload) => {
      ga4Dispatcher(eventName, payload);
      consoleDispatcher(eventName, payload);
    };
  } else if (GTM_CONTAINER_ID) {
    dispatcher = (eventName, payload) => {
      gtmDispatcher(eventName, payload);
      consoleDispatcher(eventName, payload);
    };
  } else {
    dispatcher = consoleDispatcher;
  }
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

export const trackPhoneClick = (location: "header" | "footer" | "contact") => {
  track("phone_click", { location });
};

export interface TrackLeadSubmittedPayload {
  source?: string;
  page?: string;
  [key: string]: unknown;
}

export const trackLeadSubmitted = (payload: TrackLeadSubmittedPayload) => {
  track("lead_submitted", payload);
};

export const trackLeadFailed = (payload: TrackLeadSubmittedPayload & { error?: string }) => {
  track("lead_failed", payload);
};

