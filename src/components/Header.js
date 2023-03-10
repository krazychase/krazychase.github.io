import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
        
            <header className="s-header">
                <div className="row s-header__nav-wrap">
                    <nav className="s-header__nav">
                        <ul>
                            <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                            <li><a className="smoothscroll" href="#contact">Say Hello</a></li>
                        </ul>
                    </nav>
                </div>
            
                <a className="s-header__menu-toggle" href="#0" title="Menu">
                    <span className="s-header__menu-icon"></span>
                </a>
            </header>

            <section id="hero" className="s-hero target-section">
                <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>
                <div className="row s-hero__content">
                    <div className="column">
                        <div className="s-hero__content-about">
                            <h1>{resumeData.name}.</h1>
                            <h3>{resumeData.role} </h3>
                            <div className="s-hero__content-social">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                                    return(
                                        <a href={item.url}><i className={"fab fa-" + item.name.toLowerCase()} aria-hidden="true"></i></a>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="s-hero__scroll">
                    <a href="#about" className="s-hero__scroll-link smoothscroll">
                        <span className="scroll-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path></svg>
                        </span>
                        <span className="scroll-text">Scroll Down</span>
                    </a>
                </div>

            </section>

            </React.Fragment>
        );
    }
}