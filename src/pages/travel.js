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

import travelOGImage from '../assets/images/travel-og-image.jpg';

const seoTitle = 'Travel | Other Pieces | Travel Tips for When you Need to Skip Town';
const seoDescription = 'Where to go, what to eat, and how to pack. So set that OOO email. We’re thinking Kyoto, ramen (duh), and with room for souveniers. We’ll be there in a sec.';
const seoImage = travelOGImage;

const TravelPage = props => (
  <StaticQuery
    query={graphql`
      query TravelQuery {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "travel" } } }
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
                  <StyledP as="p">We&rsquo;re sleeping off the jet lag.</StyledP>
                  <StyledP>But we promise great travel posts are coming soon!</StyledP>
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

export default TravelPage;
