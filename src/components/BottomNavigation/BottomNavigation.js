// @flow
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './BottomNavigation.module.scss';

type Props = {
    bottomNav: {
        data: object,
        label: string,
        path: string,
        icon: string
    }[],
    dark: bool,
};

const BottomNavigation = ({ bottomNav, dark }: Props) => (
    <div className={[
        styles['wrapper'],
        dark && styles['dark']
    ].join(' ')}>
        <nav className={styles['bottomNav']}>
            <ul className={styles['bottomNav__list']}>
                {bottomNav.map((item) => (
                    <li className={styles['bottomNav__list-item']} key={item.path}>
                        <Link
                            to={item.path}
                            className={styles['bottomNav__list-item-link']}
                            activeClassName={styles['bottomNav__list-item-link--active']}
                            activeStyle={{ color: "blue" }}
                            partiallyActive={true}
                        >
                            <img
                                src={withPrefix(item.icon)}
                                className={styles['bottomNav__list-item-link__icon']}
                                width="75"
                                height="75"
                                alt={item.label}
                            />
                            <span className={styles['bottomNav__list-item-link__label']}>{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        )
  </div>
);

export default BottomNavigation;
