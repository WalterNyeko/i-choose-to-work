import React from 'react'

const ProfileContent = (props) => {
  return (
    <>
        <div className="container">
            <div className="row">
                
                <div className="col-xl-8 col-lg-8 content-right-offset">
                    
                    <div className="single-page-section">
                        <h3 className="margin-bottom-25">About Me</h3>
                        <p>{props.description ? props.description : 'Am a proffessional service provider with good working ethics'}</p>
                    </div>
                    <div class="boxed-list margin-bottom-60">
                        <div class="boxed-list-headline">
                            <h3><i class="icon-material-outline-thumb-up"></i> Services Provided</h3>
                        </div>
                        <ul class="boxed-list-ul">
                            {props.services.map((service, index) => 
                                <li>
                                    <div class="boxed-list-item">
                                        <div class="item-content">
                                            <h4 className="text-capitalize">{service.name}</h4>
                                            <div class="item-details margin-top-10">
                                                <div class="detail-item"><i class={service.pivot.isVerified === 1 ? "icon-material-outline-check" : "icon-line-awesome-times"} ></i> {service.pivot.isVerified === 1 ? 'Verified' : 'Not Verified'}</div>
                                            </div>
                                            <div class="item-description">
                                                <p>Billing: {service.pivot.billing_rate_per_hour ? `UGX ${service.pivot.billing_rate_per_hour}` : 'Open billing'} </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>

                </div>
                

                <div className="col-xl-4 col-lg-4">
                    <div className="sidebar-container">
                        
                       
                        <div className="profile-overview">
                            {/* <div className="overview-item"><strong>$35</strong><span>Hourly Rate</span></div> */}
                            <div className="overview-item"><strong>0</strong><span>Jobs Done</span></div>
                            <div className="overview-item"><strong>0</strong><span>Rehired</span></div>
                        </div>

                        
                        <a href="#small-dialog" className="apply-now-button popup-with-zoom-anim margin-bottom-50">Make an Offer <i className="icon-material-outline-arrow-right-alt"></i></a>
                        
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ProfileContent
