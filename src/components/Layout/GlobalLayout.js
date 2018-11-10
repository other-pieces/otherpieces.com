import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';

import {
  colorWhite,
  fontFamilySans,
  spaceDefault,
  spaceQuad,
  weightLight,
  weightRegular,
  weightSemiBold,
} from '../../theme/settings';

// Typography
// Open Sans
import openSansLightTTF from '../../assets/fonts/open-sans/OpenSans-Light.ttf';
import openSansLightWOFF from '../../assets/fonts/open-sans/OpenSans-Light.woff';
import openSansLightWOFF2 from '../../assets/fonts/open-sans/OpenSans-Light.woff2';
import openSansLightItalicTTF from '../../assets/fonts/open-sans/OpenSans-LightItalic.ttf';
import openSansLightItalicWOFF from '../../assets/fonts/open-sans/OpenSans-LightItalic.woff';
import openSansLightItalicWOFF2 from '../../assets/fonts/open-sans/OpenSans-LightItalic.woff2';
import openSansRegularTTF from '../../assets/fonts/open-sans/OpenSans-Regular.ttf';
import openSansRegularWOFF from '../../assets/fonts/open-sans/OpenSans-Regular.woff';
import openSansRegularWOFF2 from '../../assets/fonts/open-sans/OpenSans-Regular.woff2';
import openSansSemiBoldTTF from '../../assets/fonts/open-sans/OpenSans-SemiBold.ttf';
import openSansSemiBoldWOFF from '../../assets/fonts/open-sans/OpenSans-SemiBold.woff';
import openSansSemiBoldWOFF2 from '../../assets/fonts/open-sans/OpenSans-SemiBold.woff2';
// Old Standard TT
import oldStandardRegularTTF from '../../assets/fonts/old-standard-tt/OldStandard-Regular.ttf';
import oldStandardRegularWOFF from '../../assets/fonts/old-standard-tt/OldStandard-Regular.woff';
import oldStandardRegularWOFF2 from '../../assets/fonts/old-standard-tt/OldStandard-Regular.woff2';
import oldStandardItalicTTF from '../../assets/fonts/old-standard-tt/OldStandard-Italic.ttf';
import oldStandardItalicWOFF from '../../assets/fonts/old-standard-tt/OldStandard-Italic.woff';
import oldStandardItalicWOFF2 from '../../assets/fonts/old-standard-tt/OldStandard-Italic.woff2';

// Components
import SkipNav from '../A11y/SkipNav';
import Header from './GlobalHeader/Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  /* Typography */
  /* Open Sans */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: ${weightLight};
    font-display: fallback;
    src: url(${openSansLightWOFF2}) format('woff2'),
      url(${openSansLightWOFF}) format('woff'),
      url(${openSansLightTTF}) format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: ${weightLight};
    font-display: fallback;
    src: url(${openSansLightItalicWOFF2}) format('woff2'),
      url(${openSansLightItalicWOFF}) format('woff'),
      url(${openSansLightItalicTTF}) format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: ${weightRegular};
    font-display: fallback;
    src: url(${openSansRegularWOFF2}) format('woff2'),
      url(${openSansRegularWOFF}) format('woff'),
      url(${openSansRegularTTF}) format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: ${weightSemiBold};
    font-display: fallback;
    src: url(${openSansSemiBoldWOFF2}) format('woff2'),
      url(${openSansSemiBoldWOFF}) format('woff'),
      url(${openSansSemiBoldTTF}) format('ttf');
  }

  /* Old Standard TT */
  @font-face {
    font-family: 'Old Standard TT';
    font-style: normal;
    font-weight: ${weightRegular};
    font-display: fallback;
    src: url(${oldStandardRegularWOFF2}) format('woff2'),
      url(${oldStandardRegularWOFF}) format('woff'),
      url(${oldStandardRegularTTF}) format('ttf');
  }

  @font-face {
    font-family: 'Old Standard TT';
    font-style: italic;
    font-weight: ${weightRegular};
    font-display: fallback;
    src: url(${oldStandardItalicWOFF2}) format('woff2'),
      url(${oldStandardItalicWOFF}) format('woff'),
      url(${oldStandardItalicTTF}) format('ttf');
  }

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
