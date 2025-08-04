import React, { Component } from 'react';
import { ResumeData } from '../resumeData';

interface AboutProps {
  resumeData: ResumeData;
}

export default class About extends Component<AboutProps> {
  render() {
    const { resumeData } = this.props;
    return (
      <section id="about" className="s-about target-section">

        <div className="row">
            <div className="column large-3 tab-12">
                <img className="s-about__pic" src="images/ChaseHeadshot.jpg" alt="" />
            </div>
            <div className="column large-9 tab-12 s-about__content">
                <h3>About Me</h3>
                <p>{resumeData.aboutme}</p>

                <hr></hr>

                <div className="row s-about__content-bottom">
                    <div className="column w-1000-stack">
                        <h3>Contact Details</h3>
    
                        <p>
                        {resumeData.name} <br></br>
                        {resumeData.address} <br></br>
                        <a href={"mailto:" + resumeData.email}>{resumeData.email}</a>
                        </p>
                        
                    </div>
                    <div className="column w-1000-stack">
                        <a href="/files/resume.pdf" download="ChaseBrownResume.pdf" className="btn btn--download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}