// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const WhoWeAre = (props: PageProps) => (
  <Layout>
    <SEO title="Who We Are" />
    <h1>Crossing Tones: <i>Who we are</i></h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default WhoWeAre;
