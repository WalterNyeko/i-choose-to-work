import React from 'react'

const RequestContent = (props) => {
  return (
    <>
      <div className="container">
            <div className="row">
                
               
                <div className="col-xl-8 col-lg-8 content-right-offset">
                    
                    
                    <div className="single-page-section">
                        <h3 className="margin-bottom-25">Description</h3>
                        <p>{props.description}</p>
                    </div>

                    
                    {/* <div className="single-page-section">
                        <h3>Attachments</h3>
                        <div className="attachments-container">
                            <a href="#" className="attachment-box ripple-effect"><span>Project Brief</span><i>PDF</i></a>
                        </div>
                    </div> */}

                   
                    
                    <div className="clearfix"></div>
                    
                    
                    
                </div>
                

                
                <div className="col-xl-4 col-lg-4">
                    <div className="sidebar-container">

                        <div className="countdown green margin-bottom-35">{props.created_at}</div>
                        {/* <div></div> */}

                        <div className="sidebar-widget">
                            <div className="bidding-widget">
                                <div className="bidding-headline"><h3>Bid on this job!</h3></div>
                                <div className="bidding-inner">

                                    <button id="snackbar-place-bid" onClick={(id) => props.bid(id)} className="button ripple-effect move-on-hover full-width margin-top-30"><span>Place a Bid</span></button>

                                </div>
                                <div className="bidding-signup">Don't have an account? <a href="#sign-in-dialog" className="register-tab sign-in popup-with-zoom-anim">Sign Up</a></div>
                            </div>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Bookmark or Share</h3>

                            {/* <button className="bookmark-button margin-bottom-25">
                                <span className="bookmark-icon"></span>
                                <span className="bookmark-text">Bookmark</span>
                                <span className="bookmarked-text">Bookmarked</span>
                            </button> */}

                            {/* <div className="copy-url">
                                <input id="copy-url" type="text" value="jdjj" className="with-border"/>
                                <button className="copy-url-button ripple-effect" data-clipboard-target="#copy-url" title="Copy to Clipboard" data-tippy-placement="top"><i className="icon-material-outline-file-copy"></i></button>
                            </div> */}

                           
                            <div className="share-buttons margin-top-25">
                                <div className="share-buttons-trigger"><i className="icon-feather-share-2"></i></div>
                                <div className="share-buttons-content">
                                    <span>Interesting? <strong>Share It!</strong></span>
                                    <ul className="share-buttons-icons">
                                        <li><a href="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f"></i></a></li>
                                        <li><a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
                                        <li><a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g"></i></a></li>
                                        <li><a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in"></i></a></li>
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
