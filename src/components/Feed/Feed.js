// @flow
import React from 'react';
import { Link } from '../LinkWithPrev';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import Button from '../Button';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const feedLayout = (edge) => {
  if (edge.node.frontmatter.featuredImage) {
    return (
      <div>
        <Link className={styles['feed__item-postThumbnail-link']} to={edge.node.fields.slug}>
          <Img
            className={styles['feed__item-postThumbnail']}
            fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
          />
        </Link>
        <div className={styles['feed__item-info']}>
          <h3 className={styles['feed__item-info__title']}>
            <Link className={styles['feed__item-info__title__link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          </h3>
          <p className={styles['feed__item-info__description']}>{edge.node.frontmatter.description}</p>
          <Button className={styles['feed__item-info__readmore']} link={edge.node.fields.slug} label='Read More' onDark />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles['feed__item-info']}>
        <h3 className={styles['feed__item-info__title']}>
          <Link className={styles['feed__item-info__title__link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h3>
        <p className={styles['feed__item-info__description']}>{edge.node.frontmatter.description}</p>
        <Button className={styles['feed__item-info__readmore']} link={edge.node.fields.slug} label='Read More' />
      </div>
    );
  }
}

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={[styles['feed__item'], edge.node.frontmatter.featuredImage && styles['has_featured-image']].join(' ')} key={edge.node.fields.slug}>
        {feedLayout(edge)}
      </div>
    ))}
  </div>
);

export default Feed;
