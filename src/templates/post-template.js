import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: MarkdownRemark
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, darkNavigation: dark } = useSiteMetadata();
  const { title: postTitle, description: postDescription } = data.markdownRemark.frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
  const hasFeaturedImage = null !== data.markdownRemark.frontmatter.featuredImage;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} isPost hasFeaturedImage={hasFeaturedImage} style={`post`} dark={dark}>
      <Post post={data.markdownRemark} />
      {console.log(hasFeaturedImage)}
    </Layout>
  );
};


export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
        categorySlugs
      }
      frontmatter {
        date
        description
        tags
        title
        categories
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


export default PostTemplate;
