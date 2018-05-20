import React, { Component } from 'react';
import Header from './containers/global/header-container.js';
import PageSection from './containers/sections/page-section-container';
import BoxSection from './containers/sections/box-section-container';
import TypographyExample from './components/examples/typography';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <section className="main-content">
          <PageSection colour="primary">
            <React.Fragment>
              <h1>.page-section-colour_primary</h1>
              <BoxSection>
                <TypographyExample />
              </BoxSection>
            </React.Fragment>
          </PageSection>
          <PageSection colour="white">
            <React.Fragment>
              <h1>.page-section-white</h1>
              <BoxSection>
                <TypographyExample />
              </BoxSection>
              <BoxSection>
                <TypographyExample />
              </BoxSection>
            </React.Fragment>
          </PageSection>
          <PageSection colour="secondary">
            <React.Fragment>
              <h1>.page-section-colour_secondary</h1>
              <section className="box-section-inline-container">
                <h1>.box-section-inline-container</h1>
                <BoxSection inline>
                  <TypographyExample />
                </BoxSection>
                <BoxSection inline>
                  <TypographyExample />
                </BoxSection>
            </section>
            </React.Fragment>
          </PageSection>
          <PageSection colour="white">
            <React.Fragment>
              <h1>.page-section-colour_white</h1>
              <section className="box-section-inline-container">
                <h1>.box-section-inline-container</h1>
                <BoxSection inline>
                  <TypographyExample />
                </BoxSection>
                <BoxSection inline>
                  <TypographyExample />
                </BoxSection>
                <BoxSection inline>
                  <TypographyExample />
                </BoxSection>
            </section>
            </React.Fragment>
          </PageSection>
        </section>
      </div>
    );
  }
}

export default App;
