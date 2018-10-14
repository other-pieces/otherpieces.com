export const imageFragmentCard = graphql`
  fragment imageFragmentCard on File {
    childImageSharp {
      resolutions(width: 360) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;

export const imageFragmentCardSmall = graphql`
  fragment imageFragmentCardSmall on File {
    childImageSharp {
      resolutions(width: 256) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;

export const imageFragmentPostHeroineLandscape = graphql`
  fragment imageFragmentPostHeroineLandscape on File {
    childImageSharp {
      sizes(maxWidth: 1208) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export const imageFragmentPostHeroinePortrait = graphql`
  fragment imageFragmentPostHeroinePortrait on File {
    childImageSharp {
      sizes(maxWidth: 786) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export const imageFragmentHeroineStart = graphql`
  fragment imageFragmentHeroineStart on File {
    childImageSharp {
      sizes(maxWidth: 692) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export const imageFragmentHeroineEnd = graphql`
  fragment imageFragmentHeroineEnd on File {
    childImageSharp {
      sizes(maxWidth: 420) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
