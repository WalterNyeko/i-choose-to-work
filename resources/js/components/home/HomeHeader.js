import React, { Component } from 'react'

export default class HomeHeader extends Component {
  render() {
    return (
      <>
        <div className="intro-banner" data-background-image="images/carpenter.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-headline">
                            <h3>
                                <strong>Hire experts or be hired for any job, any time.</strong>
                                <br/>
                                <span>Thousands of people use <strong className="color">Ichuzz2work</strong> to get things done.</span>
                            </h3>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="intro-banner-search-form margin-top-95">

                            <div className="intro-search-field">
                                <label for ="intro-keywords" className="field-title ripple-effect">What you need done?</label>
                                <input id="intro-keywords" type="text" placeholder="e.g. build me a website"/>
                            </div>
                            
                            <div className="intro-search-button">
                                <button className="button ripple-effect" onclick="">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <ul className="intro-stats margin-top-45 hide-under-992px">
                            <li>
                                <strong className="counter">3,543</strong>
                                <span>Tasks Posted</span>
                            </li>
                            <li>
                                <strong className="counter">1,232</strong>
                                <span>Taskers</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
      </>
    )
  }
}
