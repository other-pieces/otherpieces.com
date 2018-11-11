import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import TypeHeadline from '../components/Typography/TypeHeadline';
import TypeBylineHeading from '../components/Typography/TypeBylineHeading';

import {
  colorCharcoal012,
  colorPeacock048,
  colorPeacock096,
  fontFamilySans,
  fontFamilySerif,
  spaceInsetSquishDouble,
  spaceStackDefault,
  spaceStackDouble,
  spaceStackEighth,
  spaceStackQuad,
  spaceStackOct,
  weightBold,
  weightLight,
  weightRegular,
  weightSemiBold,
  spaceHalf
} from '../theme/settings';

const PostPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        author,
        date,
        title,
        seoTitle,
        seoDescription,
        imageHeroine,
        imageHeroineAlt,
        isImageHeroinePortrait,
      },
      fields: { slug },
    },
    postOGImage
  },
}) => (
  <>
    <SEO
      author={author}
      datePublished={date}
      seoTitle={seoTitle}
      seoDescription={seoDescription}
      seoImage={postOGImage.childImageSharp.fixed.src}
      pagePage={slug}
      isBlogPost
    />
    <GlobalLayout>
      <StyledArticle as="article" id="mainContent">
        <StyledTypeHeadline as="h1">{title}</StyledTypeHeadline>
        {imageHeroine && (
          <StyledImageHeroine
            fluid={imageHeroine.childImageSharp.fluid}
            portrait={isImageHeroinePortrait}
            alt={imageHeroineAlt}
          />
        )}
        <StyledByline as="p">By {author} | {date}</StyledByline>
        <StyledArticleBody dangerouslySetInnerHTML={{ __html: html }} />
      </StyledArticle>
    </GlobalLayout>
  </>
);

const StyledArticle = styled(Main)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 575px) {
    margin: ${spaceStackQuad};
  }

  @media (max-width: 576px) {
    margin: ${spaceStackOct};
  }
`;

const StyledTypeHeadline = styled(TypeHeadline)`
  max-width: 104.8rem;
  width: 100%;
  text-align: center;

  @media (min-width: 575px) {
    margin: ${spaceStackDouble};
  }

  @media (max-width: 576px) {
    margin: ${spaceStackQuad};
  }
`;

const StyledImageHeroine = styled(Img)`
  ${props => (props.portrait ? 'max-width: 78.6rem;' : '')};
  width: 100%;
  display: block;

  @media (min-width: 575px) {
    margin: ${spaceStackDefault};
  }

  @media (max-width: 576px) {
    margin: ${spaceStackDouble};
  }
`;

const StyledByline = styled(TypeBylineHeading)`
  text-align: center;

  @media (min-width: 575px) {
    margin: ${spaceStackDouble};
  }

  @media (max-width: 576px) {
    margin: ${spaceStackQuad};
  }
`;

// TODO: Look into extending type specs instead of hardcoding properties
// TODO: Style images provided in post content
const StyledArticleBody = styled.div`
  h2 {
    margin: ${spaceStackDefault};
    max-width: 60.4rem;
    width: 100%;
    font-family: ${fontFamilySerif};
    font-weight: ${weightRegular};
    color: ${colorCharcoal012};

    @media (max-width: 575px) {
      font-size: 2.6rem;
      line-height: 1.231;
    }

    @media (min-width: 576px) {
      font-size: 3.6rem;
      line-height: 1.222;
    }
  }

  h3 {
    margin: ${spaceStackDefault};
    max-width: 60.4rem;
    width: 100%;
    font-family: ${fontFamilySerif};
    font-weight: ${weightRegular};
    color: ${colorCharcoal012};

    @media (max-width: 575px) {
      font-size: 2rem;
      line-height: 1.2;
    }

    @media (min-width: 576px) {
      font-size: 3.2rem;
      line-height: 1.125;
    }
  }

  h4 {
    margin: ${spaceStackDefault};
    max-width: 60.4rem;
    width: 100%;
    font-family: ${fontFamilySerif};
    font-weight: ${weightRegular};
    color: ${colorCharcoal012};

    @media (max-width: 575px) {
      font-size: 1.6rem;
      line-height: 1.125;
    }

    @media (min-width: 576px) {
      font-size: 2.4rem;
      line-height: 1.167;
    }
  }

  p {
    margin: ${spaceStackDefault};
    max-width: 60.4rem;
    width: 100%;
    font-family: ${fontFamilySans};
    font-weight: ${weightLight};
    color: ${colorCharcoal012};

    @media (max-width: 575px) {
      font-size: 1.6rem;
      line-height: 1.625;
    }

    @media (min-width: 576px) {
      font-size: 1.8rem;
      line-height: 1.778;
    }
  }

  a {
    font-family: ${fontFamilySans};
    font-weight: ${weightSemiBold};
    color: ${colorCharcoal012};

    @media (max-width: 575px) {
      font-size: 1.6rem;
      line-height: 1.625;
    }

    @media (min-width: 576px) {
      font-size: 1.8rem;
      line-height: 1.778;
    }

    &:hover,
    &:focus {
      color: ${colorPeacock048};
    }

    &:focus {
      outline: 0.2rem solid ${colorPeacock048};
      outline-offset: 0.4rem;
    }
  }

  ul {
    margin: ${spaceStackDouble};
    padding: ${spaceInsetSquishDouble};
    background-color: ${colorPeacock096};
    border-top: ${spaceHalf} solid ${colorCharcoal012};
  }

  li {
    margin: ${spaceStackEighth};
    max-width: 60.4rem;
    width: 100%;
    font-family: ${fontFamilySans};
    font-weight: ${weightLight};
    color: ${colorCharcoal012};

    @media (max-width: 575px) {
      font-size: 1.6rem;
      line-height: 1.625;
    }

    @media (min-width: 576px) {
      font-size: 1.8rem;
      line-height: 1.778;
    }
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: ${weightBold};
  }
`;

export const postPageQuery = graphql`
  query PostPageQuery($slug: String!, $imageRegex: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        date(formatString: "MM.DD.YYYY")
        title
        seoTitle
        seoDescription
        seoImage
        imageHeroine {
          ...imageFragmentPostHeroine
        }
        imageHeroineAlt
        isImageHeroinePortrait
      }
      fields {
        slug
      }
    }
    postOGImage: file(relativePath: { regex: $imageRegex }) {
      ...imageFragmentOGImage
    }
  }
`;

export default PostPage;
