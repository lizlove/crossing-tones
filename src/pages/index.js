import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import GallerySection from '../components/gallery-section';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <div className="hero">
        <section className="inner inner-hero">
          <h1 className="hero-head">Crossing Tones </h1>
          <br></br>
          <span className="hero-subtitle">
            Recovering significant Jazz collections
          </span>
        </section>
      </div>
      <section className="inner">
        <h1 className="inner-heading">Explore our collections</h1>
        <GallerySection />
        <p>
          <Link className="button" to="/collections">
            Explore
          </Link>
        </p>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
