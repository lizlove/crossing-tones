import React from 'react';
import moment from 'moment';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function Events({ data }) {
  const eventStyle = { marginBottom: '0.45rem', fontWeight: 700 };
  // const isOdd = (num) => num % 2;
  // let nextHour;
  // let week = moment().week();
  // if (isOdd(week)) {
  //   nextHour = 'this week';
  // } else {
  //   nextHour = 'next week';
  // }
  // let week = moment().week();
  // console.log(week);
  return (
    <Layout>
      <Seo title="Events" />
      <section className="inner">
        <h1>Power Hour</h1>
        <p>
          The <b>Crossing Tones Power Hour</b> is a biweekly broadcast
          of rare and unheard music taken from collections currently
          in our care. Each Power Hour is live-streamed exclusively as
          part of Thursday's{' '}
          <Link className="bold-link" to="/">
            {' '}
            Jazz Potpourri
          </Link>{' '}
          and will not be archived, so tuning in via Zoom is the only
          way to experience these sounds.
        </p>
        <p>
          For more information on future programming,{' '}
          <a
            className="bold-link"
            href="https://crossingtones.us6.list-manage.com/subscribe?u=58c871f96b5aae759fbc21dd0&id=5dbd7a6784"
          >
            join our mailing list.
          </a>
        </p>
        <p>Join us every other Thursday from 8-9PM ET.</p>
        <h5>The next Power Hour is: get next hour.</h5>
        {data.upcoming.edges.map(({ node }) => (
          <div key={node.fields.slug}>
            <h4 style={eventStyle}>
              <Link className="bold-link" to={node.fields.slug}>
                {node.frontmatter.title}{' '}
                <span>— {node.frontmatter.date}</span>
              </Link>
            </h4>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </section>
      <section className="inner">
        <h1>Past Events</h1>
        {data.past.edges.map(({ node }) => (
          <div key={node.fields.slug}>
            <h4 style={eventStyle}>
              <Link className="bold-link" to={node.fields.slug}>
                {node.frontmatter.title}{' '}
                <span>— {node.frontmatter.date}</span>
              </Link>
            </h4>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query AllEvents($currentDate: Date!) {
    past: allMarkdownRemark(
      filter: {
        frontmatter: {
          date: { lt: $currentDate }
          type: { eq: "event" }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          excerpt
        }
      }
    }
    upcoming: allMarkdownRemark(
      filter: {
        frontmatter: {
          date: { gte: $currentDate }
          type: { eq: "event" }
        }
      }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`;
