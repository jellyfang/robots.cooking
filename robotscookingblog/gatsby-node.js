exports.onCreateNode = ({ node }) => {
    if (node.internal.type === `Airtable`) {
        console.log(node.internal.type)
    }
}

exports.createPages = ({graphql, actions}) => {
    return graphql(`
      {
        allAirtable(sort: {order: DESC, fields: data___date}) {
          nodes {
            data {
              date
              PublishingStatus
              slug
              title
              author
            }
            recordId
          }
        }
      }
    `).then(result => {
        console.log(JSON.stringify(result, null, 4))
    })
}