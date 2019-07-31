// @flow
import React from 'react';
import SectionTitle from '../SectionTitle';
import styles from './Widget.module.scss';

type Props = {
    children: React.Node,
    sectionTitle: string,
    sectionLink: String,
    sectionLinkLabel: string,
    className: string
};

const CategoriesWidget = ({ children, sectionTitle, sectionLink, sectionLinkLabel, className }: Props) => {
    return (
        <div className={[styles['widget'], className].join(' ')}>
            <div className={styles['widget__inner']}>
                <SectionTitle className={styles['section__title']} title={sectionTitle} actionLink={sectionLink} actionLabel={sectionLinkLabel} />
                <div className={styles['widget__inner__body']}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CategoriesWidget;
