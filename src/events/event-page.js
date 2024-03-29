import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function EventPage({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <section className="inner">
        <h2 class="text-sm">{post.frontmatter.subtitle}</h2>
        <h1>{post.frontmatter.title}</h1>
        <h3>
          {post.frontmatter.date}, {post.frontmatter.time}
        </h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        date(formatString: "dddd, MMMM DD")
        time
        type
      }
    }
  }
`;
