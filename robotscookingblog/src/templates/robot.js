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
                <h1>{post.title || ''}</h1>
                <h2>{post.subtitle || ''}</h2>
                <h5>{post.cuisine || ''} {post.location || ''}</h5>
                {post.videos || ''}
                {post.videos || ''}
                {/* <img src={post.image[0].url || ''} /> */}
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{
                        __html: String(unified()
                        .use(markdown)
                        .use(html)
                        .processSync(post.content))
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
                content
                country
                cuisine
                email
                images {
                  url
                }
                location
                postDate
                robots {
                  id
                }
                slug
                status
                subtitle
                video2
                videos
                views
                website
              }
        }
    }
`