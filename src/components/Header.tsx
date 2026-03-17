import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-display text-2xl md:text-3xl text-foreground">Presidential Digs</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
          <Link
            to="/sell-your-house"
            className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity rounded-sm"
          >
            Get My Offer
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            to="/sell-your-house"
            className="bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-sm"
          >
            Get Offer
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground p-1">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-medium text-foreground border-b border-border last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+15551234567" className="py-3 flex items-center gap-2 text-base font-medium text-accent">
                <Phone className="w-4 h-4" /> (555) 123-4567
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
