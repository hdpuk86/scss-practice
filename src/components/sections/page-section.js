import React from 'react';
import classNames from 'classnames';

const PageSection = (props) => {
  const { colour, children } = props;
  const pageName = classNames({
    'page-section-colour_primary': colour === 'primary',
    'page-section-colour_secondary': colour === 'secondary',
    'page-section-colour_white': colour === 'white',
  });
  return (
    <section className={pageName} >
      {children}
    </section>
  );
};

export default PageSection;
