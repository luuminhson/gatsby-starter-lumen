// @flow
import React from 'react';
import { Link } from '../../LinkWithPrev';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string,
  }[],
  burgerClick: bool,
  isPost: bool,
  isWork: bool,
  unfixed: bool,
  dark: bool,
  onFeaturedImage: bool
};

const Menu = ({ menu, burgerClick, isPost, isWork, unfixed, dark, onFeaturedImage }: Props) => (
  <div className={[
    styles['wrapper'],
    unfixed && styles['unfixed'],
    dark && styles['dark'],
    onFeaturedImage && styles['on_featured_image']
  ].join(' ')}>
    {!isWork && !isPost && (
      <nav className={styles['menu']}>
        <ul className={styles['menu__list']}>
          {menu.map((item) => (
            <li className={styles['menu__list-item']} key={item.path}>
              <Link
                to={item.path}
                className={styles['menu__list-item-link']}
                activeClassName={styles['menu__list-item-link--active']}
                partiallyActive={item.path === '/' ? false : true}
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
