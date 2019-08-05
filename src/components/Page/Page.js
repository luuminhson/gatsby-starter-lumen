import React from 'react';
import styles from './Page.module.scss';

type Props = {
  title?: string,
  children: React.Node,
  isIndex: bool,
  isBlog: bool,
  isWork: bool,
  isPage: bool,
  isIllussion: bool,
  withSidebar: bool,
  className: string
};

const Page = ({ title, children, isIndex, isBlog, isWork, isPage, isIllussion, withSidebar, className }: Props) => {
  return (
    <div
      className={[
        styles['page'],
        isIndex && styles['isIndex'],
        isBlog && styles['isBlog'],
        isWork && styles['isWork'],
        isPage && styles['isPage'],
        isIllussion && styles['isIllussion'],
        withSidebar && styles['withSidebar'],
        className
      ].join(' ')}
    >
      <div className={styles['page__inner']}>
        {title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;