import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby'

import Layout from "../components/layout";
import SEO from "../components/seo";


export default function Collections({ data }) {
  const eventStyle = {marginBottom: "0.45rem", fontWeight: 700};
  console.log("🐶🐶", data);
  return (
    <Layout>
      <SEO title="Collections"/>
      <section>
      <h1>Collections</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h4 style={eventStyle}>
            <Link className="bold-link" to={node.fields.slug}>
              {node.frontmatter.title}{" "}
            </Link>
          </h4>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </section>
    </Layout>
  )
}

export const query = graphql`
  query AllCollections {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "collection"}}}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            started
            thumbnail
          }
          excerpt
          id
        }
      }
    }
  }
`