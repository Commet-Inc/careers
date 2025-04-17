import type React from "react";
import "@workspace/ui/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              title: "Founder Developer",
              description:
                "Buscamos un desarrollador con experiencia en React, Next.js y TypeScript para construir una solución B2B SaaS que simplifica el cálculo y pago de comisiones.",
              datePosted: new Date().toISOString(),
              validThrough: new Date(
                new Date().setMonth(new Date().getMonth() + 3),
              ).toISOString(),
              employmentType: "FULL_TIME",
              hiringOrganization: {
                "@type": "Organization",
                name: "Commet",
                sameAs: "https://commet.co",
                logo: "https://commet.co/logo.png",
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "Argentina",
                  addressLocality: "Remote",
                },
              },
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: {
                  "@type": "QuantitativeValue",
                  minValue: 15000,
                  maxValue: 18000,
                  unitText: "YEAR",
                },
              },
              skills:
                "React, Next.js, TypeScript, Server Actions, RSC, Node, SQL",
              jobBenefits:
                "Stock Options, Vacaciones ilimitadas, Macbook, Home office, Presupuesto para formación",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
