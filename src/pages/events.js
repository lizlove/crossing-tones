import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo";

export default function Events({ data }) {
  const eventStyle = {marginBottom: "0.45rem", fontWeight: 700}
  return (
    <Layout>
      <SEO title="Events"/>
      <section className="inner">
      <h1>Upcoming Events</h1>
      {data.upcoming.edges.map(({ node }) => (
        <div key={node.id}>
          <h4 style={eventStyle}>
            <Link className="bold-link" to={node.fields.slug}>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
            </Link>
          </h4>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </section>
    <section className="inner">
    <h1>Past Events</h1>
      {data.past.edges.map(({ node }) => (
        <div key={node.id}>
          <h4 style={eventStyle}>
            <Link className="bold-link" to={node.fields.slug}>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
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
  query AllEvents($currentDate: Date!){
    past: allMarkdownRemark(
      filter: {
        frontmatter: { date: { lt: $currentDate } type: {eq: "event"} }
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
        frontmatter: { date: { gte: $currentDate } type: {eq: "event"}}
      }
      sort: { fields: [frontmatter___date], order: ASC }
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