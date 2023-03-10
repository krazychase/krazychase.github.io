import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials" className="s-testimonials target-section">
        <div className="s-testimonials__bg"></div>
        <div className="row s-testimonials__header">
            <div className="column large-12">
                <h3>Hear What My Clients Says</h3>
            </div>
        </div>
        <div className="row s-testimonials__content">
            <div className="column">
                <div className="swiper-container testimonial-slider">
                    <div className="swiper-wrapper">
                        {
                          resumeData.testimonials && resumeData.testimonials.map((item)=>{
                            return(
                              <div className="testimonial-slider__slide swiper-slide">
                                <div className="testimonial-slider__author">
                                    <img src="images/avatars/user-02.jpg" alt="" className="testimonial-slider__avatar"></img>
                                    <cite className="testimonial-slider__cite">
                                        <strong>{item.name}</strong>
                                        <span>{item.title}</span>
                                    </cite>
                                </div>
                                <p>
                                  {item.description}
                                </p>
                            </div>
                            )
                          })
                        }

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}