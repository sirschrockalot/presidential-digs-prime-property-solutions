import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

const baseUrl = import.meta.env.VITE_SITE_URL || "";

export const breadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.label,
    ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
  })),
});

const BreadcrumbNav = ({ items }: BreadcrumbNavProps) => (
  <AnimatedSection>
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3 h-3" />}
            {item.href ? (
              <Link to={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  </AnimatedSection>
);

export default BreadcrumbNav;
