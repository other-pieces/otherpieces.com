import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';

import {
  colorWhite,
  fontFamilySans,
  spaceDefault,
  spaceQuad
} from '../../theme/settings';

import '../../assets/fonts/open-sans/open-sans.css';
import '../../assets/fonts/old-standard-tt/old-standard-tt.css';

// Components
import SkipNav from '../A11y/SkipNav';
import Header from './GlobalHeader/Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  /* Reset */
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    border: 0;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  /* Base */
  html, body {
    height: 100%;
  }

  body {
    font-family: ${fontFamilySans};
    font-size: 1.6rem;
    background-color: ${colorWhite};
  }
`;

const GlobalLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Helmet htmlAttributes={{ lang: 'en' }} />
    <SkipNav anchor="mainContent">Skip to main content</SkipNav>
    <StyledGlobalLayout>
      <Header />
      {children}
      <Footer />
    </StyledGlobalLayout>
  </>
);

const StyledGlobalLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media (max-width: 575px) {
    grid-template-columns: ${spaceDefault} 1fr ${spaceDefault};
  }

  @media (min-width: 576px) and (max-width: 1336px) {
    grid-template-columns: ${spaceQuad} 1fr ${spaceQuad};
  }

  @media (min-width: 1337px) {
    grid-template-columns: 1fr 120.8rem 1fr;
  }
`;

GlobalLayout.propTypes = {
  children: PropTypes.node,
};

export default GlobalLayout;
