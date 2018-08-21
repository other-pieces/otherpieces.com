import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';

import {
  fontFamilySans,
  spaceNone,
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

// Components
import Header from '../components/Header';

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

  /* Base Styles */
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    font-family: ${fontFamilySans};
    font-size: 1.6rem;
  }
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
  </div>
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
