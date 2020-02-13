import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import "katex/dist/katex.min.css";
import SEO from "../components/seo";

function problemNumber(path) {
  return path.match(/\d+/)[0];
}

function ProjectEulerLink({ number }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://projecteuler.net/problem=${number}`}
    >
      Problem {number}
    </a>
  );
}

export default function MarkdownTemplate({ data, path }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const { title } = frontmatter;
  const number = problemNumber(path);

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      {!!number && (
        <p>
          Read <ProjectEulerLink number={number} /> on Project Euler.
        </p>
      )}
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
