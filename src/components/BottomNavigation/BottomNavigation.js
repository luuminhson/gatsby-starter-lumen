// @flow
import React from 'react';
import { Link } from '../LinkWithPrev';
import { getIcon } from '../../utils';
import Icon from '../Icon';
import styles from './BottomNavigation.module.scss';

type Props = {
    bottomNav: {
        data: object,
        label: string,
        path: string,
        icon: string
    }[],
    dark: bool,
    className: string
};

const BottomNavigation = ({ bottomNav, dark, className }: Props) => (
    <div className={[
        styles['wrapper'],
        dark && styles['dark'],
        className
    ].join(' ')}>
        <nav className={styles['bottomNav']}>
            <ul className={styles['bottomNav__list']}>
                {bottomNav.map((item) => (
                    <li className={styles['bottomNav__list-item']} key={item.path}>
                        <Link
                            to={item.path}
                            className={styles['bottomNav__list-item-link']}
                            activeClassName={styles['bottomNav__list-item-link--active']}
                            partiallyActive={item.path === '/' ? false : true}
                        >
                            <Icon className={styles['bottomNav__list-item-link__icon']} icon={getIcon(item.icon)} />
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
