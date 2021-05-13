// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Events from '../components/events';

const AllEvents = (props: PageProps) => (
  <Layout>
    <SEO title="Events" />
    <Events />
  </Layout>
);

export default AllEvents;
