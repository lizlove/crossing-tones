import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="hero">
        <section className="inner">
          <h1 className="hero-head">Crossing Tones </h1><br></br>
          <span className="hero-subtitle">an intermediary custodian for significant collections of Jazz music and related items.</span>
        </section>
      </div>
      <section className="inner">
        <h1 className="inner-heading">Power Hour</h1>
        <p>
        The Crossing Tones “Power Hour” is a biweekly broadcast of rare and unheard music taken from collections currently in our care. Each Power Hour is livestreamed exclusively and will not be archived, so tuning in via Zoom is the only way to experience these sounds. </p>
        <p>Join us every other Thursday from 8-9PM ET</p>
        <p><Link className="button" to="https://wpi.zoom.us/j/97495476280">Listen!</Link></p>
        <h3>Schedule</h3>
        <ul>
          <li><Link to="/power-hour-5-6/">May 6th –  New Music Remembers the Old Master Duke Ellington (Town Hall, July 6, 1980)</Link></li>
          <li><Link to="/power-hour-5-20/">May 20th – Pharaoh Sanders with the Collective Black Artists Ensemble (Town Hall, January 26, 1978)</Link></li>
          <li><Link to="/power-hour-6-3/">June 3rd – Mal Waldron and Charlie Rouse (Soundscape and unreleased studio session, early 1980's)</Link></li>
          <li><Link to="/power-hour-6-17/">June 17th – Charles Tyler Group (Sweet Basil, 1984)</Link></li>
        </ul>
      </section>
    </div>
  </Layout>
);

export default IndexPage;


May 6, 2021 – New Music Remembers the Old Master Duke Ellington – Town Hall, July 6, 1980 [Liz, we have an image for this page]
May 20, 2021 – Pharaoh Sanders with the Collective Black Artists Ensemble – Town Hall, January 26, 1978
June 3, 2021– Mal Waldron and Charlie Rouse – Soundscape and unreleased studio session, early 1980s
June 17, 2021 – TBD
July 1, 2021 – TBD
July 15, 2021 – TBD
July 29, 2021 – TBD
August 12, 2021 – TBD
