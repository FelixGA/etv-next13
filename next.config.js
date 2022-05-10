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
// for magazin
//https://elektrotransporter-vergleich.de/magazin/foerderungen-fuer-elektrotransporter
//               zu https://elektrotransporter-vergleich.de/magazin/subsidies/foerderungen-fuer-elektrotransporter
// different slugs for transporter
//https://elektrotransporter-vergleich.de/transporter/garia-utility/
//             zu https://elektrotransporter-vergleich.de/transporter/garia-utility-pritsche/

//https://elektrotransporter-vergleich.de/transporter/alke-divaco-atx-340e/
//             zu https://elektrotransporter-vergleich.de/transporter/alke-atx-340-e-pritsche/

//https://elektrotransporter-vergleich.de/transporter/aixam-pro-e-truck/
//             zu https://elektrotransporter-vergleich.de/transporter/aixam-pro-etruck-pritsche/

//https://elektrotransporter-vergleich.de/transporter/tropos-able-xr/
//             zu https://elektrotransporter-vergleich.de/transporter/tropos-able-xr-xt1/

//https://elektrotransporter-vergleich.de/transporter/tropos-able/
//             zu https://elektrotransporter-vergleich.de/transporter/tropos-able-xr-xt2/

//https://elektrotransporter-vergleich.de/transporter/renault-master-z-e/
//             zu   https://elektrotransporter-vergleich.de//transporter/renault-master-e-tech

//https://elektrotransporter-vergleich.de/transporter/stama-maestro/
//             zu   https://elektrotransporter-vergleich.de//transporter/stama-maestro-pritsche

//https://elektrotransporter-vergleich.de/transporter/stama-maestro/
//             zu   https://elektrotransporter-vergleich.de//transporter/stama-maestro-pritsche

//https://elektrotransporter-vergleich.de/transporter/addax-mt/
//             zu   https://elektrotransporter-vergleich.de/transporter/addax-mt-pritsche

//     testberichte
//https://elektrotransporter-vergleich.de/fahrzeuge/streetscooter/
//https://elektrotransporter-vergleich.de/fahrzeuge/renault-kangoo-z-e/
//https://elektrotransporter-vergleich.de/fahrzeuge/ari-458/
//https://elektrotransporter-vergleich.de/fahrzeuge/mercedes-benz-e-vito/
//https://elektrotransporter-vergleich.de/fahrzeuge/nissan-e-nv200/
//https://elektrotransporter-vergleich.de/fahrzeuge/aixam-pro-e-truck/
//https://elektrotransporter-vergleich.de/fahrzeuge/alke-divaco-atx-340e/
//https://elektrotransporter-vergleich.de/fahrzeuge/efa-s-e35/
//https://elektrotransporter-vergleich.de/fahrzeuge/evo-transporter/
//https://elektrotransporter-vergleich.de/fahrzeuge/mercedes-benz-esprinter/
//https://elektrotransporter-vergleich.de/fahrzeuge/renault-master-z-e/
//https://elektrotransporter-vergleich.de/fahrzeuge/stama-maestro/
//https://elektrotransporter-vergleich.de/fahrzeuge/tropos-able/
//https://elektrotransporter-vergleich.de/fahrzeuge/evum-a-car/
//https://elektrotransporter-vergleich.de/fahrzeuge/garia-utility/
//https://elektrotransporter-vergleich.de/fahrzeuge/ari-458-koffer/
//https://elektrotransporter-vergleich.de/fahrzeuge/ari-458-kipper/
//https://elektrotransporter-vergleich.de/fahrzeuge/tropos-able-xr/
//https://elektrotransporter-vergleich.de/fahrzeuge/vw-abt-e-caddy/
//https://elektrotransporter-vergleich.de/fahrzeuge/saic-maxus-ev-80/
//https://elektrotransporter-vergleich.de/fahrzeuge/citroen-ejumpy/
//https://elektrotransporter-vergleich.de/fahrzeuge/vw-abt-e-transporter-6-1/
//https://elektrotransporter-vergleich.de/fahrzeuge/addax-mt/
//https://elektrotransporter-vergleich.de/fahrzeuge/peugeot-e-expert/
//https://elektrotransporter-vergleich.de/fahrzeuge/opel-vivaro-e-cargo/
//https://elektrotransporter-vergleich.de/fahrzeuge/nm-e-cargo-van/
//https://elektrotransporter-vergleich.de/fahrzeuge/maxus-edeliver-3/
//https://elektrotransporter-vergleich.de/fahrzeuge/vw-e-crafter/
//https://elektrotransporter-vergleich.de/fahrzeuge/man-etge/
//https://elektrotransporter-vergleich.de/fahrzeuge/toyota-proace-electric/
//
//alle zu transporter/:name
