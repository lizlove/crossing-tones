import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Mission from '../components/mission';
import Principles from '../components/principles';
import Who from '../components/who';
import Contact from '../components/contact-form';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const About = (props: PageProps) => (
  <Layout>
    <SEO title="About" />
    <div className="grid">
      <div className="grid-left">
        <a id="who"></a>
        <Who />
        <a id="contact"></a>
        <Contact/>
      </div>
      <div className="grid-right">
        <a id="mission"></a>
        <Mission />
        <a id="principles"></a>
        <Principles />
        {/* <AnchorLink className="anchorlink" to="/about#mission" title="Mission Statement" />
        <AnchorLink className="anchorlink" to="/about#principles" title="First Principles" />
        <AnchorLink className="anchorlink" to="/about#who" title="Who we are" />
        <AnchorLink className="anchorlink" to="/about#contact" title="Contact" /> */}
      </div>
    </div>
  </Layout>
);

export default About;