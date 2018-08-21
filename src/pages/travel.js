import React from 'react'
import Link from 'gatsby-link'

const TravelPage = ({ data }) => (
  <div>
    <h1>Travel {data.site.siteMetadata.title}</h1>
  </div>
)

export const query = graphql`
  query TravelQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default TravelPage;
