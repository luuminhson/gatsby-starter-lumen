// @flow
import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Roles from './Roles';
import Content from './Content';
import styles from './Work.module.scss';
import type { Node } from '../../types';

type Props = {
    work: Node
};

const Work = ({ work }: Props) => {
    const { html } = work;
    const { title, description, year, featuredImage, roles } = work.frontmatter;

    const headerContent = (
        <div className={styles['work__header-content']}>
            <h1 className={styles['work__header-content__title']}>{title}</h1>
            <div className={styles['work__header-content__description']}>{description}</div>
            <div className={styles['work__header-content__meta']}>
                <div className={styles['work__header-content__meta__year']}>{year} •&nbsp;</div>
                {roles && <Roles roles={roles} className={styles['post__header-content__meta__roles__list']} />}
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
                    className={styles['work__heroImage']}
                    fluid={featuredImage.childImageSharp.fluid}
                    backgroundColor={'#040e18'}
                >
                    <div className={styles['work__heroImage__mask']} />
                    {headerContent}
                </BackgroundImage>
            );
        } else {
            return headerContent;
        }
    }

    return (
        <div className={styles['work']}>
            <div className={styles['work__hero']}>
                {postHeader()}
            </div>
            <div className={styles['work__content']}>
                <Content body={html} />
            </div>

        </div>
    );
};

export default Work;
