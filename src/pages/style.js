import React from 'react';
import { graphql } from 'gatsby';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import CardGrid from '../components/UI/Cards/CardGrid';
import Card from '../components/UI/Cards/Card';

const StylePage = ({ data }) => (
  <StaticQuery
    query={graphql`
      query StyleQuery {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "style"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
          edges {
            node {
              id
              frontmatter {
                author
                imageCard {
                  childImageSharp {
                    resolutions(width: 360) {
                      ...GatsbyImageSharpResolutions
                    }
                  }
                }
                imageCardAlt
                path
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <GlobalLayout>
        <Main id="mainContent">
          <CardGrid>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card
                key={node.id}
                path={node.frontmatter.path}
                linkText={`Read ${node.frontmatter.title}`}
                image={node.frontmatter.imageCard.childImageSharp.resolutions}
                imageAlt={node.frontmatter.imageCardAlt}
                heading={node.frontmatter.title}
                subhead={`By ${node.frontmatter.author}`}
              />
            ))}
          </CardGrid>
        </Main>
      </GlobalLayout>
    )}
  />
);

export default StylePage;
