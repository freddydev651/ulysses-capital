// ----------------------------------------------
// page.metadata.ts
// Shared metadata object (NOT automatically used)
// You must import and export in a page or layout
// ----------------------------------------------
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulysses Capital | Investment Management Firm",
  description:
    "Ulysses Capital is a diversified investment management firm specializing in equities, fixed income/debt, venture capital, real estate, and commodities.",
  alternates: {
    canonical: "/",
  },
};

// Example usage in app/page.tsx or app/layout.tsx:
// export { metadata } from "./page.metadata";
