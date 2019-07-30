import React from 'react';
import { Link } from '../LinkWithPrev';
import styles from './Button.module.scss';

const PureButton = ({ link, rel, label, state, className, onDark }) => (
  <div className={className} >
    <Link className={[styles['button'], onDark && styles['onDark']].join(' ')} state={state} to={link} rel={rel}>{label}</Link>
  </div>
);

const Button = (props) => (
  <PureButton {...props} />
);

export default Button;
