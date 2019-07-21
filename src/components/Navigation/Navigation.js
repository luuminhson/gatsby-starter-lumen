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
            unfixed: true
        };
    }

    headRoomUnfix = () => {
        this.setState({
            unfixed: true
        });
    }

    headRoomUnpin = () => {
        this.setState({
            unfixed: false
        });
    }

    render() {
        const {
            data,
            isIndex,
            isPost,
            onFeaturedImage,
            burgerClick,
            className
        } = this.props;

        const { unfixed } = this.state;

        const {
            menu,
            logo
        } = data.site.siteMetadata;

        const backButton = <Link to='/' className={styles['backButton']}>← &nbsp;Back</Link>;

        return (
            <Headroom
                upTolerance={8}
                downTolerance={8}
                onUnfix={this.headRoomUnfix}
                onUnpin={this.headRoomUnpin}
                className={[
                    styles['headroom'],
                    isPost && unfixed && styles['unfixed'],
                    isPost && onFeaturedImage && styles['on_featured_image'],
                ].join(' ')}
            >
                <div className={[
                    styles['navigation'],
                    isPost && styles['is_post'],
                    className
                ].join(' ')}>
                    <div className={styles['navigation__inner']}>
                        {isPost ? backButton : <Logo logo={logo} />}
                        <Menu menu={menu} burgerClick={burgerClick} isPost={isPost} onFeaturedImage={onFeaturedImage} unfixed={unfixed} />
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
                  src
                  alt
                  text
              }
            }
          }
        }
      `}
        render={(data) => <PureNavigation {...props} data={data} />}
    />
);

export default Navigation;