module.exports = {
  siteMetadata: {
    title: 'Other Pieces',
  },
  plugins: [
    // Head
    'gatsby-plugin-react-helmet',
    // Styles
    'gatsby-plugin-styled-components',
    // Markdown
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    // JavaScript Pages
    'gatsby-transformer-javascript-frontmatter',
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
  ],
}
