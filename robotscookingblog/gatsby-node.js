const path = require(`path`)

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
// #bigups https://medium.com/tarkalabs/async-await-wrapper-for-callback-style-javascript-code-cde2b699122f
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

// exports.onCreateNode = ({ node }) => {
//     if (node.internal.type === `Airtable`) {
//         console.log(node.internal.type)
//     }
// }

const createAboutPage = () => {
  console.log('creating about page')
}

const createSubmitPage = () => {
  console.log('creating submission page')
}

const createTOSPage = () => {
  console.log('creating tos pages')
}

const createRobotPages = (robots, createPage) => {
  robots.forEach(({ node }) => {
    createPage({
        path: node.data.slug,
        component: path.resolve(`./src/templates/robot.js`),
        context: {
            slug: node.data.slug,
        },
    })
  })
}

const gatsbyNodeGraphQL = `
  allAirtable(
    sort: {fields: data___robots___data___postDate}, 
    filter: {table: {eq: "robots"}, 
    data: {status: {eq: "published"}}}) {
    edges {
      node {
        data {
          slug
        }
      }
    }
  }
`

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions

  const result = await wrapper(
    graphql(`
      {
        allAirtable(
          sort: {fields: data___robots___data___postDate}, 
          filter: {table: {eq: "robots"}, 
          data: {status: {eq: "published"}}}) {
          edges {
            node {
              data {
                slug
              }
            }
          }
        }
      }
    `)
  )

  // Programmatically create pages with templates and helper functions
  createAboutPage()
  createSubmitPage()
  createTOSPage()
  createRobotPages(result.data.allAirtable.edges, createPage)
}