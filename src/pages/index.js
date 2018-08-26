import React from 'react';

import Main from '../components/Main';
import TypeHiddenTitle from '../components/Typography/TypeHiddenTitle';
import CardGrid from '../components/CardGrid';
import Card from '../components/Card';
import CardSmallGrid from '../components/CardSmallGrid';
import CardSmall from '../components/CardSmall';

const IndexPage = ({ data }) => (
  <Main>
    <TypeHiddenTitle>
      {data.site.siteMetadata.title}
    </TypeHiddenTitle>
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
    <section>
      <CardSmallGrid>
        <CardSmall
          key="cardSmall1"
          path="/style"
          linkText="View all style posts"
          image="https://source.unsplash.com/random/256x192"
          heading="Style"
          caption="Super cute ’fits"
        />
        <CardSmall
          key="cardSmall2"
          path="/lifestyle"
          linkText="View all lifestyle posts"
          image="https://source.unsplash.com/random/256x192"
          heading="Lifestyle"
          caption="Living your best life"
        />
        <CardSmall
          key="cardSmall3"
          path="/travel"
          linkText="View all travel posts"
          image="https://source.unsplash.com/random/256x192"
          heading="Travel"
          caption="Literally skipping town"
        />
      </CardSmallGrid>
    </section>
  </Main>
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
