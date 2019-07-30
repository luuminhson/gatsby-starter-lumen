// @flow
import React from 'react';
import { Link } from '../LinkWithPrev';
import moment from 'moment';
import Img from 'gatsby-image';
import SectionTitle from '../SectionTitle';
import type { Edges } from '../../types';
import styles from './Strip.module.scss';

type Props = {
    edges: Edges,
    sectionTitle: string,
    sectionLink: String,
    sectionLinkLabel: string
};

const StripLayout = (edge) => {
    if (edge.node.frontmatter.featuredImage) {
        return (
            <Link className={styles['strip__item-inner__link']} to={edge.node.fields.slug}>
                <Img
                    className={styles['strip__item-inner__postThumbnail']}
                    fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
                />
                <div className={styles['strip__item-inner__info']}>
                    <h3 className={styles['strip__item-inner__info__title']}>{edge.node.frontmatter.title}</h3>
                    <span className={styles['strip__item-inner__info__date']}>{moment(edge.node.frontmatter.date).format('D MMMM, YYYY')}</span>
                    
                </div>
            </Link>
        );
    } else {
        return (<div className={styles['strip__item-inner__info']}>
            <div className={styles['strip__item-inner__info']}>
                <h3 className={styles['strip__item-inner__info__title']}>
                    <Link className={styles['strip__item-inner__info__title__link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
                </h3>
                <span className={styles['strip__item-inner__info__date']}>{moment(edge.node.frontmatter.date).format('D MMMM, YYYY')}</span>
            </div>
        </div>);
    }
}

const Strip = ({ edges, sectionTitle, sectionLink, sectionLinkLabel }: Props) => (
    <div className={styles['wrapper']}>
        <SectionTitle className={styles['section__title']} title={sectionTitle} actionLink={sectionLink} actionLabel={sectionLinkLabel} />
        <div className={styles['strip']}>
            {edges.map((edge) => (
                <div className={[styles['strip__item'], edge.node.frontmatter.featuredImage && styles['has_featured-image']].join(' ')} key={edge.node.fields.slug}>
                    <div className={styles['strip__item-inner']}>
                        {StripLayout(edge)}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Strip;
