import React from 'react';

import Main from '../components/Layout/Main';
import TypeMastheadHeadline from '../components/Typography/TypeMastheadHeadline';
import TypeHeadline from '../components/Typography/TypeHeadline';
import TypeSectionHeading from '../components/Typography/TypeSectionHeading';
import TypeNavLink from '../components/Typography/TypeNavLink';
import TypeBylineHeading from '../components/Typography/TypeBylineHeading';
import TypeBody from '../components/Typography/TypeBody';
import TypeHeadingPrimary from '../components/Typography/TypeHeadingPrimary';
import TypeHeadingSecondary from '../components/Typography/TypeHeadingSecondary';
import TypeHeadingTertiary from '../components/Typography/TypeHeadingTertiary';
import TypeLink from '../components/Typography/TypeLink';
import TypeLabel from '../components/Typography/TypeLabel';
import TypePlaceholder from '../components/Typography/TypePlaceholder';
import TypeInput from '../components/Typography/TypeInput';

const ComponentsPage = ({ data }) => (
  <Main>
    <h1>Components</h1>
    <StyledMastheadHeadline>Masthead Headline</StyledMastheadHeadline>
    <StyledHeadline>Article Headline</StyledHeadline>
    <StyledSectionHeading>Section Heading</StyledSectionHeading>
    <StyledNavLink to="#0">Navigation Link</StyledNavLink>
    <StyledBylineHeading>Byline Heading</StyledBylineHeading>
    <StyledBody>Lorem ipsum dolor amet whatever mustache narw*hal DIY, fanny pack roof par*ty fam small batch taxidermy woke cardigan. Lo-fi kickstarter succulents glossier brunch slow-carb. <TypeLink>You probably haven't heard</TypeLink> of them kickstarter raw denim plaid meditation microdosing. Normcore kickstarter iceland vexillologist skateboard, enamel pin plaid cliche retro tumblr craft beer XOXO mumblecore.</StyledBody>
    <StyledHeadingPrimary>Primary Heading</StyledHeadingPrimary>
    <StyledHeadingSecondary>Secondary Heading</StyledHeadingSecondary>
    <StyledHeadingTertiary>Tertiary Heading</StyledHeadingTertiary>
    <TypeLink>Text Link</TypeLink>
    <TypeLabel>Label</TypeLabel>
    <TypePlaceholder>Placeholder</TypePlaceholder>
    <TypeInput>Input</TypeInput>
  </Main>
);

const StyledMastheadHeadline = TypeMastheadHeadline.withComponent('h2');

const StyledHeadline = TypeHeadline.withComponent('h2');

const StyledSectionHeading = TypeSectionHeading.withComponent('h2');

const StyledNavLink = TypeNavLink;

const StyledBylineHeading = TypeBylineHeading.withComponent('h2');

const StyledBody = TypeBody.withComponent('p');

const StyledHeadingPrimary = TypeHeadingPrimary.withComponent('h2');

const StyledHeadingSecondary = TypeHeadingSecondary.withComponent('h3');

const StyledHeadingTertiary = TypeHeadingTertiary.withComponent('h4');

export default ComponentsPage;
