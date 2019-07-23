// @flow
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'facebook':
      icon = ICONS.FACEBOOK;
      break;
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'instagram':
      icon = ICONS.INSTAGRAM;
      break;
    case 'dribbble':
      icon = ICONS.DRIBBBLE;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    case 'flickr':
      icon = ICONS.FLICKR;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'rss':
      icon = ICONS.RSS;
      break;
    case 'bottom_nav_home':
      icon = ICONS.BOTNAV_HOME;
      break;
    case 'bottom_nav_blog':
      icon = ICONS.BOTNAV_BLOG;
      break;
    case 'bottom_nav_works':
      icon = ICONS.BOTNAV_WORKS;
      break;
    case 'bottom_nav_about':
      icon = ICONS.BOTNAV_ABOUT;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
