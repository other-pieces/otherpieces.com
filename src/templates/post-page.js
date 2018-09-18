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
  margin: ${spaceStackOct};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTypeHeadline = TypeHeadline.withComponent('h1').extend`
  margin: ${spaceStackQuad};
  max-width: 104.8rem;
  width: 100%;
  text-align: center;
`;

const StyledImageHero = styled.img`
  margin: ${spaceStackDouble};
  max-width: 100%;
  display: block;
`;

const StyledByline = TypeBylineHeading.withComponent('p').extend`
  margin: ${spaceStackQuad};
  text-align: center;
`;

// TODO: Look into extending type specs instead of hardcoding properties
// TODO: Styled images provided in post content
const StyledArticleBody = styled.div`
  h2 {
    margin: ${spaceStackDefault};
    max-width: 60.4rem;
    width: 100%;
    font-family: ${fontFamilySerif};
    font-size: 3.6rem;
    font-weight: ${weightRegular};
    color: ${colorCharcoal};
    line-height: 1.222;
  }

  h3 {
    margin: ${spaceStackDefault};
    max-width: 60.4rem;
    width: 100%;
    font-family: ${fontFamilySerif};
    font-size: 3.2rem;
    font-weight: ${weightRegular};
    color: ${colorCharcoal};
  }

  h4 {
    margin: ${spaceStackDefault};
    max-width: 60.4rem;
    width: 100%;
    line-height: 1.125;
    font-family: ${fontFamilySerif};
    font-size: 2.4rem;
    font-weight: ${weightRegular};
    color: ${colorCharcoal};
    line-height: 1.167;
  }

  p {
    margin: ${spaceStackDefault};
    max-width: 60.4rem;
    width: 100%;
    font-family: ${fontFamilySans};
    font-size: 1.8rem;
    font-weight: ${weightLight};
    color: ${colorCharcoal};
    line-height: 1.778;

    em {
      font-style: italic;
    }

    strong {
      font-weight: ${weightBold};
    }
  }

  a {
    font-family: ${fontFamilySans};
    font-size: 1.8rem;
    font-weight: ${weightSemiBold};
    color: ${colorCharcoal};
    line-height: 1.778;

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
