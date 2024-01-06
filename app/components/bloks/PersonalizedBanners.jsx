import {storyblokEditable, StoryblokComponent} from '@storyblok/react';

function getCookie(name) {
  if (typeof document !== 'undefined') {
    const value = ` ${document.cookie}`;
    const parts = value.split(`${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  return '';
}

const PersonalizedBanners = ({blok}) => {
  const userType = getCookie('user_type');
  const variant = blok.variants.filter((v) => v.user_type === userType);

  return (
    <div
      key={blok._uid}
      {...storyblokEditable(blok)}
      className="center-container"
    >
      {variant?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default PersonalizedBanners;
