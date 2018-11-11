import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import ScreenReaderOnly from '../components/A11y/ScreenReaderOnly';
import CardGrid from '../components/UI/Cards/CardGrid';
import Card from '../components/UI/Cards/Card';
import SuggestedContent from '../components/Content/SuggestedContent';

import homeOGImage from '../assets/images/home-og-image.jpg';

const seoTitle = 'Other Pieces | A Hideout for Interesting, Intelligent, Badass Women';
const seoDescription = 'Where fashion isn’t shallow and our conversations aren’t either. A place where you can talk freely about style, travel, money, and smashing the patriarchy.';
const seoImage = homeOGImage;

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
                  image={node.frontmatter.imageCard.childImageSharp.fluid}
                  imageAlt={node.frontmatter.imageCardAlt}
                  heading={node.frontmatter.title}
                  subhead={`By ${node.frontmatter.author}`}
                />
              ))}
            </CardGrid>
            <SuggestedContent hiddenCalloutSectionTitle={false} />
          </Main>
        </GlobalLayout>
      </>
    )}
  />
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
