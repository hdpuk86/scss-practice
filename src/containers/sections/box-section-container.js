import React from 'react';
import BoxSection from '../../components/sections/box-section';

const BoxSectionContainer = (props) => {
  const { inline, children } = props;
  return (
    <BoxSection inline={inline}>
      {children}
    </BoxSection>
  );
};

export default BoxSectionContainer;
