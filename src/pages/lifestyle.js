import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { spaceStackDefault, spaceStackDouble } from '../theme/settings';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import CardGrid from '../components/UI/Cards/CardGrid';
import Card from '../components/UI/Cards/Card';
import TypeMastheadHeadline from '../components/Typography/TypeMastheadHeadline';
import TypeBody from '../components/Typography/TypeBody';

import lifestyleOGImage from '../assets/images/lifestyle-og-image.jpg';

const seoTitle = 'Lifestyle | Other Pieces | Everything that Isn’t Style or Travel';
const seoDescription = 'Mostly food and couches. But also money, politics, dating, feminism, the Real Housewives, and all the other stuff we have opinions on. It’s a long list.';
const seoImage = lifestyleOGImage;

const LifestylePage = props => (
  <StaticQuery
    query={graphql`
      query LifestyleQuery {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "lifestyle" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              frontmatter {
                author
                imageCard {
                  ...imageFragmentCard
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
      <>
        <SEO
          seoTitle={seoTitle}
          seoDescription={seoDescription}
          seoImage={seoImage}
          pagePath={props.location.pathname}
        />
        <GlobalLayout>
          <Main id="mainContent">
            {data.allMarkdownRemark
              ?
                <CardGrid>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Card
                      key={node.id}
                      path={node.frontmatter.path}
                      linkText={`Read ${node.frontmatter.title}`}
                      image={node.frontmatter.imageCard.childImageSharp.fluid}
                      imageAlt={node.frontmatter.imageCardAlt}
                      heading={node.frontmatter.title}
                      subhead={`By ${node.frontmatter.author}`}
                    />
                  ))}
                </CardGrid>
              :
                <StyledEmptyContent>
                  <StyledHeadline as="h1">Sorry</StyledHeadline>
                  <StyledP as="p">Lifestyle posts are coming soon!</StyledP>
                </StyledEmptyContent>
            }
          </Main>
        </GlobalLayout>
      </>
    )}
  />
);

const StyledEmptyContent = styled('div')`
  @media (min-width: 576px) {
    text-align: center;
  }
`;

const StyledHeadline = styled(TypeMastheadHeadline)`
  margin: ${spaceStackDouble};
`;

const StyledP = styled(TypeBody)`
  margin: ${spaceStackDefault};
`;

export default LifestylePage;
