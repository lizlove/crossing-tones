// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const WhoWeAre = (props: PageProps) => (
  <Layout>
    <SEO title="Who We Are" />
    <h1>Who we are</h1>
    <p>
      Melissa Jones (Morristown NJ)Carnegie Mellon
      <br></br> Jazz collector and independent researcher; specializes in 78
      era. Vast experience of the offerings at Jazz at Lincoln Center. Mother of
      modern Hot Club initiative.
    </p>
    <p>
      Joe Lizzi (Queens NY) Manhattan Coll ’88 <br></br> Audio engineer, record
      producer, collector specializing in avant garde Jazz and modern
      mainstream. Long-time studio engineer, now freelance for own and other
      labels.
    </p>
    <p>
      Ben Young (Worcester MA and Brooklyn NY) Columbia ’92 <br></br> Researcher
      and lecturer, in broadcast and classroom, broad range collector. Former
      label staff producer, now freelance for own and other interests.
    </p>
    <p>
      Parker Fishel (Brooklyn NY) Columbia ’10 MS UTx ’14 <br></br> Archivist
      and producer. Staff archivist for independent rock/roots interest and
      producer of own ventures. Researching for bio-discography of Marion Brown.
    </p>
    <p>
      Charles Iselin (Chicago IL and Brooklyn NY) Columbia ‘15 <br></br> Civil
      engineer and collector specializing in pre-war Jazz. Researching for
      discography of Adrian Rollini.
    </p>
    <p>
      Matthew Rivera (NYC and Louisville KY) Columbia ‘18 <br></br> Filmmaker
      and collector specializing in Jazz 78s. Operates own 78rpm DJ service
      based on 78s.
    </p>
  </Layout>
);

export default WhoWeAre;
