import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
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
`

export default ({ data }) => (
  <div>
    <h1>robots</h1>
    <ul>
      { data.allAirtable.nodes.map(node => (
        <li key={node.recordId}>
          {node.data.title}
        </li>
      )) }
    </ul>
  </div>
)