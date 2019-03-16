import React from 'react'

const ProfileContent = (props) => {
  return (
    <>
        <div className="container">
            <div className="row">
                
                <div className="col-xl-8 col-lg-8 content-right-offset">
                    
                    <div className="single-page-section">
                        <h3 className="margin-bottom-25">About Me</h3>
                        <p>{props.description ? props.description : 'Description'}</p>
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
