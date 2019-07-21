// @flow
import React from 'react';
import Headroom from 'react-headroom'
import { graphql, StaticQuery, Link } from 'gatsby';
import Logo from './Logo';
import Menu from './Menu';
import styles from './Navigation.module.scss';

class PureNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            unfixed: true,
            pinned: false,
            unpinned: false
        };
    }

    headRoomUnfix = () => {
        this.setState({
            unfixed: true
        });
    }

    headRoomUnpin = () => {
        this.setState({
            unfixed: false,
            pinned: false,
            unpinned: true
        });
    }

    headRoomPin = () => {
        this.setState({
            unfixed: false,
            unpinned: false,
            pinned: true
        });
    }

    render() {
        const {
            data,
            isIndex,
            isPost,
            onFeaturedImage,
            burgerClick,
            dark,
            className
        } = this.props;

        const { unfixed, pinned, unpinned } = this.state;

        const {
            menu,
            logo
        } = data.site.siteMetadata;

        const backButton = <Link to='/' className={styles['backButton']}>←</Link>;

        return (
            <Headroom
                upTolerance={8}
                downTolerance={8}
                onUnfix={this.headRoomUnfix}
                onUnpin={this.headRoomUnpin}
                onPin={this.headRoomPin}
                className={[
                    styles['headroom'],
                    unpinned && styles['unpinned'],
                    pinned && styles['pinned'],
                    isPost && unfixed && styles['unfixed'],
                    isPost && onFeaturedImage && styles['on_featured_image'],
                ].join(' ')}
            >
                <div className={[
                    styles['navigation'],
                    isPost && styles['is_post'],
                    dark && styles['dark'],
                    className
                ].join(' ')}>
                    <div className={styles['navigation__inner']}>
                        {isPost ? backButton : <Logo type="img" logo={logo} dark={dark} />}
                        <Menu menu={menu} burgerClick={burgerClick} isPost={isPost} onFeaturedImage={onFeaturedImage} unfixed={unfixed} dark={dark} />
                    </div>
                </div>
            </Headroom>
        );
    }
}

export const Navigation = (props) => (
    <StaticQuery
        query={graphql`
        query NavigationQuery {
          site {
            siteMetadata {
              title
              subtitle
              copyright
              menu {
                label
                path
              }
              logo {
                  src {
                    dark
                    light
                  }
                  alt
                  text
              }
              darkNavigation
            }
          }
        }
      `}
        render={(data) => <PureNavigation {...props} data={data} />}
    />
);

export default Navigation;