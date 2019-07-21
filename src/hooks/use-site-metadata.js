// @flow
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                instagram
                dribbble
                linkedin
                flickr
                email
              }
            }
            menu {
              label
              path
            }
            logo {
              src {
                dark
                light
              }
              alt
              text
            }
            url
            title
            subtitle
            copyright
            disqusShortname
            darkNavigation
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
