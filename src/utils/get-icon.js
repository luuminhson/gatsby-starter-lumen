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
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
