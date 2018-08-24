import React from 'react';

import Main from '../components/Main';
import TypeHeadline from '../components/Typography/TypeHeadline';
import TypeSectionHeading from '../components/Typography/TypeSectionHeading';
import TypeNavLink from '../components/Typography/TypeNavLink';
import TypeBylineHeading from '../components/Typography/TypeBylineHeading';

import { colorCharcoal } from '../theme/settings';

const ComponentsPage = ({ data }) => (
  <Main>
    <h1>Components</h1>
    <StyledHeadline>Article Headline</StyledHeadline>
    <StyledSectionHeading>Section Heading</StyledSectionHeading>
    <StyledNavLink to="#0">Navigation Link</StyledNavLink>
    <StyledBylineHeading>Byline Heading</StyledBylineHeading>
  </Main>
);

const StyledHeadline = TypeHeadline.withComponent('h2').extend`
  color: ${colorCharcoal};
`;

const StyledSectionHeading = TypeSectionHeading.withComponent('h2').extend`
  color: ${colorCharcoal};
`;

const StyledNavLink = TypeNavLink.extend`
  color: ${colorCharcoal};
`;

const StyledBylineHeading = TypeBylineHeading.withComponent('h2').extend`
  color: ${colorCharcoal};
`;

export default ComponentsPage;
