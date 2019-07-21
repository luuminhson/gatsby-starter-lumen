// @flow
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'facebook':
      href = `https://www.facebook.com/${contact}`;
      break;
    case 'twitter':
      href = `https://www.twitter.com/${contact}`;
      break;
    case 'instagram':
      href = `https://www.instagram.com/${contact}`;
      break;
    case 'dribbble':
      href = `https://dribbble.com/${contact}`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/in/${contact}`;
      break;
    case 'flickr':
      href = `https://www.flickr.com/${contact}`;
      break;
    case 'rss':
      href = `${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
