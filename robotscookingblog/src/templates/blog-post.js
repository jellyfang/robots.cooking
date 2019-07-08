import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    const post = data.airtable.data
    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
                <h5>by {post.author} on {post.date}</h5>
                <img src={post.image[0].url} />
                <p>{post.PostMarkdown}</p>
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