const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `collection`,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(resolve => {
    // Blog posts
    graphql(`
      {
        allMarkdownRemark(filter: { fields: { collection: { eq: "blog" } } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: 'blog' + node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.tsx`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
    })

    // Blog list all
    createPage({
      path: 'blog/all',
      component: path.resolve('./src/templates/blog-all.tsx'),
    })

    // Index page
    graphql(`
      {
        allMarkdownRemark(
          filter: { fields: { collection: { eq: "content" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug === '/') {
          createPage({
            path: '/',
            component: path.resolve(`./src/templates/home.tsx`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        }
        else if (node.fields.slug === '/blog/') {
          createPage({
            path: '/blog',
            component: path.resolve(`./src/templates/blog.tsx`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        }
      })
    })

    resolve()
  })
}
