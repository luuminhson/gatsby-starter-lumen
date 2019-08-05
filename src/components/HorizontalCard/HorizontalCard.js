// @flow
import React from 'react';
import { Link } from '../LinkWithPrev';
import moment from 'moment';
import Img from 'gatsby-image';
import SectionTitle from '../SectionTitle';
import type { Edges } from '../../types';
import styles from './HorizontalCard.module.scss';

type Props = {
    edges: Edges,
    sectionTitle: string,
    sectionLink: String,
    sectionLinkLabel: string
};

const HorizontalCardLayout = (edge) => {
    if (edge.node.frontmatter.featuredImage) {
        return (
            <Link className={styles['horizCard__item-inner__link']} to={edge.node.fields.slug}>
                <Img
                    className={styles['horizCard__item-inner__postThumbnail']}
                    fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
                />
                { edge.node.frontmatter.year && <span className={styles['horizCard__item-inner__year']}>{edge.node.frontmatter.year}</span> }
                <div className={styles['horizCard__item-inner__info']}>
                    <h3 className={styles['horizCard__item-inner__info__title']}>{edge.node.frontmatter.title}</h3>
                    <span className={styles['horizCard__item-inner__info__meta']}>{edge.node.frontmatter.description}</span>
                </div>
            </Link>
        );
    } else {
        return (
            <div className={styles['horizCard__item-inner__info']}>
                <h3 className={styles['horizCard__item-inner__info__title']}>
                    <Link className={styles['horizCard__item-inner__info__title__link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
                </h3>
                <span className={styles['horizCard__item-inner__info__meta']}>{edge.node.frontmatter.year} – {edge.node.frontmatter.description}</span>
            </div>
        );
    }
}

const HorizontalCard = ({ edges, sectionTitle, sectionLink, sectionLinkLabel }: Props) => (
    <div className={styles['wrapper']}>
        <SectionTitle className={styles['section__title']} title={sectionTitle} actionLink={sectionLink} actionLabel={sectionLinkLabel} />
        <div className={styles['horizCard']}>
            {edges.map((edge) => (
                <div className={[styles['horizCard__item'], edge.node.frontmatter.featuredImage && styles['has_featured-image']].join(' ')} key={edge.node.fields.slug}>
                    <div className={styles['horizCard__item-inner']}>
                        {HorizontalCardLayout(edge)}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default HorizontalCard;
