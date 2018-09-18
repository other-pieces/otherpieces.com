import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import CardGrid from '../components/UI/Cards/CardGrid';
import Card from '../components/UI/Cards/Card';

const TravelPage = () => (
  <StaticQuery
    query={graphql`
      query TravelQuery {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "travel"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
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
    `}
    render={data => (
      <GlobalLayout>
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
        </Main>
      </GlobalLayout>
    )}
  />
);

export default TravelPage;
