import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import { trackPageView } from "@/lib/analytics";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const SellYourHouse = lazy(() => import("./pages/SellYourHouse.tsx"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const FAQPage = lazy(() => import("./pages/FAQPage.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const SituationPage = lazy(() => import("./pages/SituationPage.tsx"));
const LocationPage = lazy(() => import("./pages/LocationPage.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.tsx"));
const SMSPolicy = lazy(() => import("./pages/SMSPolicy.tsx"));

const queryClient = new QueryClient();

const AnalyticsRouterListener = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <AnalyticsRouterListener />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sell-your-house" element={<SellYourHouse />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/situations/:slug" element={<SituationPage />} />
            <Route path="/locations/:slug" element={<LocationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
