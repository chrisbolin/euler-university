import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import "katex/dist/katex.min.css";
import SEO from "../components/seo";

export default function MarkdownTemplate({ data, path }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const { title } = frontmatter;
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
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
`;
