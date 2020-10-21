import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Principles from '../components/principles';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Principles />
  </Layout>
);

export default IndexPage;
