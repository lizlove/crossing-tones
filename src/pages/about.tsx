import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Mission from '../components/mission';
import Principles from '../components/principles';
import Who from '../components/who';
import Contact from '../components/contact';

const About = (props: PageProps) => (
  <Layout>
    <SEO title="About" />
    <Mission />
    <Principles />
    <Who />
    <Contact />
  </Layout>
);

export default About;