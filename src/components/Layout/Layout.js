// @flow
import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../Navigation';
import Sidebar from '../Sidebar';
import styles from './Layout.module.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: false
    };
  }

  toggleSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar });
    document.body.classList.toggle('noScroll');
  };

  componentDidMount() {
    document.body.className = document.body.className.replace('noScroll', '');
  }

  render() {
    const {
      style,
      children,
      title,
      description,
      isIndex
    } = this.props;

    const { sidebar } = this.state;

    return (
      <div
        className={[
          styles['layout'],
          sidebar === true && styles['noScroll'],
          style === 'post' && styles['postStyle']
        ].join(' ')}
      >
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
        </Helmet>
        <Navigation burgerClick={this.toggleSidebar} isIndex={isIndex} />
        <div
          className={[
            styles['mask'],
            sidebar === true ? styles['on'] : null
          ].join(' ')}
          onClick={this.toggleSidebar}
        />
        <div
          className={[
            styles['sidebar__wrapper'],
            sidebar === true ? styles['on'] : null
          ].join(' ')}
        >
          <div className={styles['sidebar__header']}>
            <div className={styles['title']}>
              <span className={styles['mobile']}>Menu</span>
              <span className={styles['desktop']}>More Information</span>
            </div>
            <div className={styles['icon']} onClick={this.toggleSidebar}>
              <span />
              <span />
            </div>
          </div>
          <Sidebar sidebar={sidebar} />
        </div>
        {children}
      </div>
    );
  }
}

export default Layout;
