// -----------------------------------------------------
// lib/analytics.ts
// Google Analytics tracking functions for Next.js 15.
// Page views, custom events, web vitals, and user properties.
// -----------------------------------------------------
"use client";

// ✅ Strongly typed AnalyticsEvent
export interface AnalyticsEvent {
  name: string;
  params?: Record<string, string | number | boolean>;
}

// ✅ Type window.gtag
declare global {
  interface Window {
    gtag: (...args: GtagArguments) => void;
    dataLayer: unknown[];
  }

  type GtagArguments =
    | [string, string, Record<string, unknown>?]
    | [string, Record<string, unknown>];
}

// ✅ Track page views
export const pageview = (url: string): void => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string, {
      page_path: url,
    });
  }
};

// ✅ Track custom events
export const trackEvent = ({ name, params = {} }: AnalyticsEvent): void => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", name, params);
  }
};

// ✅ Track performance web vitals
export const trackWebVitals = ({
  name,
  value,
  id,
}: {
  name: string;
  value: number;
  id: string;
}): void => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", name, {
      value: Math.round(name === "CLS" ? value * 1000 : value),
      event_label: id,
      non_interaction: true,
    });
  }
};

// ✅ Set custom user properties
export const setUserProperties = (
  properties: Record<string, string | number | boolean>
): void => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("set", "user_properties", properties);
  }
};
