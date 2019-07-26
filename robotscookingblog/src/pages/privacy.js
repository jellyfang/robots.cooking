import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
import SEO from "../components/seo/seo"

export const query = graphql`
{
allAirtable(filter: {table: {eq: "site"}, data: {page: {eq: "privacypolicy"}}}) {
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

            <style dangerouslySetInnerHTML={{__html: `
                        p { margin-bottom: 1em }
                        `}} />

            <div className="container mx-auto my-auto flex justify-center">
                    <div
                    className="text-base p-10"
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