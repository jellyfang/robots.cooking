const path = require(`path`)

// exports.onCreateNode = ({ node }) => {
//     if (node.internal.type === `Airtable`) {
//         console.log(node.internal.type)
//     }
// }

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions
    return graphql(`
    {
      allAirtable(sort: {fields: data___robots___data___postDate}, filter: {table: {eq: "robots"}, data: {status: {eq: "published"}}}) {
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
                component: path.resolve(`./src/templates/robot.js`),
                context: {
                    slug: node.data.slug,
                },
            })
        })
    })
}