import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Mission from '../components/mission';
import Principles from '../components/principles';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Mission />
    <Principles />
  </Layout>
);

export default IndexPage;
