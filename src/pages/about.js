import React from 'react'
import Link from 'gatsby-link'

const AboutPage = ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
  </div>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
