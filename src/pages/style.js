import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styleOGImage from '../assets/images/style-og-image.jpg';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import SEO from '../components/SEO/SEO';
import Card from '../components/UI/Cards/Card';
import CardGrid from '../components/UI/Cards/CardGrid';

const seoTitle = 'Style | Other Pieces | Super Cute ’Fits with an Ethical, Minimal Twist';
const seoDescription =
  'Ethical, minimal style doesn’t mean sacrficing your personal flair. Style is an ongoing exploration, and we’re still learning. It’s cool if you are, too.';
const seoImage = styleOGImage;
const seoImageAlt = 'Jaqs wearing a thick wool sweater, vintage denim, and antique gold ring';

const StylePage = ({ location: { pathname } }) => (
  <StaticQuery
    query={graphql`
      query StyleQuery {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "style" } } }
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

StylePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default StylePage;
