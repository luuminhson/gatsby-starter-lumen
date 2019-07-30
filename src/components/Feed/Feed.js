// @flow
import React from 'react';
import { Link } from '../LinkWithPrev';
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
      <BackgroundImage
        Tag="section"
        className={styles['feed__item-postThumbnail']}
        fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
        backgroundColor={'#040e18'}
      >
        <Link className={styles['feed__item-postThumbnail-link']} to={edge.node.fields.slug} />
        <div className={styles['feed__item-info']}>
          <h2 className={styles['feed__item-title']}>
            <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          </h2>
          <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
          <Button className={styles['feed__item-readmore']} link={edge.node.fields.slug} label='Read More' onDark />
        </div>
      </BackgroundImage>
      );
  } else {
    return (<div className={styles['feed__item-info']}>
      <h2 className={styles['feed__item-title']}>
        <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
      </h2>
      <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
      <Button className={styles['feed__item-readmore']} link={edge.node.fields.slug} label='Read More' />
    </div>);
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
