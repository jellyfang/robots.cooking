import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
import SEO from "../components/seo/seo"
import burger from "../images/burgers.svg"
import waiter from "../images/waiter.svg"
import bartender from "../images/bartender.svg"
import chef from "../images/chef.svg"

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

            <div className="container m-auto min-h-screen flex flex-wrap justify-center content-center ">
                <div class="w-full">
                    <h1 className="text-3xl text-center p-16 font-bold w-full font-mono">ROBOTS COOKING showcases robots cooking and working in the restaurant industry</h1>
                </div>

                <div class="w-1/2 p-2">
                    <div class="text-gray-700 text-center p-2">
                        <center>
                            <img src={waiter} alt="Logo" className="w-1/2" />
                        </center>
                        <br />
                        <h1 className="text-2xl font-bold">Workers in the industry</h1>
                        <ul className="">
                            <li className="text-lg my-4 mx-2">Over 15 million people work in restaurants</li>
                            <li className="text-lg my-4 mx-2">Another 1.6 million jobs to be created by 2029</li>
                            <li className="text-lg my-4 mx-2">90% of restaurants have less than 50 employees</li>
                        </ul>
                    </div>
                </div>
                <div class="w-1/2 p-2">
                    <div class="text-gray-700 text-center p-2">
                        <center>
                            <img src={chef} alt="Logo" className="w-1/2" />
                        </center>
                        <br />
                        <h1 className="text-2xl font-bold">Some facts about the industry</h1>
                        <ul className="">
                            <li className="text-lg my-4 mx-2">2019 projected to have over $850 billion in sales</li>                            
                            <li className="text-lg my-4 mx-2">Over 1 million restaurant locations in the USA</li>
                            <li className="text-lg my-4 mx-2">70% of restaurants operate as a single unit</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto my-auto flex justify-center">
                    {/* <div
                    className="text-lg text-center"
                    dangerouslySetInnerHTML={{
                        __html: String(unified()
                        .use(markdown)
                        .use(html)
                        .processSync(page.content))
                    }} /> */}
            </div>
        </Layout>
    )
}