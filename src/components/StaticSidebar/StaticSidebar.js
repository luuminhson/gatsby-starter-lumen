// @flow
import React from 'react';
import { Link } from '../LinkWithPrev';
import CategoriesWidget from './CategoriesWidget';
import TagsWidget from './TagsWidget';
import { useCategoriesList, useTagsList } from '../../hooks';
import styles from './StaticSidebar.module.scss';

type Props = {
  isIndex: bool,
  isBlog: bool,
  isWork: bool,
  isIllussion: bool
};

const StaticSidebar = ({ isIndex, isBlog, isWork, isIllussion }: Props) => {
  const hasCategories = useCategoriesList().length > 0;
  const hasTags = useTagsList().length > 0;

  return (
    <div
      className={[
        styles['static-sidebar'],
        isIndex && styles['isIndex'],
        isBlog && styles['isBlog'],
        isWork && styles['isWork'],
        isIllussion && styles['isIllussion']
      ].join(' ')}
    >
      <div className={styles['static-sidebar__inner']}>
        { hasCategories && <CategoriesWidget /> }
        { hasTags && <TagsWidget /> }
      </div>
    </div>
  );
};

export default StaticSidebar;
