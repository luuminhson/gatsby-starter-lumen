// @flow
import React from 'react';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import Categories from './Categories';
import BackgroundImage from 'gatsby-background-image';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug, categorySlugs } = post.fields;
  const { tags, title, date, featuredImage, categories } = post.frontmatter;

  const headerContent = (
    <div className={styles['post__header-content']}>
      <h1 className={styles['post__header-content__title']}>{title}</h1>
      <div className={styles['post__header-content__meta']}>
        <Meta date={date} className={styles['post__header-content__meta__date']} />
        {categories && categorySlugs && (
          <div className={styles['post__header-content__meta__categories']}>
            <span className={styles['post__header-content__meta__in-categories']}>&nbsp;in&nbsp;</span>
            <Categories
              categories={categories}
              categorySlugs={categorySlugs}
              className={styles['post__header-content__meta__categories__list']}
            />
          </div>
        )}
      </div>
    </div>
  );

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  const postHeader = () => {
    if (!isEmpty(featuredImage)) {
      return (
        <BackgroundImage
          Tag="section"
          className={styles['post__heroImage']}
          fluid={featuredImage.childImageSharp.fluid}
          backgroundColor={'#040e18'}
        >
          <div className={styles['post__heroImage__mask']} />
          {headerContent}
        </BackgroundImage>
      );
    } else {
      return headerContent;
    }
  }

  return (
    <div className={styles['post']}>
      <div className={styles['post__hero']}>
        {postHeader()}
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
