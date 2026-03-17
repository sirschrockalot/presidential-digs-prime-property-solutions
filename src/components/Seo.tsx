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
}

const DEFAULT_IMAGE = "/placeholder.svg";

const getBaseUrl = () => {
  if (typeof window !== "undefined" && window.location.origin) {
    return window.location.origin;
  }
  // TODO:SEO - set your production origin here if needed for server rendering or prerendering
  return "https://presidentialdigs.com";
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
  }, [title, description, canonicalPath, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage]);

  return null;
};

