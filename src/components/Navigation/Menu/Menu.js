// @flow
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string,
  }[],
  burgerClick: bool,
  isPost: bool,
  unfixed: bool,
  dark: bool,
  onFeaturedImage: bool
};

const Menu = ({ menu, burgerClick, isPost, unfixed, dark, onFeaturedImage }: Props) => (
  <div className={[
    styles['wrapper'],
    unfixed && styles['unfixed'],
    dark && styles['dark'],
    onFeaturedImage && styles['on_featured_image']
  ].join(' ')}>
    {!isPost && (
      <nav className={styles['menu']}>
        <ul className={styles['menu__list']}>
          {menu.map((item) => (
            <li className={styles['menu__list-item']} key={item.path}>
              <Link
                to={item.path}
                className={styles['menu__list-item-link']}
                activeClassName={styles['menu__list-item-link--active']}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
    <div className={styles['icon']} onClick={burgerClick}>
      <div className={styles['icon__inner']}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

export default Menu;
