const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

function getCurrentDate() {
  const d = new Date()
  let month = (d.getMonth() + 1).toString()
  if (month.length < 2) {
    month = `0${month}`
  }
  let day = d.getDate().toString()
  if (day.length < 2) {
    day = `0${day}`
  }
  return `${d.getFullYear()}-${month}-${day}`
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `events` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `currentDate`,
      value: getCurrentDate(),
    });
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      currentDate: getCurrentDate(),
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const events = await graphql(`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "event"}}}) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `)
  events.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/events/event-page.js`),
      context: {
        slug: node.fields.slug,
        today: node.fields.today
      },
    })
  })
  const collections = await graphql(`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "collection"}}}) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `)
  collections.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/collections/collection-page.js`),
      context: {
        slug: node.fields.slug
      },
    })
  })
}