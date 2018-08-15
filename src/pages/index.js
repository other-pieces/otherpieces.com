import React from 'react';
import Link from 'gatsby-link';

import CardGrid from '../components/CardGrid';
import Card from '../components/Card';

const IndexPage = ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <CardGrid>
      <Card
        path="/style"
        linkText="Read post"
        image="https://source.unsplash.com/random/720x960"
        heading="I Want to Be the Hottest Bridesmaid at My Friend’s Wedding"
        subhead="By Sara McCaskey"
      />
      <Card
        path="/style"
        linkText="Read post"
        image="https://source.unsplash.com/random/720x960"
        heading="I Want to Be the Hottest Bridesmaid at My Friend’s Wedding"
        subhead="By Sara McCaskey"
      />
      <Card
        path="/style"
        linkText="Read post"
        image="https://source.unsplash.com/random/720x960"
        heading="I Want to Be the Hottest Bridesmaid at My Friend’s Wedding"
        subhead="By Sara McCaskey"
      />
      <Card
        path="/style"
        linkText="Read post"
        image="https://source.unsplash.com/random/720x960"
        heading="I Want to Be the Hottest Bridesmaid at My Friend’s Wedding"
        subhead="By Sara McCaskey"
      />
      <Card
        path="/style"
        linkText="Read post"
        image="https://source.unsplash.com/random/720x960"
        heading="I Want to Be the Hottest Bridesmaid at My Friend’s Wedding"
        subhead="By Sara McCaskey"
      />
      <Card
        path="/style"
        linkText="Read post"
        image="https://source.unsplash.com/random/720x960"
        heading="I Want to Be the Hottest Bridesmaid at My Friend’s Wedding"
        subhead="By Sara McCaskey"
      />
      <Card
        path="/style"
        linkText="Read post"
        image="https://source.unsplash.com/random/720x960"
        heading="I Want to Be the Hottest Bridesmaid at My Friend’s Wedding"
        subhead="By Sara McCaskey"
      />
    </CardGrid>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
        >
          <h3>
            {node.frontmatter.title}
            <span>—{node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </div>
)

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
