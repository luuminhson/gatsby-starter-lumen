import React from 'react';
import { Link } from 'gatsby';
import styles from './Button.module.scss';

const PureButton = ({ link, label, className }) => (
  <div className={className} >
    <Link className={styles['button']} to={link}>{label}</Link>
  </div>
);

const Button = (props) => (
  <PureButton {...props} />
);

export default Button;
