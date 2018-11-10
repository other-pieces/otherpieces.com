import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spaceStackDouble, spaceStackQuad, spaceStackCenterOct, spaceStackCenterQuad } from '../theme/settings';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import ScreenReaderOnly from '../components/A11y/ScreenReaderOnly';
import HeroineGrid from '../components/UI/Heroines/HeroineGrid';
import TypeBody from '../components/Typography/TypeBody';
import TypeHeadline from '../components/Typography/TypeHeadline';
import TypeSectionHeading from '../components/Typography/TypeSectionHeading';
import Divider from '../components/UI/Decoration/Divider';
import ContactForm from '../components/Content/ContactForm';

import aboutOGImage from '../assets/images/about-og-image.jpg';

const seoTitle = 'About | Other Pieces | Two Boss Babes Running Shit and Taking Names';
const seoDescription = 'Self-proclaimed style junkies seeking dope girl gang. Interest in cozy throw pillows, carbs, and the notorious RBG preferred. All welcome. Inquire within.';
const seoImage = aboutOGImage;

const AboutPage = props => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            title
          }
        }
        imageHeroineStart: file(relativePath: { eq: "jacqs-and-sara-laughing.jpg" }) {
          ...imageFragmentHeroineStart
        }
        imageHeroineEnd: file(relativePath: { eq: "jacqs-and-sara-leaning-against-brick-wall.jpg" }) {
          ...imageFragmentHeroineEnd
        }
      }
    `}
    render={data => (
      <>
        <SEO
          seoTitle={seoTitle}
          seoDescription={seoDescription}
          seoImage={seoImage}
          pagePath={props.location.pathname}
        />
        <GlobalLayout>
          <Main id="mainContent">
            <ScreenReaderOnly as="h1">About {data.site.siteMetadata.title}</ScreenReaderOnly>
            <section>
              <HeroineGrid
                headline="Oh, Hello There"
                imageStart={data.imageHeroineStart.childImageSharp.fluid}
                imageStartAlt="Jacqs and Sara laughing outside"
                imageEnd={data.imageHeroineEnd.childImageSharp.fluid}
                imageEndAlt="Jacqs and Sara leaning against brick"
              />
              <StyledIntro>
                <StyledIntroCopy as="p">
                  We&rsquo;re Jacqs and Sara, the founders and creatives behind Other Pieces. By day, we work as
                  writers/editors/content strategists. By night, we spend our time scouring the internet for beautiful
                  pieces&mdash;for our wardrobes, our homes, or just a bit of inspiration.
                </StyledIntroCopy>
                <StyledIntroCopy as="p">
                  We built Other Pieces as a respite from the banalities of modern life. An escape from nine-to-five
                  jobs, monthly student loan payments, and ads on Instagram. A place where we could share our ideas
                  freely about style, travel, money, food, and all the other stuff we have opinions on&mdash;that list
                  is a large one.
                </StyledIntroCopy>
                <StyledIntroCopy as="p">
                  Think of it as a hideout for interesting, intelligent, badass women. There's no secret password, so
                  come on in and make yourself at home. There's plenty of snacks and cozy places to curl up while we
                  brainstorm how to #smashthepatriarchy and look dope as hell doing it.
                </StyledIntroCopy>
                <TypeHeadline as="p">Welcome home, babes.</TypeHeadline>
              </StyledIntro>
            </section>
            <Divider />
            <StyledContactSection>
              <StyledFormHeading as="h2">Slide into our DMs.</StyledFormHeading>
              <ContactForm />
            </StyledContactSection>
          </Main>
        </GlobalLayout>
      </>
    )}
  />
);

const StyledIntro = styled.div`
  max-width: 104.8rem;
  width: 100%;

  @media (max-width: 575px) {
    margin: ${spaceStackCenterQuad};
  }

  @media (min-width: 576px) {
    margin: ${spaceStackCenterOct};
  }
`;

const StyledIntroCopy = styled(TypeBody)`
  margin: ${spaceStackDouble};
  max-width: 60.4rem;
  width: 100%;
`;

const StyledContactSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    align-items: center;
  }
`;

const StyledFormHeading = styled(TypeSectionHeading)`
  margin: ${spaceStackQuad};
`;

AboutPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AboutPage;
