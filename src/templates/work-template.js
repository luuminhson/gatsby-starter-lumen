import React from 'react';
import { graphql } from 'gatsby';
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

  return (
    <Layout title={`${workTitle} - ${siteTitle}`} description={metaDescription} isWork hasFeaturedImage={hasFeaturedImage} style={'work'} dark={dark}>
      <Work work={data.markdownRemark} />
    </Layout>
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
