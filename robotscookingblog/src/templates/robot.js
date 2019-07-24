import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
import ReactPlayer from 'react-player'
import SEO from '../components/seo/seo';
import Subscribe from "../components/subscribe"

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
                subtitle
                company {
                    data {
                        name
                        website
                        email
                        location
                        country
                    }
                }
                slug
                cuisine
                location
                videos
                video2
                images {
                    url
                }
                content
                submissionDate
                postDate
            }
        }
    }
`


export default ({ data }) => {
    const robot = data.airtable.data
    return (
        <Layout>
            <SEO title={robot.title} />
            <section className="py-20 bg-white">
                <h1 className="text-5xl font-bold text-center uppercase font-mono">{robot.title || ''}</h1>
                <h2 className="text-xl text-center font-mono font-thin">{robot.subtitle || ''}</h2>
                <h3 className="text-xs text-center text-gray-600 mt-4 font-sans">{robot.cuisine || ''} in {robot.location || ''}</h3>

                <div className="container mx-auto flex justify-center mt-8">
                    <div className="relative h-full -mb-40">
                        <ReactPlayer url={robot.videos || ''} />
                    </div>
                </div>
            </section>

            {/* <section className="container mx-auto py-20">
                <h1 className="text-5xl font-bold text-center uppercase font-mono">{robot.title || ''}</h1>
                <h2 className="text-xl text-center font-mono font-thin">{robot.subtitle || ''}</h2>
                <h3 className="text-xs text-center text-gray-600 mt-4 font-sans">{robot.cuisine || ''} in {robot.location || ''}</h3>
            </section> */}

            <section className="container w-1/2 mx-auto my-40">
                <div className="container bg-orange-300 w-64 p-6 shadow-xl float-right mt-10 ml-10">
                    <span className="font-bold">{robot.company[0].data.name}</span><br/>
                    <span className="text-blue-500 underline"><a href="{robot.company[0].data.website}">{robot.company[0].data.website}</a></span><br/>
                    {robot.company[0].data.email} <br/>
                    {robot.company[0].data.location} {robot.company[0].data.country}
                </div>

                <style dangerouslySetInnerHTML={{__html: `
                        p { margin-bottom: 1em }
                        `}} />

                <div
                    className="text-lg leading-loose tracking-tighter ml-20 mr-20"
                    dangerouslySetInnerHTML={{
                        __html: String(unified()
                        .use(markdown)
                        .use(html)
                        .processSync(robot.content))
                    }} />

                <div className="mx-auto flex justify-center my-20">
                    <div className="relative h-full">
                        <ReactPlayer url={robot.video2 || ''} />
                    </div>
                </div>


            </section>
            <Subscribe />
        </Layout>
    )
}