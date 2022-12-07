import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Mission from '../components/mission';
import Principles from '../components/principles';
import Who from '../components/who';
import Contact from '../components/contact-form';
import Donate from '../components/donate'

const About = (props: PageProps) => (
  <Layout>
    <Seo title="About" />
    <section className="inner">
    <div className="grid">
      <div className="grid-left">
        <a id="who"></a>
        <Who />
        <a href="/" className="button button-full">Donate!</a>
      </div>
      <div className="grid-right">
        <a id="mission"></a>
        <Mission />
        <a id="principles"></a>
        <Principles />
      </div>
    </div>
    </section>
    <a id="contact"></a>
    <Contact/>
  </Layout>
);

export default About;