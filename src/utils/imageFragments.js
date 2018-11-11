import { graphql } from 'gatsby';

export const imageFragmentOGImage = graphql`
  fragment imageFragmentOGImage on File {
    childImageSharp {
      fixed(width: 1600) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const imageFragmentCard = graphql`
  fragment imageFragmentCard on File {
    childImageSharp {
      fixed(width: 360) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const imageFragmentCardSmall = graphql`
  fragment imageFragmentCardSmall on File {
    childImageSharp {
      fixed(width: 256) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const imageFragmentPostHeroine = graphql`
  fragment imageFragmentPostHeroine on File {
    childImageSharp {
      fluid(maxWidth: 1208) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const imageFragmentHeroineStart = graphql`
  fragment imageFragmentHeroineStart on File {
    childImageSharp {
      fluid(maxWidth: 692) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const imageFragmentHeroineEnd = graphql`
  fragment imageFragmentHeroineEnd on File {
    childImageSharp {
      fluid(maxWidth: 420) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
