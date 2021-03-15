// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Mission from '../components/mission';

const MissionStatement = (props: PageProps) => (
  <Layout>
    <SEO title="Mission" />
    <Mission />
  </Layout>
);

export default MissionStatement;
