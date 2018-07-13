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
  ],
}
