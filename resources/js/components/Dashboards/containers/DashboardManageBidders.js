import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import OurModal from '../commons/ReusableModal';
const renderModalContent = () =>{
  return (
    <div>
       <div className="welcome-text">
          <h3>Accept Offer From David</h3>
          <div className="bid-acceptance margin-top-15">$3200</div>
        </div>

        <form id="terms">
          <div className="radio">
            <input
              id="radio-1"
              name="radio"
              type="radio"
              required
            />
            <label htmlFor="radio-1">
              <span className="radio-label" /> I have read and agree to
              the Terms and Conditions
            </label>
          </div>
        </form>
    </div>
  )
}
const DashboardManageBidders = ({ handleSubmit, handleInputChange, state, user}) => {
  return (
    <div>
      <DashboardLayout>
      <div>
        <div>
          {/**Dashboard manage bidders content Start */}
          {/* <!-- Headline -->*/}
          <div className="headline">
            <h3>
              <i className="icon-material-outline-supervisor-account" /> 3 Bidders
            </h3>
            <div className="sort-by">
              <select className="selectpicker hide-tick">
                <option>Highest First</option>
                <option>Lowest First</option>
                <option>Fastest First</option>
              </select>
            </div>
          </div>

          <div className="content">
            <ul className="dashboard-box-list">
              <li>
                {/*<!-- Overview -->*/}
                <div className="freelancer-overview manage-candidates">
                  <div className="freelancer-overview-inner">
                    {/*<!-- Avatar -->*/}
                    <div className="freelancer-avatar">
                      <div className="verified-badge" />
                      <a href="#">
                        <img src="images/user-avatar-big-02.jpg" alt="" />
                      </a>
                    </div>

                    {/*<!-- Name -->*/}
                    <div className="freelancer-name">
                      <h4>
                        <a href="#">
                          Mugula Abbey
                        </a>
                      </h4>

                      {/*<!-- Details -->*/}
                      <span className="freelancer-detail-item">
                        <a href="#">
                          <i className="icon-feather-mail" />
                          <span
                            className="__cf_email__"
                            data-cfemail="1c787d6a75785c79647d716c7079327f7371"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </span>

                      {/* <!-- Rating -->*/}
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating="5.0" />
                      </div>

                      {/* <!-- Bid Details -->*/}
                      <ul className="dashboard-task-info bid-info">
                        <li>
                          <strong>60000</strong>
                          <span>Fixed Price</span>
                        </li>
                        <li>
                          <strong>9/04/2019</strong>
                          <span>Delivery day</span>
                        </li>
                      </ul>

                      {/* <!-- Buttons -->*/}
                      <br/>
                      <OurModal 
                        buttonText="Accept Offer"
                        modalTitle="Accept Offer"
                        submitText="Accept"
                        modalButtonclassName="primary text-dark"
                        handleSubmit={handleSubmit}
                        modalBody={renderModalContent()} />
                        
                    </div>
                  </div>
                </div>
              </li>
             
                
            </ul>
          </div>
          {/**Dashboard manage bidders content end */}
        </div>
        <div>
          {/*   <!-- Bid Acceptance Popup / End -->*/}

          {/*  <!-- Send Direct Message Popup
================================================== -->*/}
          <div
            id="small-dialog-2"
            className="zoom-anim-dialog mfp-hide dialog-with-tabs"
          >
            {/*  <!--Tabs -->*/}
            <div className="sign-in-form">
              <ul className="popup-tabs-nav">
                <li>
                  <a href="#tab2">Send Message</a>
                </li>
              </ul>

              <div className="popup-tabs-container">
                {/* <!-- Tab -->*/}
                <div className="popup-tab-content" id="tab2">
                  {/*<!-- Welcome Text -->*/}
                  <div className="welcome-text">
                    <h3>Direct Message To David</h3>
                  </div>

                  {/*  <!-- Form -->*/}
                  <form method="post" id="send-pm">
                    <textarea
                      name="textarea"
                      cols="10"
                      placeholder="Message"
                      className="with-border"
                      required
                    />
                  </form>

                  {/* <!-- Button -->*/}
                  <button
                    className="button full-width button-sliding-icon ripple-effect"
                    type="submit"
                    form="send-pm"
                  >
                    Send <i className="icon-material-outline-arrow-right-alt" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  <!-- Send Direct Message Popup / End -->*/}
        </div>
      </div>
      </DashboardLayout>
    </div>
  );
};

export default DashboardManageBidders;
