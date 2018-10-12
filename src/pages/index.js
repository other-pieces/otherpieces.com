import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import styled from 'styled-components';

import {
  colorPeacockLight
} from '../theme/settings';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import ScreenReaderOnly from '../components/A11y/ScreenReaderOnly';
import CardGrid from '../components/UI/Cards/CardGrid';
import Card from '../components/UI/Cards/Card';
import CategoryCalloutSection from '../components/Layout/CategoryCalloutSection';
import Divider from '../components/UI/Decoration/Divider';
import TypeSectionHeading from '../components/Typography/TypeSectionHeading';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 6, sort: {fields: [frontmatter___date], order: DESC}) {
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
          <StyledHiddenTitle>
            {data.site.siteMetadata.title}
          </StyledHiddenTitle>
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
          <Divider />
          <StyledInstagramFeed>
            <StyledInstagramLink href="https://instagram.com/otherpieces/">
              <ScreenReaderOnly>Follow </ScreenReaderOnly> @otherpieces <ScreenReaderOnly>on Instagram</ScreenReaderOnly>
            </StyledInstagramLink>
          </StyledInstagramFeed>
        </Main>
      </GlobalLayout>
    )}
  />
);

const StyledHiddenTitle = ScreenReaderOnly.withComponent('h1');

const StyledInstagramFeed = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInstagramLink = TypeSectionHeading.withComponent(OutboundLink).extend`
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${colorPeacockLight};
    text-decoration: underline;
  }

  &:focus {
    outline: 0.2rem solid ${colorPeacockLight};
    outline-offset: 0.4rem;
  }
`;

export default IndexPage;
