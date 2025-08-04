import React, { Component } from 'react';
import { ResumeData } from '../resumeData';

interface FooterProps {
  resumeData: ResumeData;
}

export default class Footer extends Component<FooterProps> {
  render() {
    const { resumeData } = this.props;
    return (
      <footer className="s-footer">
        <div className="row">
            <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
                <ul className="s-footer__social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                      return(
                        <li><a href={item.url}><i className={"fab fa-" + item.name.toLowerCase()} aria-hidden="true"></i></a></li>
                      )
                    })
                  }
                </ul>
            </div>

            <div className="column large-7 medium-6 w-1000-stack ss-copyright">
                <span>Made with React by Chase Brown | Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
            </div>
        </div>

        <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"/></svg>
             </a>
        </div>
      </footer>
    );
  }
}