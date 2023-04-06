import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" className="s-portfolio target-section">

        <div className="row s-portfolio__header">
            <div className="column large-12">
                <h3>A Few Of My Creations</h3>
            </div>
        </div>

        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
            {
                resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
                    return(
                        <div className="column folio-item">
                            <a href={"#modal-0" + (index + 1)} className="folio-item__thumb">
                                <img src={item.imgurl}
                                    srcSet={item.imgurl + " 1x, " +
                                    item.imgurl + " 2x"} alt=""></img>
                            </a>
                        </div>
                    )
                })
            }
        </div>

        {
            resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
                return(
                    <div id={"modal-0" + (index + 1)} hidden>
                        <div className="modal-popup">
                            <img src={item.imgurl} alt="" />
                
                            <div className="modal-popup__desc">
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                                <ul className="modal-popup__cat">
                                    <li>{item.catagory}</li>
                                </ul>
                            </div>

                            <a href={item.link} className="modal-popup__details">Project link</a>
                        </div>
                    </div>
                )
            })
        }
      </section>
      );
  }
}