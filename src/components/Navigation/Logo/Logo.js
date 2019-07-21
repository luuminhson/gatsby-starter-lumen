import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Logo.module.scss';

type Props = {
  logo: Object,
  type: String,
  dark: false,
};

const Logo = ({ logo, type, dark }: Props) => (
  <div className={styles['logo']}>
    {(type === 'img') ? (
      <Link to="/" className={styles['logo__link']}>
        <img
          src={dark ? withPrefix(logo.src.dark) : withPrefix(logo.src.light)}
          className={styles['logo__img']}
          height="48"
          alt={logo.alt}
        />
      </Link>
    ) : (
        <h1 className={styles['logo__text']}>
          <Link className={styles['logo__text-link']} to="/">{logo.text}</Link>
        </h1>
      )}
  </div>
);

export default Logo;
