// @flow
import React from 'react';
import styles from './Roles.module.scss';

type Props = {
    roles: string[],
    className: string
};

const Roles = ({ roles, className }: Props) => (
    <div className={[className, styles['roles']].join(' ')}>
        <ul className={styles['roles__list']}>
            {roles && roles.map((role, i) => (
                <li className={styles['roles__list-item']} key={i}>
                    <span>{role}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default Roles;
