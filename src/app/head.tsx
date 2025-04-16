// -----------------------------------------------------
// app/head.tsx
// Global <head> configuration: includes viewport meta,
// JSON‑LD structured data, and Google Analytics via next/script.
// -----------------------------------------------------
import Script from "next/script";

export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* JSON‑LD: schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ulysses Capital",
            url: "https://ulyssescap.com",
            logo: "https://ulyssescap.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/ulysses-capital",
              "https://twitter.com/ulyssescapital",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Seoul",
              addressCountry: "KR",
            },
            description:
              "Ulysses Capital is a diversified investment management firm specializing in equities, fixed income/debt, venture capital, real estate, and commodities.",
          }),
        }}
      />

      {/* Google Analytics: loaded after page is interactive */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id="ga-setup" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
