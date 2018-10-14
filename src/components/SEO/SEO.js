import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import config from '../../config/config';

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  author,
  image,
  description,
  date,
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: config.title,
    },
  ];

  return isBlogPost
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: config.title,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            url: 'https://otherpieces.com',
            logo: config.logo,
            name: 'Other Pieces',
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': config.url,
          },
          date,
        },
      ]
    : schemaOrgJSONLD;
};

const SEO = ({
  author,
  seoTitle,
  seoDescription,
  seoImage,
  pagePath,
  isBlogPost,
  datePublished
}) => {
  const title = seoTitle || config.title;
  const description = seoDescription || config.description;
  const image = seoImage
    ? `${config.url}${seoImage}`
    : config.image;
  const url = pagePath
    ? `${config.url}${pagePath}`
    : config.url;
  const date = isBlogPost ? datePublished : false;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    author,
    url,
    title,
    image,
    description,
    date
  });

  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEO.propTypes = {
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
  seoImage: PropTypes.string,
  pagePath: PropTypes.string,
  isBlogPost: PropTypes.bool
};

SEO.defaultProps = {
  seoTitle: null,
  seoDescription: null,
  seoImage: null,
  pagePath: null,
  isBlogPost: false
};

export default SEO;
