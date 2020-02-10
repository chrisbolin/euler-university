import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Euler University</h1>
    <p>
      Lessons in computer science and math from Project Euler. There are no
      spoilers and no solutions.
    </p>
    <ul>
      <li>
        <Link to="/1">Problem 1</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
