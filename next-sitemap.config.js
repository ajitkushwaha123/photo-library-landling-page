/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://foodsnap.in",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true, 
  alternateRefs: [
    {
      href: "https://es.foodsnap.in",
      hreflang: "es",
    },
    {
      href: "https://fr.foodsnap.in",
      hreflang: "fr",
    },
  ],

  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    alternateRefs: config.alternateRefs ?? [],
  }),

  additionalPaths: async () => [], 

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/", 
      },
    ],
  },
};
