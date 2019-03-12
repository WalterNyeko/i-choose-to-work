import React from 'react'

const ProfileContent = (props) => {
  return (
    <>
        <div class="container">
            <div class="row">
                
                <div class="col-xl-8 col-lg-8 content-right-offset">
                    
                    <div class="single-page-section">
                        <h3 class="margin-bottom-25">About Me</h3>
                        <p>{props.description ? props.description : 'Description'}</p>
                    </div>

                </div>
                

                <div class="col-xl-4 col-lg-4">
                    <div class="sidebar-container">
                        
                       
                        <div class="profile-overview">
                            {/* <div class="overview-item"><strong>$35</strong><span>Hourly Rate</span></div> */}
                            <div class="overview-item"><strong>0</strong><span>Jobs Done</span></div>
                            <div class="overview-item"><strong>0</strong><span>Rehired</span></div>
                        </div>

                        
                        <a href="#small-dialog" class="apply-now-button popup-with-zoom-anim margin-bottom-50">Make an Offer <i class="icon-material-outline-arrow-right-alt"></i></a>
                        
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ProfileContent
