import React from 'react'
import Link from 'gatsby-link'

const LifestylePage = ({ data }) => (
  <div>
    <h1>Lifestyle {data.site.siteMetadata.title}</h1>
  </div>
)

export const query = graphql`
  query LifestyleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default LifestylePage;
