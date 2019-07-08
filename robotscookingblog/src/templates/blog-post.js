import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

export default ({ data }) => {
    const post = data.airtable.data
    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
                <h5>by {post.author} on {post.date}</h5>
                <img src={post.image[0].url} />
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{
                        __html: String(unified()
                        .use(markdown)
                        .use(html)
                        .processSync(post.PostMarkdown))
                    }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        airtable(
            data: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            data {
                title
                author
                date(formatString: "MMMM DD, YYYY")
                image {
                    url
                }
                PostMarkdown
            }
        }
    }
`