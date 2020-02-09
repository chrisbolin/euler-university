import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import "katex/dist/katex.min.css"
import SEO from "../components/seo"

function title(frontmatter, path) {
  if (frontmatter.title) return frontmatter.title
  return `Problem ${path.match(/\d+/)}`
}

export default function MarkdownTemplate({ data, path }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const pageTitle = title(frontmatter, path)
  return (
    <Layout>
      <SEO title={pageTitle} />
      <h1>{pageTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
