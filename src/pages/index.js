import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import GallerySection from '../components/gallery-section';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <section className="inner">
        <h1 className="inner-heading">
          Recovering significant Jazz collections
        </h1>
        <p className="text-body">
          <GallerySection />
        </p>
        <Link className="button" to="/collections">
          Explore
        </Link>
      </section>
      <div className="hero">
        <section className="inner inner-hero">
          <h1 className="hero-head">Check out our sounds</h1>
          <br></br>
          <span className="hero-subtitle">
            {' '}
            Ac euismod vel sit maecenas id pellentesque eu sed
            consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </span>
          <br></br>
          <br></br>
          <Link className="button secondary" to="/collections">
            Listen!
          </Link>
        </section>
      </div>
      <section className="inner">
        <h1 className="inner-heading">Mission</h1>
        <p className="text-body">
          Crossing Tones is a 501(c)(3) non-profit that acts as an
          intermediary custodian for significant collections of Jazz
          music and related items.
        </p>
        <p className="text-body">
          We gather essential source materials and prepare them for
          acquisition, preservation, and use in meaningful teaching
          and listening initiatives.
        </p>
        <p className="text-body">
          Through our efforts we hope to facilitate research, deepen
          appreciation, and broaden the listener base for the music.
        </p>
        <Link className="button" to="/about">
          More
        </Link>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
