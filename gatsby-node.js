const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {             
              projectcategory
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      if(edge.node.fields.slug != "/footer/") {
        createPage({
          path: edge.node.fields.slug,
          projectcategory: edge.node.frontmatter.projectcategory,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      }
    })

    // works list page
    var id = 'Projectdetail/index'
    createPage({
      path: '/works',
      component: path.resolve(
        `src/templates/work-page.js`
      ),
      context: {
        id,
      },
    })

    let projectcategory = []

    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.projectcategory`)) {
        projectcategory = projectcategory.concat(edge.node.frontmatter.projectcategory)
      }
    })
   
    projectcategory.forEach(category => {
      const projectcategoryPath = `/projectcat/${_.kebabCase(category)}/`

      createPage({
        path: projectcategoryPath,
        component: path.resolve(`src/templates/projectcat.js`),
        context: {
          category,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateDevServer = ({ app }) => {
  // const fsMiddlewareAPI = require('netlify-cms-backend-fs/dist/fs')
  // fsMiddlewareAPI(app)
}