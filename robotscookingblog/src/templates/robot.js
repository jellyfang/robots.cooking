import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
import ReactPlayer from 'react-player'
import SEO from '../components/seo/seo';

export default ({ data }) => {
    const post = data.airtable.data
    return (
        <Layout>
            <SEO 
                title={post.title}
                description="hello world"
            />
            <div>
                <div class="videoWrapper">
                    <ReactPlayer url={post.videos || ''} />
                </div>
                <h1 className="title">{post.title || ''}</h1>
                <h2 className="subtitle">{post.subtitle || ''}</h2>
                <h3 className="metadata">{post.cuisine || ''} in {post.location || ''}</h3>
                {/* <img src={post.image[0].url || ''} /> */}
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{
                        __html: String(unified()
                        .use(markdown)
                        .use(html)
                        .processSync(post.content))
                    }} />
                <div class="videoWrapper2">
                    <ReactPlayer url={post.video2 || ''}  />
                </div>
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
                website
              }
        }
    }
`