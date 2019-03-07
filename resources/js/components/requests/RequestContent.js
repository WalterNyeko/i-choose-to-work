import React from 'react'

const RequestContent = (props) => {
  return (
    <>
      <div class="container">
            <div class="row">
                
               
                <div class="col-xl-8 col-lg-8 content-right-offset">
                    
                    
                    <div class="single-page-section">
                        <h3 class="margin-bottom-25">Description</h3>
                        <p>{props.description}</p>
                    </div>

                    
                    {/* <div class="single-page-section">
                        <h3>Attachments</h3>
                        <div class="attachments-container">
                            <a href="#" class="attachment-box ripple-effect"><span>Project Brief</span><i>PDF</i></a>
                        </div>
                    </div> */}

                   
                    
                    <div class="clearfix"></div>
                    
                    
                    
                </div>
                

                
                <div class="col-xl-4 col-lg-4">
                    <div class="sidebar-container">

                        <div class="countdown green margin-bottom-35">{props.created_at}</div>
                        {/* <div></div> */}

                        <div class="sidebar-widget">
                            <div class="bidding-widget">
                                <div class="bidding-headline"><h3>Bid on this job!</h3></div>
                                <div class="bidding-inner">

                                    <button id="snackbar-place-bid" onClick={(id) => props.bid(id)} class="button ripple-effect move-on-hover full-width margin-top-30"><span>Place a Bid</span></button>

                                </div>
                                <div class="bidding-signup">Don't have an account? <a href="#sign-in-dialog" class="register-tab sign-in popup-with-zoom-anim">Sign Up</a></div>
                            </div>
                        </div>

                        <div class="sidebar-widget">
                            <h3>Bookmark or Share</h3>

                            {/* <button class="bookmark-button margin-bottom-25">
                                <span class="bookmark-icon"></span>
                                <span class="bookmark-text">Bookmark</span>
                                <span class="bookmarked-text">Bookmarked</span>
                            </button> */}

                            {/* <div class="copy-url">
                                <input id="copy-url" type="text" value="jdjj" class="with-border"/>
                                <button class="copy-url-button ripple-effect" data-clipboard-target="#copy-url" title="Copy to Clipboard" data-tippy-placement="top"><i class="icon-material-outline-file-copy"></i></button>
                            </div> */}

                           
                            <div class="share-buttons margin-top-25">
                                <div class="share-buttons-trigger"><i class="icon-feather-share-2"></i></div>
                                <div class="share-buttons-content">
                                    <span>Interesting? <strong>Share It!</strong></span>
                                    <ul class="share-buttons-icons">
                                        <li><a href="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i class="icon-brand-facebook-f"></i></a></li>
                                        <li><a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i class="icon-brand-twitter"></i></a></li>
                                        <li><a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i class="icon-brand-google-plus-g"></i></a></li>
                                        <li><a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i class="icon-brand-linkedin-in"></i></a></li>
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

export default RequestContent
