module.exports = {
  siteMetadata: {
    title: 'Other Pieces',
    siteUrl: 'https://www.otherpieces.com',
  },
  plugins: [
    // Head
    'gatsby-plugin-react-helmet',
    // Styles
    'gatsby-plugin-styled-components',
    // Markdown
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    // JavaScript Pages
    'gatsby-transformer-javascript-frontmatter',
    // Images
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 604,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    // SEO
    'gatsby-plugin-sitemap',
    // Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-127376635-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    // PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Other Pieces",
        short_name: "Other Pieces",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/assets/favicon/other-pieces-icon.png",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
