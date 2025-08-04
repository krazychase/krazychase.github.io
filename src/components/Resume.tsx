import React, { Component } from 'react';
import { ResumeData } from '../resumeData';

interface ResumeProps {
  resumeData: ResumeData;
}

export default class Resume extends Component<ResumeProps> {
  render() {
    const { resumeData } = this.props;
    return (
      <section id="resume" className="s-resume target-section">
        
        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
                <h3 className="section-header-allcaps">Career</h3>
            </div>
            <div className="column large-9 tab-12">
                {
                    resumeData.work && resumeData.work.map((item) => {
                        return(
                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">{item.CompanyName}</h4>
                                    <p className="resume-block__header-meta">
                                        <span>{item.specialization}</span> 
                                        <span className="resume-block__header-date">
                                            {item.MonthOfLeaving} {item.YearOfLeaving}
                                        </span>
                                    </p>
                                </div>

                                <p>
                                    {item.Achievements}
                                </p>

                            </div>
                         )
                    })
                }
            </div>
        </div>

        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
                <h3 className="section-header-allcaps">Education</h3>
            </div>
            <div className="column large-9 tab-12">
                {
                    resumeData.education && resumeData.education.map((item)=>{
                        return(
                            <div className="resume-block">

                                <div className="resume-block__header">
                                    <h4 className="h3">{item.UniversityName}</h4>
                                    <p className="resume-block__header-meta">
                                        <span>{item.specialization}</span> 
                                        <span className="resume-block__header-date">
                                            {item.MonthOfPassing} {item.YearOfPassing}
                                        </span>
                                    </p>
                                </div>

                                <p>
                                    {item.Achievements}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
                <h3 className="section-header-allcaps">Skills</h3>
            </div>
            <div className="column large-9 tab-12">
                <div className="resume-block">

                    <p>
                        {resumeData.skillsDescription}
                    </p>

                    <ul className="skill-bars-fat">
                        {
                            resumeData.skills && resumeData.skills.map((item) => {
                                return(
                                    <li>
                                    <div className={"progress percent" + item.level}></div>
                                    <strong>{item.skillname}</strong>
                                    </li>
                                )
                            })
                        }
                      </ul>
                  </div>
            </div>
        </div>
      </section>
    );
  }
}