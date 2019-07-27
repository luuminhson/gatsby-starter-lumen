// @flow
import React from 'react';
import Button from '../Button';
import styles from './SectionTitle.module.scss';

const PureSectionTitle = ({ title, actionLink, actionLabel, className }) => (
    <div className={[styles['wrapper'], className].join(' ')}>
        <h2 className={styles['wrapper__title']}>{title}</h2>
        <Button className={styles['wrapper__link']} link={actionLink} label={actionLabel} onDark />
    </div>
);

const SectionTitle = (props) => (
    <PureSectionTitle {...props} />
  );

export default SectionTitle;