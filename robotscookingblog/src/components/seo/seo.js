/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Twitter from './Twitter';
import Facebook from './Facebook';

function SEO({ 
  title, 
  description, 
  keywords, 
  author,
  lang,
  image
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            lang
            url
            image
          }
        }
      }
    `
  )

  return (
    <>
      <Helmet>
        <title>{title ? title : site.siteMetadata.title}</title>
        <meta name="description" content={description ? description : site.siteMetadata.description} />
        <meta name="keywords" content={keywords ? keywords : site.siteMetadata.keywords} />
        <meta name="author" content={author ? author : site.siteMetadata.author} />
        <meta name="image" content={image ? image : site.siteMetadata.image} />
      </Helmet>
      <Facebook
        pageUrl={site.siteMetadata.url}
        // type={article ? 'article' : null}
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
        image={site.siteMetadata.image}
      />
      <Twitter
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
        image={site.siteMetadata.image}
      />
    </>
  )
}

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
