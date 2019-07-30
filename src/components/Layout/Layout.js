// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import Navigation from '../Navigation';
import BottomNavigation from '../BottomNavigation';
import Sidebar from '../Sidebar';
import styles from './Layout.module.scss';

class PureLayout extends React.Component {
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
      data,
      style,
      children,
      title,
      description,
      isIndex,
      isPost,
      isWork,
      dark,
      hasFeaturedImage,
      from
    } = this.props;

    const { sidebar } = this.state;

    const { bottomNav, subtitle } = data.site.siteMetadata;

    return (
      <div>
        <Navigation burgerClick={this.toggleSidebar} isIndex={isIndex} isPost={isPost} isWork={isWork} onFeaturedImage={hasFeaturedImage} dark={dark} from={from} />
        <BottomNavigation className={styles['bottomNav']} bottomNav={bottomNav} />
        <div
          className={[
            styles['layout'],
            sidebar === true && styles['noScroll'],
            style === 'post' && styles['postStyle'],
            style === 'work' && styles['workStyle'],
            isIndex && styles['is_index'],
            hasFeaturedImage && styles['has_featured_image']
          ].join(' ')}
        >
          <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:site_name" content={title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content={dark ? "black" : "default"} />
            <meta name="apple-mobile-web-app-title" content="Miso" />
          </Helmet>
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
          {isIndex && <div className={styles['subTitle']}>{subtitle}</div>}
          {children}
        </div>
      </div>
    );
  }
}

export const Layout = (props) => (
  <StaticQuery
      query={graphql`
      query BottomNavigationQuery {
        site {
          siteMetadata {
            subtitle
            bottomNav {
              label
              path
              icon
            }
          }
        }
      }
    `}
      render={(data) => <PureLayout {...props} data={data} />}
  />
);

export default Layout;
