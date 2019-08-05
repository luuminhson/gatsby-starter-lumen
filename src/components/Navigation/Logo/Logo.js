import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Logo.module.scss';

type Props = {
  logo: Object,
  type: String,
  dark: false,
  pageTitle: string
};

const Logo = ({ logo, type, pageTitle, dark }: Props) => {

  const title = (
    <h1 className={[styles['logo__text'], styles['logo__pageTitle']].join(' ')}>{pageTitle}</h1>
  );

  const mainLogo = (
    (type === 'img') ? (
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
      )
  );

  return (
    <div className={[styles['logo'], dark && styles['dark']].join(' ')}>
      <div className={styles['desktopLogo']}>{ mainLogo }</div>
      <div className={styles['mobileLogo']}>{ (typeof pageTitle === 'undefined') ? mainLogo : title }</div>
    </div>
  )
};

export default Logo;
