import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colorPeacockLight } from '../theme/settings';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import ScreenReaderOnly from '../components/A11y/ScreenReaderOnly';
import CardGrid from '../components/UI/Cards/CardGrid';
import Card from '../components/UI/Cards/Card';
import CategoryCalloutSection from '../components/Layout/CategoryCalloutSection';
import Divider from '../components/UI/Decoration/Divider';
import TypeSectionHeading from '../components/Typography/TypeSectionHeading';

const seoTitle = 'Other Pieces | HOMEPAGE TITLE';
const seoDescription = 'Other Pieces HOMEPAGE DESCRIPTION';
const seoImage = '/homepage-image';

const IndexPage = props => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 6, sort: { fields: [frontmatter___date], order: DESC }) {
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
        imageCategoryCalloutStart: file(relativePath: { eq: "jacqs-sweater-and-denim-detail.jpg" }) {
          ...imageFragmentCardSmall
        }
        imageCategoryCalloutCenter: file(relativePath: { eq: "jacqs-apartment-bedroom.jpg" }) {
          ...imageFragmentCardSmall
        }
        imageCategoryCalloutEnd: file(relativePath: { eq: "sara-travel-in-italy.jpg" }) {
          ...imageFragmentCardSmall
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
            <ScreenReaderOnly as="h1">{data.site.siteMetadata.title}</ScreenReaderOnly>
            <CardGrid>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card
                  key={node.id}
                  path={node.frontmatter.path}
                  linkText={`Read ${node.frontmatter.title}`}
                  image={node.frontmatter.imageCard.childImageSharp.fixed}
                  imageAlt={node.frontmatter.imageCardAlt}
                  heading={node.frontmatter.title}
                  subhead={`By ${node.frontmatter.author}`}
                />
              ))}
            </CardGrid>
            <CategoryCalloutSection
              calloutImageStart={data.imageCategoryCalloutStart.childImageSharp.fixed}
              calloutImageCenter={data.imageCategoryCalloutCenter.childImageSharp.fixed}
              calloutImageEnd={data.imageCategoryCalloutEnd.childImageSharp.fixed}
            />
            <Divider />
            <StyledInstagramFeed>
              <StyledInstagramLink as={OutboundLink} href="https://instagram.com/otherpieces/">
                <ScreenReaderOnly>Follow </ScreenReaderOnly> @otherpieces{' '}
                <ScreenReaderOnly>on Instagram</ScreenReaderOnly>
              </StyledInstagramLink>
            </StyledInstagramFeed>
          </Main>
        </GlobalLayout>
      </>
    )}
  />
);

const StyledInstagramFeed = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInstagramLink = styled(TypeSectionHeading)`
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

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
