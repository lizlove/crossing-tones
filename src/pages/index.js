import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import GallerySection from '../components/gallery-section';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <div className="side-by-side">
        <section className="inner">
          <h1 className="inner-heading">
            Recovering significant Jazz collections
          </h1>
          {/* <p className="text-body">
          <GallerySection />
        </p> */}
          <Link className="button" to="/collections">
            Explore
          </Link>
        </section>
        <StaticImage
          src="../images/gallery/sugiyama_0.jpeg"
          alt="A reel"
          placeholder="blurred"
          className="side-image"
        />
      </div>
      <div className="hero side-by-side">
        <StaticImage
          src="../images/sugiyama_reel.jpeg"
          alt="A reel"
          placeholder="blurred"
          // layout="fixed"
        />
        <section className="inner inner-hero">
          <h1 className="hero-head">Check out our sounds</h1>
          <br></br>
          <span className="hero-subtitle">
            {' '}
            Join one of our listening sessions.
          </span>
          <br></br>
          <br></br>
          <Link className="button secondary" to="/events">
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
