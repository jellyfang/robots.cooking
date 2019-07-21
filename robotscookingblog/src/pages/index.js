import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import benderGif from "../images/bender.gif"
import SEO from "../components/seo/seo"

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
      <div className="max-w-lg mx-auto my-8 text-center font-sans">
        <h1 className="text-xl uppercase">Showing all robots cooking</h1>
        <small className="text-gray-500 italic">Last updated July 4, 2019</small>
      </div>
      <div>
        {/* <img src={benderGif} alt="logo" width="50%" /> */}
        <ul>
          { data.allAirtable.nodes.map(node => (
            <a href={node.data.slug}>
            <li key={node.recordId}>
              <div className="max-w-sm rounded bg-white shadow-lg mb-6 overflow-hidden">
                <img className="w-full" src="https://placehold.co/1200x610" alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl">{node.data.title}</div>
                  <p className="text-gray-600 text-base">San Francisco, USA</p>
                </div>
              </div>
            </li>
            </a>
          )) }
        </ul>
      </div>
      <Subscribe />
      <Footer />
    </Layout>
  )
}