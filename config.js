'use strict';

module.exports = {
  url: 'https://luuminhson.com',
  pathPrefix: '/',
  title: 'Works & notes by Miso',
  subtitle: 'A digital product designer.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 10,
  googleAnalyticsId: 'UA-73379983-2',
  darkNavigation: false,
  menu: [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Articles',
      path: '/blog'
    },
    {
      label: 'Works',
      path: '/works'
    },
    {
      label: 'About',
      path: '/about'
    }
  ],
  bottomNav: [
    {
      label: 'Home',
      path: '/',
      icon: 'bottom_nav_home',
    },
    {
      label: 'Articles',
      path: '/blog',
      icon: 'bottom_nav_blog',
    },
    {
      label: 'Works',
      path: '/works',
      icon: 'bottom_nav_works',
    },
    {
      label: 'About',
      path: '/about',
      icon: 'bottom_nav_about',
    }
  ],
  author: {
    name: 'Miso',
    photo: '/media/miso-portrait.jpg',
    bio: 'A digital product designer.',
    contacts: {
      facebook: 'luuminhson',
      instagram: 'misopotato',
      twitter: 'luuminhson',
      linkedin: 'misoproductdesign',
      dribbble: 'miso',
      flickr: 'photos/114104945@N04',
      github: 'luuminhson',
      email: 'luuminhson@gmail.com',
      rss: '#'
    }
  },
  logo: {
    src: {
      dark: '/logo-dark.svg',
      light: '/logo-light.svg'
    },
    alt: 'Miso Product Design',
    text: 'Miso',
    type: 'img' // 'img' for image logo or whatever string for text logo
  }
};
