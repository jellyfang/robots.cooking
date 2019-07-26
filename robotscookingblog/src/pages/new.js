import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"

export default () => {
    return (
        <Layout>
            <SEO />

            <div className="container bg-white w-full m-auto min-h-screen flex flex-wrap justify-center content-center ">
                <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
                <iframe 
                    class="airtable-embed airtable-dynamic-height" 
                    src="https://airtable.com/embed/shrS8aK80hitolkJR?backgroundColor=blue" 
                    frameborder="0" 
                    onmousewheel="" 
                    width="100%" 
                    height="736">
                </iframe>
            </div>
        </Layout>
    )
}