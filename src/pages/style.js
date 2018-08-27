import React from 'react';

import Main from '../components/Main';
import CardGrid from '../components/CardGrid';
import Card from '../components/Card';
import CategoryCalloutSection from '../components/CategoryCalloutSection';

const StylePage = ({ data }) => (
  <Main>
    <CardGrid>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Card
          key={node.id}
          path={node.frontmatter.path}
          linkText={`Read ${node.frontmatter.title}`}
          image={node.frontmatter.imageCard}
          imageAlt={node.frontmatter.imageCardAlt}
          heading={node.frontmatter.title}
          subhead={`By ${node.frontmatter.author}`}
        />
      ))}
    </CardGrid>
    <CategoryCalloutSection />
  </Main>
);

export const query = graphql`
  query StyleQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: {
            eq: "style"
          }
        }
      }
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            author
            imageCard
            imageCardAlt
            path
            title
          }
        }
      }
    }
  }
`;

export default StylePage;
