import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import GlobalLayout from '../components/Layout/GlobalLayout';
import Main from '../components/Layout/Main';
import ScreenReaderOnly from '../components/A11y/ScreenReaderOnly';
import ContactForm from '../components/Content/ContactForm';
import HeroineGrid from '../components/UI/Heroines/HeroineGrid';

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
          <HeroineGrid
            headline="Oh, Hello There"
            imageStartSrc="https://source.unsplash.com/random/1410x1058"
            imageStartAlt="Jacque and Sara sitting together"
            imageEndSrc="https://source.unsplash.com/random/840x1120"
            imageEndAlt="Jacque and Sara walking down stairs"
          />
          <ContactForm />
        </Main>
      </GlobalLayout>
    )}
  />
);

const StyledHiddenTitle = ScreenReaderOnly.withComponent('h1');

export default AboutPage;
