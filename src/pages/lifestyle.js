import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import lifestyleOGImage from '../assets/images/lifestyle-og-image.jpg';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import SEO from '../components/SEO/SEO';
import Card from '../components/UI/Cards/Card';
import CardGrid from '../components/UI/Cards/CardGrid';

const seoTitle = 'Lifestyle | Other Pieces | Everything that Isn’t Style or Travel';
const seoDescription =
  'Mostly food and couches. But also money, politics, dating, feminism, the Real Housewives, and all the other stuff we have opinions on. It’s a long list.';
const seoImage = lifestyleOGImage;
const seoImageAlt = 'A cozy room with a well made bed and nighstand with books';

const LifestylePage = ({ location: { pathname } }) => (
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
          seoImageAlt={seoImageAlt}
          pagePath={pathname}
        />
        <GlobalLayout>
          <Main id="mainContent">
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
          </Main>
        </GlobalLayout>
      </>
    )}
  />
);

LifestylePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LifestylePage;
