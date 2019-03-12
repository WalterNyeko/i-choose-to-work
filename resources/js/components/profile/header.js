import React from 'react'

const ProfileHeader = (props) => {
  return (
    <>
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
