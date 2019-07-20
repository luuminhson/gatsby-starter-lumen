import React from 'react';
import { Link } from 'gatsby';
import styles from './Button.module.scss';

const PureButton = ({ link, label, className, onDark }) => (
  <div className={className} >
    <Link className={[styles['button'], onDark && styles['onDark']].join(' ')} to={link}>{label}</Link>
  </div>
);

const Button = (props) => (
  <PureButton {...props} />
);

export default Button;
