import React, { Component } from 'react';
import classNames from 'classnames';

class PageSection extends Component {
  render() {
    const { colour, children } = this.props;
    const pageName = classNames({
      "page-section-colour_primary": colour === "primary",
      "page-section-colour_secondary": colour === "secondary",
      "page-section-colour_white": colour === "white",
    });
    return (
      <section className={pageName} >
        {children}
      </section>
    )
  }
}

export default PageSection;
