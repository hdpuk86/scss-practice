import React, { Component } from 'react';
import BoxSection from '../../components/sections/box-section.js';

class BoxSectionContainer extends Component {
  render() {
    const { inline, children } = this.props;
    return (
      <BoxSection inline={inline}>
        {children}
      </BoxSection>
    )
  }
}

export default BoxSectionContainer;
