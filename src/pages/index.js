import React from 'react';
import Link from 'gatsby-link';

import HiddenTitle from '../components/HiddenTitle';
import CardGrid from '../components/CardGrid';
import Card from '../components/Card';

const IndexPage = ({ data }) => (
  <main>
    <HiddenTitle>
      {data.site.siteMetadata.title}
    </HiddenTitle>
    <CardGrid>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Card
          key={node.id}
          path={node.fields.slug}
          linkText={`Read ${node.frontmatter.title}`}
          image={node.frontmatter.image}
          heading={node.frontmatter.title}
          subhead={`By ${node.frontmatter.author}`}
        />
      ))}
    </CardGrid>
  </main>
)

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            author
            image
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
