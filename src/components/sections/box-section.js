import React, { Component } from 'react';
import classNames from 'classnames';

class BoxSection extends Component {
  render() {
    const { inline, children } = this.props;
    const boxClass = classNames({
      "box-section": !inline,
      "box-section-inline": inline,
    });
    return (
      <section className={boxClass} >
        {children}
      </section>
    )
  }
}

export default BoxSection;
