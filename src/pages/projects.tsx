// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Projects = (props: PageProps) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <p>
      <b>Sugiyama</b>
      <br></br>
      Collection of recordings and ephemera taken by artist and musician Sugiyama.
    </p>
  </Layout>
);

export default Projects;