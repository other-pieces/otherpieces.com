import React from 'react'
import Link from 'gatsby-link'

const StylePage = ({ data }) => (
  <div>
    <h1>Style {data.site.siteMetadata.title}</h1>
  </div>
)

export const query = graphql`
  query StyleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default StylePage;
