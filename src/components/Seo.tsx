import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  jsonLd?: unknown | unknown[];
}

const DEFAULT_IMAGE = import.meta.env.VITE_SOCIAL_IMAGE_URL || "/placeholder.svg";

const getBaseUrl = () => {
  const envUrl = import.meta.env.VITE_SITE_URL;
  if (envUrl) {
    return envUrl.replace(/\/+$/, "");
  }
  if (typeof window !== "undefined" && window.location.origin) {
    return window.location.origin;
  }
  // Fallback only used in non-browser contexts when VITE_SITE_URL is not set.
  return "http://localhost:8080";
};

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
};

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
};

export const Seo = ({
  title,
  description,
  canonicalPath,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  jsonLd,
}: SeoProps) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    const baseUrl = getBaseUrl();
    const canonicalUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : `${baseUrl}${window.location.pathname}`;

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    const resolvedOgTitle = ogTitle ?? title;
    const resolvedOgDescription = ogDescription ?? description;
    const resolvedOgImage = ogImage ?? DEFAULT_IMAGE;

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: resolvedOgTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: resolvedOgDescription,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: resolvedOgImage,
    });

    const resolvedTwitterTitle = twitterTitle ?? resolvedOgTitle;
    const resolvedTwitterDescription = twitterDescription ?? resolvedOgDescription;
    const resolvedTwitterImage = twitterImage ?? resolvedOgImage;

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: resolvedTwitterTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: resolvedTwitterDescription,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: resolvedTwitterImage,
    });

    // Structured data (JSON-LD)
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld="true"]');
    existingScripts.forEach((node) => node.parentNode?.removeChild(node));

    if (jsonLd) {
      const payloads = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      payloads.forEach((payload) => {
        try {
          const script = document.createElement("script");
          script.type = "application/ld+json";
          script.setAttribute("data-seo-jsonld", "true");
          script.textContent = JSON.stringify(payload);
          document.head.appendChild(script);
        } catch {
          // ignore JSON-LD serialization errors
        }
      });
    }
  }, [title, description, canonicalPath, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, jsonLd]);

  return null;
};

