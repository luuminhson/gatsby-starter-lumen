import React from 'react';
import { Link } from 'gatsby';
import styles from './Logo.module.scss';

const Logo = ({ logo }) => (
  <div className={styles['logo']}>
    <h1 className={styles['logo__text']}>
      <Link className={styles['logo__text-link']} to="/">{logo.text}</Link>
    </h1>
  </div>
);

export default Logo;
