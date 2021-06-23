import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactForm from '../components/contact-form';


const Contact = (props: PageProps) => (
  <Layout>
    <SEO title="Contact Us" />
    <section className="inner">
      <ContactForm />
    </section>
  </Layout>
);

export default Contact;