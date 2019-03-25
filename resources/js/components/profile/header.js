import React from 'react'

const ProfileHeader = (props) => {
  return (
    <>
        <div className="single-page-header freelancer-header" data-background-image="images/single-freelancer.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-page-header-inner">
                            <div className="left-side">
                                <div className="header-image freelancer-avatar"><img src={props.pic ? props.pic : 'user.png'} alt=""/></div>
                                <div className="header-details">
                                    <h3 className="text-capitalize">{props.name ? props.name : 'Name'} </h3>
                                    <ul>
                                        {/* <li><div className="star-rating" data-rating="5.0"></div></li> */}
                                        <li><i className="icon-material-outline-location-on"></i> { props.address ? props.address : 'No Address' }</li>
                                        <li><div className="verified-badge-with-title">Verified</div></li>
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
