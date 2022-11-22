import { useStaticQuery, graphql } from 'gatsby';

export const useGalleryImages = () => {
  const { images } = useStaticQuery(
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
  console.log('😺', images);
  return images.edges;
};
