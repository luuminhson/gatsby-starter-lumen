// @flow
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string,
  }[],
  burgerClick: bool
};

const Menu = ({ menu, burgerClick }: Props) => (
  <div className={styles['wrapper']}>
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
