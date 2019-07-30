// @flow
import React from 'react';
import classNames from 'classnames/bind';
import Button from '../Button';
import { PAGINATION } from '../../constants';
import styles from './Pagination.module.scss';

type Props = {
  prevPagePath: string,
  nextPagePath: string,
  hasNextPage: boolean,
  hasPrevPage: boolean
};

const cx = classNames.bind(styles);

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage
}: Props) => {
  const prevClassName = cx({
    'pagination__prev-link': true,
    'pagination__prev-link--disable': !hasPrevPage
  });

  const nextClassName = cx({
    'pagination__next-link': true,
    'pagination__next-link--disable': !hasNextPage
  });

  const prevBtn = (
    <Button rel="prev" link={prevPagePath} className={prevClassName} label={PAGINATION.PREV_PAGE} />
  );

  const nextBtn = (
    <Button rel="next" link={nextPagePath} className={nextClassName} label={PAGINATION.NEXT_PAGE} />
  );

  return (
    <div className={styles['pagination']}>
      <div className={styles['pagination__prev']}>
        {hasPrevPage && prevBtn}
      </div>
      <div className={styles['pagination__next']}>
        {hasNextPage && nextBtn}
      </div>
    </div>
  );
};

export default Pagination;
