import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>First Principles</h1>
    <p>
      This consortium called Crossing Tones proposes to act as a receivership
      and halfway-house for collections of Jazz and Jazz-adjacent music
      material.
    </p>
    <h2>I. The original artifacts matter</h2>
    <p>
      While the modern resources of music largely circulate in the digital
      realm, many stem from physical analog originals. Having and holding these
      originals is vital to accessing their art content and knowledge about
      them, so gathering and preserving them is the priority for the
      organization. Wherever it is feasible and wise they will be applied
      directly in work that we do or sanction.
    </p>
    <h2>
      II. We intend to honor and respect the artists whose work is involved
    </h2>
    <p>
      Crossing Tones exists in order to give appropriate credit and reward—where
      possible—to the creative artists who are responsible for this work.
      Foremost those are the musicians and composers, but also photographers,
      writers, and graphic designers represented. We intend to cooperate with
      the initiatives of those artists and their representatives and estates,
      and to guide these decision-makers in choosing best practices for
      preservation, exhibit, and future disposition of other materials.
    </p>
    <p>Soliciting artists’ input in identification is a priority.</p>{" "}
    <p>
      Other rights-holders—including publishing interests, venues, etc.—may be
      involved; their stake in the proceedings will be respected but considered
      secondary to that of the artists.
    </p>
    <p>
      <i>
        While Crossing Tones may take courtesy credit for licensed use, and will
        assume the copyrights for much material in its care, the intellectual
        property rights of the artistic creators will remain intact.
      </i>
    </p>
    <h2>III. Teach it in / Teach it out</h2>
    <p>
      Crossing Tones exists in part for the benefit of the network of
      researchers, publication interests, teachers, broadcasters, historians,
      collectors. Of uppermost importance, though, is for the materials to be
      used to broaden the listener base for the music. We will always advocate
      for free public programs that present the music and its artifacts,
      suitably contextualized and annotated. This applies to the work we do with
      the materials while they are in our care, and it also is a major criterion
      for the decision-making about where these materials will end up finally.
    </p>
    <h2>IV. Not all materials are of equal significance</h2>
    <p>
      Collecting, cataloging, and preservation will be done on a triage
      basis—taking into consideration which items are most endangered, which are
      most vital to the art histories they represent, and which are most
      kinetically in demand for research use or exhibit. Also, after careful
      consideration, some items will not be preserved—not necessarily as a
      judgment of the artistic value of the contents, but most often because
      better editions of the meaningful part of the content is available from
      other sources.
    </p>
    <p>
      <Link to="/who-we-are">Who We Are</Link>
    </p>
  </Layout>
);

export default IndexPage;
