import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackCTA, trackNavClick, trackPhoneClick } from "@/lib/analytics";


const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Situations", href: "/situations/inherited-property" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
        <div className="container-narrow flex items-center justify-between h-14 md:h-[72px] px-5 md:px-6">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => trackNavClick("Logo", "/", "header")}
          >
            <div className="w-7 h-7 md:w-8 md:h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-sm md:text-base font-bold">P</span>
            </div>
            <span className="text-display text-lg md:text-xl text-foreground">Presidential Digs</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => trackNavClick(link.label, link.href, "header")}
                className={`text-[13px] font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+14144095086"
              className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => trackPhoneClick("header")}
            >
              <Phone className="w-3.5 h-3.5" />
              414 409 5086
            </a>
            <Link
              to="/sell-your-house"
              className="btn-primary px-5 py-2.5"
              onClick={() => trackCTA("Get My Offer", "header-primary-cta", "/sell-your-house")}
            >
              Get My Offer
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/sell-your-house"
              className="btn-primary px-3.5 py-2 text-[11px]"
              onClick={() => trackCTA("Get Offer", "header-mobile-cta", "/sell-your-house")}
            >
              Get Offer
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-1.5"
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-card border-b border-border overflow-hidden"
            >
              <nav className="flex flex-col px-5 py-3 gap-0">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => {
                      setMobileOpen(false);
                      trackNavClick(link.label, link.href, "mobile-menu");
                    }}
                    className="py-3.5 text-[15px] font-medium text-foreground border-b border-border/50 last:border-0"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+14144095086"
                  className="py-3.5 flex items-center gap-2 text-[15px] font-medium text-accent"
                  onClick={() => trackPhoneClick("header")}
                >
                  <Phone className="w-4 h-4" /> 414 409 5086
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
