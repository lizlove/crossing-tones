import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo";

export default function Events({ data }) {
  console.log("🐕🐕‍🦺🐕‍", data);
  const eventStyle = {marginBottom: "0.45rem", fontWeight: 700}
  return (
    <Layout>
      <SEO title="Events"/>
      <section>
      <h1>Upcoming Events</h1>
      {/* <h4>{data.upcoming.totalCount} Events</h4> */}
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
      {/* <h4>{data.past.totalCount} Events</h4> */}
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
  query AllEvents($currentDate: Date!){
    past: allMarkdownRemark(
      filter: {
        frontmatter: { date: { lt: $currentDate } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          excerpt
        }
      }
    }
    upcoming: allMarkdownRemark(
      filter: {
        frontmatter: { date: { gte: $currentDate } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`