import React from 'react'

const ProfileHeader = (props) => {
  return (
    <>
<<<<<<< HEAD
        <div className="single-page-header freelancer-header" data-background-image="images/single-freelancer.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-page-header-inner">
                            <div className="left-side">
                                <div className="header-image freelancer-avatar"><img src="images/user-avatar-big-02.jpg" alt=""/></div>
                                <div className="header-details">
                                    <h3>{props.name ? props.name : 'Name'} </h3>
                                    <ul>
                                        {/* <li><div className="star-rating" data-rating="5.0"></div></li> */}
                                        <li><i className="icon-material-outline-location-on"></i> { props.address ? props.address : 'No Address' }</li>
                                        <li><div className="verified-badge-with-title">Verified</div></li>
=======
        <div class="single-page-header freelancer-header" data-background-image="images/single-freelancer.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="single-page-header-inner">
                            <div class="left-side">
                                <div class="header-image freelancer-avatar"><img src="images/user-avatar-big-02.jpg" alt=""/></div>
                                <div class="header-details">
                                    <h3>{props.name ? props.name : 'Name'} </h3>
                                    <ul>
                                        {/* <li><div class="star-rating" data-rating="5.0"></div></li> */}
                                        <li><i class="icon-material-outline-location-on"></i> { props.address ? props.address : 'No Address' }</li>
                                        <li><div class="verified-badge-with-title">Verified</div></li>
>>>>>>> e5e9e2d46eb73ddaef82cf2d5d3c768bdeb01ad5
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfileHeader
