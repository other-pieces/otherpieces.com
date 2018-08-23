import React from 'react';

import TypeHeadline from '../components/Typography/TypeHeadline';
import TypeSectionHeading from '../components/Typography/TypeSectionHeading';

import { colorCharcoal } from '../theme/settings';

const ComponentsPage = ({ data }) => (
  <div>
    <h1>Components</h1>
    <StyledHeadline>Article Headline</StyledHeadline>
    <StyledSectionHeading>Section Heading</StyledSectionHeading>
  </div>
);

const StyledHeadline = TypeHeadline.withComponent('h2').extend`
  color: ${colorCharcoal};
`;

const StyledSectionHeading = TypeSectionHeading.withComponent('h2').extend`
  color: ${colorCharcoal};
`;

export default ComponentsPage;
