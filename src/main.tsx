import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initAnalytics } from "@/lib/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";

initAnalytics();

createRoot(document.getElementById("root")!).render(
  <>
    <SpeedInsights />
    <App />
  </>,
);
