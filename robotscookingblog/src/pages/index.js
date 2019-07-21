import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import benderGif from "../images/bender.gif"
import heroImg from "../images/robots.cooking-hero.jpg"
import SEO from "../components/seo/seo"
import Subscribe from "../components/subscribe"

export const query = graphql`
{
  allAirtable(sort: {fields: data___robots___data___postDate}, filter: {table: {eq: "robots"}, data: {status: {eq: "published"}}}) {
      nodes {
        data {
          slug
          title
          location
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
      <div className="max-w-2xl mx-auto my-8 text-center font-sans">
        <img className="max-w-2xl" src={heroImg} alt="logo" />
        <h1 className="text-2xl uppercase mt-8">Showing all robots cooking</h1>
        <small className="text-gray-500 italic">Last updated July 4, 2019</small>
      </div>
      <div className="max-w-4xl">
        <ul>
          { data.allAirtable.nodes.map(node => (
            <li key={node.recordId}>
              <a href={node.data.slug}>
              <div className="max-w-sm rounded bg-white shadow-lg mb-6 overflow-hidden">
                <img className="w-full" src="https://placehold.co/1200x610" alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl">{node.data.title}</div>
                  <p className="text-gray-600 text-base">{node.data.location}</p>
                </div>
              </div>
              </a>
            </li>
          )) }
        </ul>
      </div>
      <Subscribe />
    </Layout>
  )
}