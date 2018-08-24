import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';

import {
  fontFamilySans,
  weightExtraBold,
  weightRegular,
  weightSemiBold
} from '../theme/settings';

// Typography
// Open Sans
import openSansRegularTTF from '../assets/fonts/open-sans/OpenSans-Regular.ttf';
import openSansRegularWOFF from '../assets/fonts/open-sans/OpenSans-Regular.woff';
import openSansRegularWOFF2 from '../assets/fonts/open-sans/OpenSans-Regular.woff2';
import openSansSemiBoldTTF from '../assets/fonts/open-sans/OpenSans-SemiBold.ttf';
import openSansSemiBoldWOFF from '../assets/fonts/open-sans/OpenSans-SemiBold.woff';
import openSansSemiBoldWOFF2 from '../assets/fonts/open-sans/OpenSans-SemiBold.woff2';
import openSansExtraBoldTTF from '../assets/fonts/open-sans/OpenSans-ExtraBold.ttf';
import openSansExtraBoldWOFF from '../assets/fonts/open-sans/OpenSans-ExtraBold.woff';
import openSansExtraBoldWOFF2 from '../assets/fonts/open-sans/OpenSans-ExtraBold.woff2';
// Old Standard TT
import oldStandardRegularTTF from '../assets/fonts/old-standard-tt/OldStandard-Regular.ttf';
import oldStandardRegularWOFF from '../assets/fonts/old-standard-tt/OldStandard-Regular.woff';
import oldStandardRegularWOFF2 from '../assets/fonts/old-standard-tt/OldStandard-Regular.woff2';
import oldStandardItalicTTF from '../assets/fonts/old-standard-tt/OldStandard-Italic.ttf';
import oldStandardItalicWOFF from '../assets/fonts/old-standard-tt/OldStandard-Italic.woff';
import oldStandardItalicWOFF2 from '../assets/fonts/old-standard-tt/OldStandard-Italic.woff2';

// Components
import GlobalLayout from '../components/GlobalLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';

injectGlobal`
  /* Typography */
  /* Open Sans */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: ${weightRegular};
    src: url(${openSansRegularWOFF2}) format('woff2'),
      url(${openSansRegularWOFF}) format('woff'),
      url(${openSansRegularTTF}) format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: ${weightSemiBold};
    src: url(${openSansSemiBoldWOFF2}) format('woff2'),
      url(${openSansSemiBoldWOFF}) format('woff'),
      url(${openSansSemiBoldTTF}) format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: ${weightExtraBold};
    src: url(${openSansExtraBoldWOFF2}) format('woff2'),
      url(${openSansExtraBoldWOFF}) format('woff'),
      url(${openSansExtraBoldTTF}) format('ttf');
  }

  /* Old Standard TT */
  @font-face {
    font-family: 'Old Standard TT';
    font-style: normal;
    font-weight: ${weightRegular};
    src: url(${oldStandardRegularWOFF2}) format('woff2'),
      url(${oldStandardRegularWOFF}) format('woff'),
      url(${oldStandardRegularTTF}) format('ttf');
  }

  @font-face {
    font-family: 'Old Standard TT';
    font-style: italic;
    font-weight: ${weightRegular};
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
  }
`

const Layout = ({ children, data }) => (
  <GlobalLayout>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </GlobalLayout>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
