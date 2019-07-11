import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
{
  allAirtable(
    sort: {
      fields: data___robots___data___postDate
    }, 
      filter: {
        table: {
          eq: "robots"
        }
      }
    ) {
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

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>showing all robots</h1>
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