import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo";
import {getCurrentDate} from "../utils"

export default function Events({ data }) {
  console.log("🐕🐕‍🦺🐕‍🦺", data, getCurrentDate());
  const eventStyle = {marginBottom: "0.45rem", fontWeight: 700}
  return (
    <Layout>
      <SEO title="Events"/>
      <section>
      <h1>Upcoming Events</h1>
      {/* <h4>{data.upcoming.allMarkdownRemark.totalCount} Events</h4> */}
      {data.upcoming.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h4 style={eventStyle}>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h4>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </section>
    <section>
    <h1>Past Events</h1>
      {/* <h4>{data.past.allMarkdownRemark.totalCount} Events</h4> */}
      {data.past.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h4 style={eventStyle}>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h4>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </section>
    </Layout>
  )
}

export const query = graphql`
  query($today: Date) {
    upcoming: allMarkdownRemark(
      filter: {frontmatter: {date: {gte: $today}}}
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
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
    past: allMarkdownRemark(
      filter: {frontmatter: {date: {lt: $today}}}
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
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
`
