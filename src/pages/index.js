import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <h1>Crossing Tones Power Hour</h1>
    <p>
    The Crossing Tones “Power Hour” is a biweekly broadcast of rare and unheard music taken from collections currently in our care. Each Power Hour is livestreamed exclusively and will not be archived, so tuning in via Zoom is the only way to experience these sounds. The Power Hour is one bloc in a potpourri of Thursday programming hosted by our friends at the Jazz History Database, the entirety of which is free and open to the public.</p>
    <p>Thursdays at 8 p.m. ET.</p>
    <p><Link className="button" to="/">Join us</Link></p>
    <h3>Schedule</h3>
    <ul>
      <li>May 27th – Pharoah Sanders/Collective Black Artists (hosted by Parker Fishel)</li>
      <li>June 10th – Buddy Rich Big Band with Anita O'Day (hosted by Joe Lizzi)</li>
      <li>June 24th – Cecil Taylor solo (hosted by Ben Young)</li>
    </ul>
  </div>
  </Layout>
);

export default IndexPage;
