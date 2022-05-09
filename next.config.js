const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: ["elektrotransporter-vergleich.de"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  i18n: {
    // locales: ["de", "en"],
    locales: ["de"],
    defaultLocale: "de",
    domains: [
      {
        domain: "elektrotransporter-vergleich.de",
        defaultLocale: "de",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path((?!ie11_fallback.html$).*)",
        has: [
          {
            type: "header",
            key: "user-agent",
            value: "(.*Trident.*)",
          },
        ],
        permanent: false,
        destination: "/ie11_fallback.html",
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
});
// different slugs for transporter
//https://elektrotransporter-vergleich.de/transporter/garia-utility/
//             zu https://elektrotransporter-vergleich.de/transporter/garia-utility-pritsche/
//https://elektrotransporter-vergleich.de/transporter/aixam-pro-e-truck/
//             zu https://elektrotransporter-vergleich.de/transporter/aixam-pro-etruck-pritsche/
//https://elektrotransporter-vergleich.de/transporter/tropos-able-xr/
//             zu https://elektrotransporter-vergleich.de/transporter/tropos-able-xr-xt1/
//https://elektrotransporter-vergleich.de/transporter/tropos-able/
//             zu https://elektrotransporter-vergleich.de/transporter/tropos-able-xr-xt2/
//https://elektrotransporter-vergleich.de/transporter/alke-divaco-atx-340e/
//             zu  https://elektrotransporter-vergleich.de/transporter/alke-atx-340-e-pritsche/
//https://elektrotransporter-vergleich.de/transporter/renault-master-z-e/
//             zu   https://elektrotransporter-vergleich.de//transporter/renault-master-e-tech
//https://elektrotransporter-vergleich.de/transporter/stama-maestro/
//             zu   https://elektrotransporter-vergleich.de//transporter/stama-maestro-pritsche

//https://elektrotransporter-vergleich.de/transporter/stama-maestro/
//             zu   https://elektrotransporter-vergleich.de//transporter/stama-maestro-pritsche
