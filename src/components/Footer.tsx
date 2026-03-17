import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-4 gap-10 md:gap-8">
        <div className="md:col-span-1">
          <span className="text-display text-2xl block mb-4">Presidential Digs</span>
          <p className="text-sm opacity-70 leading-relaxed">
            Providing fair cash offers for homeowners who value speed, certainty, and dignity.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Company</h4>
          <nav className="flex flex-col gap-3">
            <Link to="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">About Us</Link>
            <Link to="/how-it-works" className="text-sm opacity-70 hover:opacity-100 transition-opacity">How It Works</Link>
            <Link to="/faq" className="text-sm opacity-70 hover:opacity-100 transition-opacity">FAQ</Link>
            <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Situations</h4>
          <nav className="flex flex-col gap-3">
            <Link to="/situations/inherited-property" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Inherited Property</Link>
            <Link to="/situations/foreclosure" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Foreclosure</Link>
            <Link to="/situations/bad-tenants" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Bad Tenants</Link>
            <Link to="/situations/needs-repairs" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Needs Repairs</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <a href="tel:+15551234567" className="hover:opacity-100 transition-opacity">(555) 123-4567</a>
            <a href="mailto:info@presidentialdigs.com" className="hover:opacity-100 transition-opacity">info@presidentialdigs.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs opacity-50">© {new Date().getFullYear()} Presidential Digs. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link to="/terms" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
