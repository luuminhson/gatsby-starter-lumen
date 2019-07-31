import React from 'react';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import styles from './LinkWithPrev.module.scss';

const LinkWithPrevUrl = ({ children, className, state, ...rest }) => (
  <Location>
    {({ location }) => (
                      //make sure user's state is not overwritten
      <Link className={[styles['customLink'], className].join(' ')} {...rest} state={{ prevUrl: location.pathname, ...state}}>
        { children }
      </Link>
    )}
  </Location>
)

export { LinkWithPrevUrl as Link };