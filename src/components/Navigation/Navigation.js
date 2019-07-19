// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { graphql, StaticQuery, Link } from 'gatsby';
import Logo from './Logo';
import Menu from './Menu';
import styles from './Navigation.module.scss';
import { useSiteMetadata } from '../../hooks';

class PureNavigation extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        navTransform: false,
        lastScrollPos: 0,
        scrollDirection: ''
      };
    }
  
    // Detect scroll offset top to animate Navigation Bar
    getOffset = (element) => {
      const bounding = element.getBoundingClientRect();
      return {
        top: bounding.top + document.body.scrollTop,
        left: bounding.left + document.body.scrollLeft
      };
    }
  
    handleScroll = () => {
      // Add className to Navigation Bar when it meets the stopper element
      const stopperElement = ReactDOM.findDOMNode(this.refs.navStopper);
      const offset = this.getOffset(stopperElement);
      const windowsScrollTop = window.pageYOffset;
      if (windowsScrollTop >= offset.top) {
        this.setState({ navTransform: true });
      } else {
        this.setState({ navTransform: false });
      }
  
      // Update state to indicate scroll direction
      if (this.state.lastScrollPos > windowsScrollTop) {
        this.setState({
          scrollDirection: 'up',
          lastScrollPos: windowsScrollTop
        });
      } else if (this.state.lastScrollPos < windowsScrollTop) {
        this.setState({
          scrollDirection: 'down',
          lastScrollPos: windowsScrollTop
        });
      }
    }
  
    // Trigger the scroll handle event
    componentDidMount() {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', this.handleScroll);
      }
    }
  
    componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  
    render() {
      const {
        data,
        isIndex,
        burgerClick
      } = this.props;
  
      const {
        navTransform,
        scrollDirection
      } = this.state;
  
      const {
        menu,
        logo
      } = data.site.siteMetadata;

    //   const { author, copyright, menu, logo } = useSiteMetadata();
  
      const backButton = <Link to='/' className={styles['backButton']}>← &nbsp;Back</Link>;
  
      return (
        <div className={[
          styles['navigation'],
          navTransform ? styles['transformed'] : null,
          scrollDirection === 'up' ? styles['show'] : null,
          scrollDirection === 'down' ? styles['hide'] : null,
        ].join(' ')}>
          <div className={styles['navStopper']} id='navStopper' ref='navStopper' />
          <div className={styles['navigation__inner']}>
            {isIndex ? <Logo logo={logo} /> : backButton}
            <Menu menu={menu} burgerClick={burgerClick} />
          </div>
        </div>
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
      render={(data) => <PureNavigation {...props} data={data}/>}
    />
  );
  
  export default Navigation;