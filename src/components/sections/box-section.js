import React from 'react';
import classNames from 'classnames';

const BoxSection = (props) => {
  const { inline, children } = props;
  const boxClass = classNames({
    'box-section': !inline,
    'box-section-inline': inline,
  });
  return (
    <section className={boxClass} >
      {children}
    </section>
  );
};


export default BoxSection;
