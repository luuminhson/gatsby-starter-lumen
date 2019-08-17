// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Strip from '../components/Strip';
import HorizontalCard from '../components/HorizontalCard';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark
};

const IndexTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, darkNavigation: dark } = useSiteMetadata();

  const blogPost = data.blogStrip.edges;

  const workPost = data.workList.edges;

  return (
    <Layout title={siteTitle} description={siteSubtitle} isIndex dark={dark}>
      <Page isIndex>
        <Strip edges={blogPost} sectionTitle='Articles' sectionLink='/blog' sectionLinkLabel='See All' />
        <HorizontalCard edges={workPost} sectionTitle='Works' sectionLink='/works' sectionLinkLabel='See All' />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate {
    blogStrip: allMarkdownRemark(
        limit: 6,
        skip: 0,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlugs
          }
          frontmatter {
            title
            date
            categories
            description
            featuredImage {
              childImageSharp {
                resize(width: 500, height: 500) {
                  src
                }
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    workList: allMarkdownRemark(
      limit: 5,
      skip: 0,
      filter: { frontmatter: { template: { eq: "work" }, draft: { ne: true } } },
      sort: { order: DESC, fields: [frontmatter___year] }
    ){
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          year
          roles
          description
          featuredImage {
            childImageSharp {
              resize(width: 500, height: 500) {
                src
              }
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  }
`;

export default IndexTemplate;
