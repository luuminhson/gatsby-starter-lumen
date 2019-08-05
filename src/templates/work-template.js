import React from 'react';
import { graphql } from 'gatsby';
import { Location } from '@reach/router';
import Layout from '../components/Layout';
import Work from '../components/Work';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: MarkdownRemark
};

const WorkTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, darkNavigation: dark } = useSiteMetadata();
  const { title: workTitle, description: workDescription } = data.markdownRemark.frontmatter;
  const metaDescription = workDescription !== null ? workDescription : siteSubtitle;
  const hasFeaturedImage = null !== data.markdownRemark.frontmatter.featuredImage;

  const checkLocationState = (location) => {
    const locationState = location.state;

    if (locationState == null) {
      return '/works';
    } else {
      const hasLocationState = location.state.hasOwnProperty('prevUrl');
      const passedBackLink = hasLocationState ? location.state.prevUrl : '/works';

      return passedBackLink;
    }
  }

  return (
    <Location>
      {({ location }) => (
        <Layout title={`${workTitle} - ${siteTitle}`} description={metaDescription} isWork detailTitle={workTitle} hasFeaturedImage={hasFeaturedImage} style={'work'} dark={dark} from={checkLocationState(location)}>
          <Work work={data.markdownRemark} />
        </Layout>
      )}
    </Location>
  );
};


export const query = graphql`
  query WorkBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        year
        roles
        featuredImage {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 1100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;


export default WorkTemplate;
