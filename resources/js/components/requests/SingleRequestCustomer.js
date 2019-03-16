import React from 'react'
import avataicon from "../../assets/avatar3.png";

const SingleRequestCustomer = (props) => {
  return (
    <>
        <div className="single-page-header" data-background-image="images/single-task.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-page-header-inner">
                            <div className="left-side">
                                <div className="header-image"><a href="#"><img src={avataicon} alt=""/></a></div>
                                <div className="header-details">
                                    <h3 className="text-capitalize">{props.title} Task</h3>
                                    <h5>About the Employer</h5>
                                    <ul>
                                        <li><i className="icon-material-outline-business"></i> {props.customer}</li>
                                        <li><i className="icon-material-outline-location-on"></i> {props.address ? props.address : 'Address'}</li>
                                        <li><div className="star-rating" data-rating="5.0"></div></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="right-side">
                                <div className="salary-box">
                                    <div className="salary-type">Project Budget</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleRequestCustomer
