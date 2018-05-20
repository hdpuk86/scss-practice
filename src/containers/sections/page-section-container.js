import React, { Component } from 'react';
import PageSection from '../../components/sections/page-section.js';

class PageSectionContainer extends Component {
  render() {
    const { colour, children } = this.props;
    return (
      <PageSection colour={colour}>
        {children}
      </PageSection>
    )
  }
}

export default PageSectionContainer;
