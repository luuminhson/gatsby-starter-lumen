// @flow
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

type Props = {
  date: string,
  className: string
};

const Meta = ({ date, className }: Props) => (
  <div className={[styles['meta'], className].join(' ')}>
    <span className={styles['meta__date']}>Published {moment(date).format('D MMM YYYY')}</span>
  </div>
);

export default Meta;
