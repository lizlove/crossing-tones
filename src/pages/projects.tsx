// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectPost from "../components/project-post";

const Projects = (props: PageProps) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <ProjectPost />
  </Layout>
);

export default Projects;
