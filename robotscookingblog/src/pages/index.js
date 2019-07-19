import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import benderGif from "../images/bender.gif"
import SEO from "../components/seo"

export const query = graphql`
{
  allAirtable(sort: {fields: data___robots___data___postDate}, filter: {table: {eq: "robots"}, data: {status: {eq: "published"}}}) {
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
      <SEO />
      <div>
        <img src={benderGif} alt="logo" width="50%" />
        <h1>showing all robots cooking</h1>
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