import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import {
  spaceStackDouble,
  spaceStackCenterOct,
  spaceStackQuad
} from '../theme/settings';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import ScreenReaderOnly from '../components/A11y/ScreenReaderOnly';
import HeroineGrid from '../components/UI/Heroines/HeroineGrid';
import TypeBody from '../components/Typography/TypeBody';
import TypeHeadline from '../components/Typography/TypeHeadline';
import TypeSectionHeading from '../components/Typography/TypeSectionHeading';
import Divider from '../components/UI/Decoration/Divider';
import ContactForm from '../components/Content/ContactForm';

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <GlobalLayout>
        <Main>
          <StyledHiddenTitle>About {data.site.siteMetadata.title}</StyledHiddenTitle>
          <section>
            <HeroineGrid
              headline="Oh, Hello There"
              imageStartSrc="https://source.unsplash.com/random/1410x1058"
              imageStartAlt="Jacque and Sara sitting together"
              imageEndSrc="https://source.unsplash.com/random/840x1120"
              imageEndAlt="Jacque and Sara walking down stairs"
            />
            <StyledIntro>
              <StyledIntroCopy>
                We&rsquo;re Jacqs and Sara, the founders and creatives behind Other Pieces. By day, we work as writers/editors/content strategists. By night, we spend our time scouring the internet for beautiful pieces&mdash;for our wardrobes, our homes, or just a bit of inspiration.
              </StyledIntroCopy>
              <StyledIntroCopy>
                We built Other Pieces as a respite from the banalities of modern life. An escape from nine-to-five jobs, monthly student loan payments, and ads on Instagram. A place where we could share our ideas freely about style, travel, money, food, and all the other stuff we have opinions on&mdash;that list is a large one.
              </StyledIntroCopy>
              <StyledIntroCopy>
                Think of it as a hideout for interesting, intelligent, badass women. There's no secret password, so come on in and make yourself at home. There's plenty of snacks and cozy places to curl up while we brainstorm how to #smashthepatriarchy and look dope as hell doing it.
              </StyledIntroCopy>
              <StyledWelcome>Welcome home, babes.</StyledWelcome>
            </StyledIntro>
          </section>
          <Divider />
          <StyledContactSection>
            <StyledFormHeading>Slide into our DMs.</StyledFormHeading>
            <ContactForm />
          </StyledContactSection>
        </Main>
      </GlobalLayout>
    )}
  />
);

const StyledHiddenTitle = ScreenReaderOnly.withComponent('h1');

const StyledIntro = styled.div`
  margin: ${spaceStackCenterOct};
  max-width: 104.8rem;
  width: 100%;
`;

const StyledIntroCopy = TypeBody.withComponent('p').extend`
  margin: ${spaceStackDouble};
  max-width: 60.4rem;
  width: 100%;
`;

const StyledWelcome = TypeHeadline.withComponent('p');

const StyledContactSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    align-items: center;
  }
`;

const StyledFormHeading = TypeSectionHeading.withComponent('h2').extend`
  margin: ${spaceStackQuad};
`;

export default AboutPage;
