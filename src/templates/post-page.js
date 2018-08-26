import React from 'react';
import styled from 'styled-components';

import Main from '../components/Main';
import TypeHeadline from '../components/Typography/TypeHeadline';
import TypeBylineHeading from '../components/Typography/TypeBylineHeading';

import {
  colorCharcoal,
  fontFamilySans,
  fontFamilySerif,
  spaceStackDefault,
  spaceStackDouble,
  spaceStackQuad,
  spaceStackOct,
  weightLight,
  weightRegular
} from '../theme/settings';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <StyledArticle>
      <StyledTypeHeadline>
        {post.frontmatter.title}
      </StyledTypeHeadline>
      {post.frontmatter.imageHero &&
        <StyledImageHero src={post.frontmatter.imageHero} alt={post.frontmatter.imageHeroAlt} />
      }
      <StyledByline>
        By {post.frontmatter.author}
      </StyledByline>
      <StyledArticleBody dangerouslySetInnerHTML={{ __html: post.html }} />
    </StyledArticle>
  );
};

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
  }
`;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        title
        imageHero
      }
    }
  }
`;
