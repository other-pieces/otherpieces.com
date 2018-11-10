import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import CardGrid from '../components/UI/Cards/CardGrid';
import Card from '../components/UI/Cards/Card';

import styleOGImage from '../assets/images/style-og-image.jpg';

const seoTitle = 'Style | Other Pieces | Super Cute ’Fits with an Ethical, Minimal Twist';
const seoDescription = 'Ethical, minimal style doesn’t mean sacrficing your personal flair. Style is an ongoing exploration, and we’re still learning. It’s cool if you are, too.';
const seoImage = styleOGImage;

const StylePage = props => (
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
          pagePath={props.location.pathname}
        />
        <GlobalLayout>
          <Main id="mainContent">
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
          </Main>
        </GlobalLayout>
      </>
    )}
  />
);

export default StylePage;
