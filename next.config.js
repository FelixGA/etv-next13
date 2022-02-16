const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    // runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
  i18n: {
    locales: ["en", "de"],
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
    ];
  },
});
