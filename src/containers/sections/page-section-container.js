import React from 'react';
import PageSection from '../../components/sections/page-section';

const PageSectionContainer = (props) => {
  const { colour, children } = props;
  return (
    <PageSection colour={colour}>
      {children}
    </PageSection>
  );
};

export default PageSectionContainer;
