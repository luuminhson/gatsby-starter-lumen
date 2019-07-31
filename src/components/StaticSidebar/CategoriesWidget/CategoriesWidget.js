// @flow
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import Widget from '../../Widget';
import { Link } from '../../LinkWithPrev';
import { useCategoriesList } from '../../../hooks';
import styles from './CategoriesWidget.module.scss';

const CategoriesWidget = () => {
    const categories = useCategoriesList();

    return (
        <Widget className={styles['categories-widget']} sectionTitle={'Categories'}>
            <div className={styles['categories-widget__inner']}>
                <ul className={styles['categories-widget__inner__list']}>
                    {categories.map((category) => (
                        <li className={styles['categories-widget__inner__list__item']} key={category.fieldValue}>
                            <Link to={`/category/${kebabCase(category.fieldValue)}/`} className={styles['categories-widget__inner__list__item__link']}>
                                <span className={styles['categories-widget__inner__list__item__link__name']}>{category.fieldValue}</span>
                                <span className={styles['categories-widget__inner__list__item__link__count']}>{category.totalCount}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Widget>
    );
};

export default CategoriesWidget;
