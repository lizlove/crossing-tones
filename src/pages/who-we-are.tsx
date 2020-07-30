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
      <b>David Beal</b>(Queens NY)
      <br></br>
      Artist and musician. Collector of jazz 78s and co-leader of the Freehold
      Hot Club.
    </p>
    <p>
      <b>Melissa Jones</b> (Morristown NJ)
      <br></br>
      Jazz collector and independent researcher; specializes in 78 era. Vast
      experience of the offerings at Jazz at Lincoln Center. Mother of modern
      Hot Club initiative.
    </p>
    <p>
      <b>Joe Lizzi</b> (Queens NY)
      <br></br>
      Audio engineer, record producer, collector specializing in avant garde
      Jazz and modern mainstream. Long-time studio engineer, now freelance for
      own and other labels.
    </p>
    <p>
      <b>Ben Young</b> (Worcester MA and Brooklyn NY)
      <br></br>
      Researcher and lecturer, in broadcast and classroom, broad range
      collector. Former label staff producer, now freelance for own and other
      interests.
    </p>
    <p>
      <b>Parker Fishel</b> (Brooklyn NY)
      <br></br>
      Archivist and producer. Staff archivist for independent rock/roots
      interest and producer of own ventures. Researching for bio-discography of
      Marion Brown.
    </p>
    <p>
      <b>Charles Iselin </b>(Chicago IL and Manhattan NY)
      <br></br>
      Structural engineer and collector specializing in pre-war Jazz. Current
      researcher on the life and music of Garnet Clarke.
    </p>
    <p>
      <b>Matthew Rivera</b> (Brooklyn NY and Louisville KY)
      <br></br>
      Filmmaker and collector specializing in Jazz 78s. Operates own 78rpm DJ
      service based on 78s.
    </p>
  </Layout>
);

export default WhoWeAre;
