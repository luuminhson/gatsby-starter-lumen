// @flow
import React from 'react';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import Img from 'gatsby-image';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, featuredImage } = post.frontmatter;

  return (
    <div className={styles['post']}>

      <div className={styles['post__hero']}>
        {featuredImage && (
          <Img className={styles['post__heroImage']} fluid={featuredImage.childImageSharp.fluid} />
        )}
        <h1 className={styles['post__title']}>{title}</h1>
      </div>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
