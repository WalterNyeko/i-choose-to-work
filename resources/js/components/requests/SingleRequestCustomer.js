import React from 'react'
import avataicon from "../../assets/avatar3.png";

const SingleRequestCustomer = (props) => {
  return (
    <>
        <div class="single-page-header" data-background-image="images/single-task.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="single-page-header-inner">
                            <div class="left-side">
                                <div class="header-image"><a href="#"><img src={avataicon} alt=""/></a></div>
                                <div class="header-details">
                                    <h3 className="text-capitalize">{props.title} Task</h3>
                                    <h5>About the Employer</h5>
                                    <ul>
                                        <li><i class="icon-material-outline-business"></i> {props.customer}</li>
                                        <li><i class="icon-material-outline-location-on"></i> {props.address ? props.address : 'Address'}</li>
                                        <li><div class="star-rating" data-rating="5.0"></div></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div class="right-side">
                                <div class="salary-box">
                                    <div class="salary-type">Project Budget</div>
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
