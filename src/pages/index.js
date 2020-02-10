import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to Euler University</h1>
      <p>
        Lessons in computer science and math from Project Euler. There are no
        spoilers and no solutions.
      </p>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.frontmatter.path}>
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
export default IndexPage;
