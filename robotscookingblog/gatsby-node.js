const path = require(`path`)

exports.onCreateNode = ({ node }) => {
    if (node.internal.type === `Airtable`) {
        console.log(node.internal.type)
    }
}

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions
    return graphql(`
      {
        allAirtable(sort: {order: DESC, fields: data___date}) {
          edges {
            node {
              data {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
        result.data.allAirtable.edges.forEach(({ node }) => {
            createPage({
                path: node.data.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: node.data.slug,
                },
            })
        })
    })
}