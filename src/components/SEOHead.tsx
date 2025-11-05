// Guidesoft: SEO Head Component for Meta Tags
import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEOHead = ({
  title,
  description,
  keywords = "modeling, fashion, talent, agencies, casting, campaigns",
  image = "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  url,
  type = "website",
}: SEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | GSMODELING`;

    // Set meta tags
    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const setPropertyTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);

    // Open Graph tags
    setPropertyTag("og:title", title);
    setPropertyTag("og:description", description);
    setPropertyTag("og:image", image);
    setPropertyTag("og:type", type);
    if (url) setPropertyTag("og:url", url);

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);
  }, [title, description, keywords, image, url, type]);

  return null;
};