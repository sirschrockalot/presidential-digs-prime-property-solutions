import { Link } from "react-router-dom";
import { trackNavClick, trackPhoneClick } from "@/lib/analytics";

const Footer = () => (
  <footer className="bg-foreground text-background relative overflow-hidden">
    <div className="container-narrow px-5 md:px-6 py-14 md:py-20">
      <div className="grid md:grid-cols-4 gap-10 md:gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-serif text-sm font-bold">P</span>
            </div>
            <span className="text-display text-lg">Presidential Digs</span>
          </div>
          <p className="text-sm opacity-50 leading-relaxed">
            Fair cash offers for homeowners who value speed, certainty, and dignity.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[11px] uppercase tracking-[0.2em] mb-5 opacity-40">Company</h4>
          <nav className="flex flex-col gap-3">
            <Link
              to="/about"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => trackNavClick("About Us", "/about", "footer")}
            >
              About Us
            </Link>
            <Link
              to="/how-it-works"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => trackNavClick("How It Works", "/how-it-works", "footer")}
            >
              How It Works
            </Link>
            <Link
              to="/faq"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => trackNavClick("FAQ", "/faq", "footer")}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => trackNavClick("Contact", "/contact", "footer")}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold text-[11px] uppercase tracking-[0.2em] mb-5 opacity-40">Situations</h4>
          <nav className="flex flex-col gap-3">
            <Link
              to="/situations/inherited-property"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => trackNavClick("Inherited Property", "/situations/inherited-property", "footer")}
            >
              Inherited Property
            </Link>
            <Link
              to="/situations/foreclosure"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => trackNavClick("Foreclosure", "/situations/foreclosure", "footer")}
            >
              Foreclosure
            </Link>
            <Link
              to="/situations/bad-tenants"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => trackNavClick("Bad Tenants", "/situations/bad-tenants", "footer")}
            >
              Bad Tenants
            </Link>
            <Link
              to="/situations/needs-repairs"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => trackNavClick("Needs Repairs", "/situations/needs-repairs", "footer")}
            >
              Needs Repairs
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold text-[11px] uppercase tracking-[0.2em] mb-5 opacity-40">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-60">
            <a
              href="tel:+14144095086"
              className="hover:opacity-100 transition-opacity"
              onClick={() => trackPhoneClick("footer")}
            >
              414 409 5086
            </a>
            <a href="mailto:deals@presidentialdigs.com" className="hover:opacity-100 transition-opacity">deals@presidentialdigs.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] opacity-30">© {new Date().getFullYear()} Presidential Digs. All rights reserved.</p>
        <div className="flex gap-6">
          <Link
            to="/privacy"
            className="text-[11px] opacity-30 hover:opacity-60 transition-opacity"
            onClick={() => trackNavClick("Privacy Policy", "/privacy", "footer")}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-[11px] opacity-30 hover:opacity-60 transition-opacity"
            onClick={() => trackNavClick("Terms of Service", "/terms", "footer")}
          >
            Terms of Service
          </Link>
          <Link
            to="/sms-policy"
            className="text-[11px] opacity-30 hover:opacity-60 transition-opacity"
            onClick={() => trackNavClick("SMS Policy", "/sms-policy", "footer")}
          >
            SMS Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
