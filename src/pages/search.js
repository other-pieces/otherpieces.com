import React from 'react'
import Link from 'gatsby-link'

const SearchPage = ({ data }) => (
  <div>
    <h1>Search {data.site.siteMetadata.title}</h1>
  </div>
)

export const query = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default SearchPage;
