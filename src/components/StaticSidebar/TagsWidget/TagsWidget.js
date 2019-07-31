// @flow
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import Widget from '../../Widget';
import { Link } from '../../LinkWithPrev';
import { useTagsList } from '../../../hooks';
import styles from './TagsWidget.module.scss';

type Props = {
    tagCount: bool
};

const TagsWidget = ({ tagCount }: Props) => {
    const tags = useTagsList();

    return (
        <Widget className={styles['tags-widget']} sectionTitle={'Tags'}>
            <div className={styles['tags-widget__inner']}>
                <ul className={styles['tags-widget__inner__list']}>
                    {tags.map((tag) => (
                        <li className={styles['tags-widget__inner__list__item']} key={tag.fieldValue}>
                            <Link to={`/tag/${kebabCase(tag.fieldValue)}/`} className={styles['tags-widget__inner__list__item__link']}>
                                <span className={styles['tags-widget__inner__list__item__link__name']}>{tag.fieldValue}</span>
                                { tagCount &&
                                    <span className={styles['tags-widget__inner__list__item__link__count']}>{tag.totalCount}</span> 
                                }
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Widget>
    );
};

export default TagsWidget;
