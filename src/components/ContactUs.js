import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" className="s-contact target-section">

        <div className="row s-contact__header">
            <div className="column large-12">
                <h3 className="section-header-allcaps">Say Hello</h3>
            </div>
        </div>

        <div className="row s-contact__content">
            <div className="column large-7 medium-12">

                <h4 className="huge-text">
                  {resumeData.contactUsMessage}
                </h4>
            </div>
            <div className="column large-4 medium-12">
                <div className="row contact-infos">
                    <div className="column large-12">
                        <a href={"mailto:" + resumeData.email} className="mailtoui btn btn--primary h-full-width">Let's Talk</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}