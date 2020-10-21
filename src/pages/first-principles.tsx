// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Principles from '../components/principles';

const FirstPrinciples = (props: PageProps) => (
  <Layout>
    <SEO title="First Principles" />
    <Principles />
  </Layout>
);

export default FirstPrinciples;
