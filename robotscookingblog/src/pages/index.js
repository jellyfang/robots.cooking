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
      <section className="py-20 bg-white">
        <div className="container mx-auto flex justify-center">
          <img className="max-w-3xl rounded -mb-32" src={heroImg} alt="logo" />
          {/* <h1 className="text-2xl uppercase mt-8">Showing all robots cooking</h1>
          <small className="text-gray-500 italic">Last updated July 4, 2019</small> */}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center uppercase mt-20 mb-8 font-mono">
          Showing all robots
        </h2>
        <ul className="flex flex-wrap">
          { data.allAirtable.nodes.map(node => (
            <li className="w-full md:w-1/3 px-2 mb-4" key={node.recordId}>
              <a href={node.data.slug}>
              <div className="bg-white rounded shadow">
                <img className="" src="https://placehold.co/1200x610" alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl">{node.data.title}</div>
                  <p className="text-gray-600 text-base">{node.data.location}</p>
                </div>
              </div>
              </a>
            </li>
          )) }
        </ul>
      </section>
      <Subscribe />
    </Layout>
  )
}