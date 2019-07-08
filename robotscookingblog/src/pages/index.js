import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <ul>
          { data.allAirtable.nodes.map(node => (
            <li key={node.recordId}>
              <a href={node.data.slug}>{node.data.title}</a>
            </li>
          )) }
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(sort: {order: DESC, fields: data___date}) {
      nodes {
        data {
          slug
          title
        }
        recordId
      }
    }
  }
`