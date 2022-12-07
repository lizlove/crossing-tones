import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '@browniebroke/gatsby-image-gallery';

export default function GallerySection() {
  const data = useStaticQuery(
    graphql`
      query ImagesForGallery {
        images: allFile(
          filter: { relativeDirectory: { eq: "images/gallery" } }
        ) {
          edges {
            node {
              childImageSharp {
                thumb: gatsbyImageData(
                  width: 270
                  height: 270
                  placeholder: BLURRED
                )
                full: gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    `
  );
  const getCaption = (index, node) => {
    console.log(index, node);
    return `Sugiyama ${index}`;
  };
  const images = data.images.edges.map(({ node }, index) => ({
    ...node.childImageSharp,
    //TODO: Get caption info
    caption: getCaption(index, node),
  }));
  return <Gallery images={images} />;
}
