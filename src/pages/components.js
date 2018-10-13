import React from 'react';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import TypeMastheadHeadline from '../components/Typography/TypeMastheadHeadline';
import TypeHeadline from '../components/Typography/TypeHeadline';
import TypeSectionHeading from '../components/Typography/TypeSectionHeading';
import TypeNavLink from '../components/Typography/TypeNavLink';
import TypeBylineHeading from '../components/Typography/TypeBylineHeading';
import TypeBody from '../components/Typography/TypeBody';
import TypeTitle1 from '../components/Typography/TypeTitle1';
import TypeTitle2 from '../components/Typography/TypeTitle2';
import TypeTitle3 from '../components/Typography/TypeTitle3';
import TypeLink from '../components/Typography/TypeLink';
import TypeLabel from '../components/Typography/TypeLabel';
import TypeInput from '../components/Typography/TypeInput';

const ComponentsPage = ({ data }) => (
  <GlobalLayout>
    <Main id="mainContent">
      <h1>Components</h1>
      <StyledMastheadHeadline>Masthead Headline</StyledMastheadHeadline>
      <StyledHeadline>Article Headline</StyledHeadline>
      <StyledSectionHeading>Section Heading</StyledSectionHeading>
      <StyledNavLink to="#0">Navigation Link</StyledNavLink>
      <StyledBylineHeading>Byline Heading</StyledBylineHeading>
      <StyledBody>Lorem ipsum dolor amet whatever mustache narw*hal DIY, fanny pack roof par*ty fam small batch taxidermy woke cardigan. Lo-fi kickstarter succulents glossier brunch slow-carb. <TypeLink to="#0">You probably haven't heard</TypeLink> of them kickstarter raw denim plaid meditation microdosing. Normcore kickstarter iceland vexillologist skateboard, enamel pin plaid cliche retro tumblr craft beer XOXO mumblecore.</StyledBody>
      <StyledTitle1>Primary Heading</StyledTitle1>
      <StyledTitle2>Secondary Heading</StyledTitle2>
      <StyledTitle3>Tertiary Heading</StyledTitle3>
      <TypeLink to="#0">Text Link</TypeLink>
      <TypeLabel>Label</TypeLabel>
      <TypeInput>Input</TypeInput>
    </Main>
  </GlobalLayout>
);

const StyledMastheadHeadline = TypeMastheadHeadline.withComponent('h2');

const StyledHeadline = TypeHeadline.withComponent('h2');

const StyledSectionHeading = TypeSectionHeading.withComponent('h2');

const StyledNavLink = TypeNavLink;

const StyledBylineHeading = TypeBylineHeading.withComponent('h2');

const StyledBody = TypeBody.withComponent('p');

const StyledTitle1 = TypeTitle1.withComponent('h2');

const StyledTitle2 = TypeTitle2.withComponent('h3');

const StyledTitle3 = TypeTitle3.withComponent('h4');

export default ComponentsPage;
