import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import TypeHeadline from '../components/Typography/TypeHeadline';
import TypeBylineHeading from '../components/Typography/TypeBylineHeading';

import {
  colorCharcoal,
  colorPeacockLight,
  fontFamilySans,
  fontFamilySerif,
  spaceStackDefault,
  spaceStackDouble,
  spaceStackQuad,
  spaceStackOct,
  weightBold,
  weightLight,
  weightRegular,
  weightSemiBold
} from '../theme/settings';

const PostPage = ({ data }) => (
  <GlobalLayout>
    <StyledArticle>
      <StyledTypeHeadline>
        {data.markdownRemark.frontmatter.title}
      </StyledTypeHeadline>
      {data.markdownRemark.frontmatter.imageHero &&
        <StyledImageHero src={data.markdownRemark.frontmatter.imageHero} alt={data.markdownRemark.frontmatter.imageHeroAlt} />
      }
      <StyledByline>
        By {data.markdownRemark.frontmatter.author}
      </StyledByline>
      <StyledArticleBody dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </StyledArticle>
  </GlobalLayout>
);

const StyledArticle = Main.withComponent('article').extend`
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

const StyledTypeHeadline = TypeHeadline.withComponent('h1').extend`
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

const StyledImageHero = styled.img`
  max-width: 100%;
  display: block;

  @media (min-width: 575px) {
    margin: ${spaceStackDefault};
  }

  @media (max-width: 576px) {
    margin: ${spaceStackDouble};
  }
`;

const StyledByline = TypeBylineHeading.withComponent('p').extend`
  text-align: center;

  @media (min-width: 575px) {
    margin: ${spaceStackDouble};
  }

  @media (max-width: 576px) {
    margin: ${spaceStackQuad};
  }
`;

// TODO: Look into extending type specs instead of hardcoding properties
// TODO: Styled images provided in post content
const StyledArticleBody = styled.div`
  h2 {
    margin: ${spaceStackDefault};
    max-width: 60.4rem;
    width: 100%;
    font-family: ${fontFamilySerif};
    font-weight: ${weightRegular};
    color: ${colorCharcoal};

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
    color: ${colorCharcoal};

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
    color: ${colorCharcoal};

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
    color: ${colorCharcoal};

    @media (max-width: 575px) {
      font-size: 1.6rem;
      line-height: 1.625;
    }

    @media (min-width: 576px) {
      font-size: 1.8rem;
      line-height: 1.778;
    }

    em {
      font-style: italic;
    }

    strong {
      font-weight: ${weightBold};
    }
  }

  a {
    font-family: ${fontFamilySans};
    font-weight: ${weightSemiBold};
    color: ${colorCharcoal};

    @media (max-width: 575px) {
      font-size: 1.6rem;
      line-height: 1.625;
    }

    @media (min-width: 576px) {
      font-size: 1.8rem;
      line-height: 1.778;
    }

    &:hover {
      color: ${colorPeacockLight};
    }

    &:focus {
      outline: 0.2rem solid ${colorPeacockLight};
      outline-offset: 0.4rem;
    }
  }
`;

export const postPageQuery = graphql`
  query PostPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        title
        imageHero
        imageHeroAlt
      }
    }
  }
`;

export default PostPage;
