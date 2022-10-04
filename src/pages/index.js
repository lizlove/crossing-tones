import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <div className="hero">
        <section className="inner">
          <h1 className="hero-head">Crossing Tones </h1>
          <br></br>
          <span className="hero-subtitle">
            Recovering significant Jazz collections this needs to be
            full width
          </span>
        </section>
      </div>
      <section className="inner">
        <h1 className="inner-heading">Explore Our Collections</h1>
        <p>Here is 1-3 images in a slideshow.</p>
      </section>
      <section className="inner">
        <h1 className="inner-heading">Check Out the Sounds</h1>
        <p>This will be a link to the events page</p>
      </section>
      <section className="inner">
        <h1 className="inner-heading">Our Mission</h1>
        <p>
          Crossing Tones is a 501(c)(3) non-profit that acts an
          intermediary custodian for significant collections of Jazz
          music and related items. We gather essential source
          materials and prepare them for acquisition, preservation,
          and use in meaningful teaching and listening initiatives.
          Through our efforts we hope to facilitate research, deepen
          appreciation, and broaden the listener base for the music.
        </p>
        <Link className="button" to="/about">
          Listen!
        </Link>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
