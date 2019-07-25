import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
import SEO from "../components/seo/seo"

export const query = graphql`
{
allAirtable(filter: {table: {eq: "site"}, data: {page: {eq: "about"}}}) {
    nodes {
        data {
            content
        }
    }
    }
}
`

export default ({data}) => {
    const page = data.allAirtable.nodes[0].data

    return (
        <Layout>
            <SEO />

            
            <div class="container mx-auto h-screen flex justify-center items-center">
                    <div
                    className="text-lg text-center"
                    dangerouslySetInnerHTML={{
                        __html: String(unified()
                        .use(markdown)
                        .use(html)
                        .processSync(page.content))
                    }} />
            </div>
        </Layout>
    )
}