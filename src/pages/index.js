import React from 'react';

import Main from '../components/Layout/Main';
import TypeHiddenText from '../components/Typography/TypeHiddenText';
import CardGrid from '../components/UI/Cards/CardGrid';
import Card from '../components/UI/Cards/Card';
import CategoryCalloutSection from '../components/Layout/CategoryCalloutSection';

const IndexPage = ({ data }) => (
  <Main>
    <StyledTypeHiddenTitle>
      {data.site.siteMetadata.title}
    </StyledTypeHiddenTitle>
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

const StyledTypeHiddenTitle = TypeHiddenText.withComponent('h1');

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 6
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

export default IndexPage;
