// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import EventPost from '../components/event-post';

const Events = (props: PageProps) => (
  <Layout>
    <SEO title="Events" />
    <div>
      <h1>Events</h1>

      <h2>Upcoming Events</h2>
      <EventPost />
      <h2>Past Events</h2>
      <EventPost />
    </div>
  </Layout>
);

export default Events;
