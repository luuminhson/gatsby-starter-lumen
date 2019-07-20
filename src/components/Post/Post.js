// @flow
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import BackgroundImage from 'gatsby-background-image';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug, categorySlug } = post.fields;
  const { tags, title, date, featuredImage, category } = post.frontmatter;

  return (
    <div className={styles['post']}>

      <div className={styles['post__hero']}>
        { featuredImage && (
          <BackgroundImage
            Tag="section"
            className={styles['post__heroImage']}
            fluid={featuredImage.childImageSharp.fluid}
            backgroundColor={'#040e18'}
          >
            <div className={styles['post__heroImage__mask']} />
            <div className={styles['post__header-content']}>
              <h1 className={styles['post__header-content__title']}>{title}</h1>
              <div className={styles['post__header-content__meta']}>
                <Meta date={date} className={styles['post__header-content__meta__date']} />
                <span className={styles['post__header-content__meta__in-category']}>in</span>
                <Link className={styles['post__header-content__meta__category-link']} to={categorySlug}>{category}</Link>
              </div>
               </div>
          </BackgroundImage>
        )}
      </div>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
