import React from 'react';
import Header from '../..//containers/global/header-container.js';
import PageSection from '../../containers/sections/page-section-container';
import BoxSection from '../../containers/sections/box-section-container';
import TypographyExample from '../examples/typography';

const Sections = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
};

export default Sections;
