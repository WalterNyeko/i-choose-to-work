import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import OurModal from '../commons/ReusableModal';
const renderModalContent = (name, price) =>{
  return (
    <div>
       <div className="welcome-text">
          <h3>Accept Offer From {name}</h3>
          <div className="bid-acceptance margin-top-15">{price}</div>
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
  {
      state.bidders && state.bidders.map(bidder => console.log(bidder))
  }
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

          {state.bidders && state.bidders.map((bidder, index) => (
            <div className="content" key={index}>
            <ul className="dashboard-box-list">
              <li>
                {/*<!-- Overview -->*/}
                <div className="freelancer-overview manage-candidates">
                  <div className="freelancer-overview-inner">
                    {/*<!-- Avatar -->*/}
                    <div className="freelancer-avatar">
                      <div className="verified-badge" />
                      <div className="user-avatar status-online"><img src="user.png" alt=""/></div>
                    </div>

                    {/*<!-- Name -->*/}
                    <div className="freelancer-name">
                      <h4>
                        <a href="#">
                          {
                              bidder.provider.name
                          }
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
                            [{bidder.provider.email}]
                          </span>
                        </a>
                      </span>

                      {/* <!-- Rating --> */}
                      {/* <div className="freelancer-rating">
                        <div className="star-rating" data-rating="5.0" />
                      </div> */}

                      {/* <!-- Bid Details -->*/}
                      <ul className="dashboard-task-info bid-info">
                        <li>
                          < strong > {
                              bidder.estimated_cost ? bidder.estimated_cost: `Not Specified`} </strong>
                          <span>Fixed Price</span>
                        </li>
                        <li>
                          < strong > {
                              bidder.delivery_date ? bidder.delivery_date: ` Not specified` }</strong>
                          <span>Delivery day</span>
                        </li>
                      </ul>

                      {/* <!-- Buttons -->*/}
                      <br/>
                      {bidder.is_offer_accepted? (
                        <span style={{ color: 'green' }}>Offer Accepted</span>
                      ): (
                        < OurModal
                        buttonText = "Accept Offer"
                        modalTitle = "Accept Offer"
                        submitText = "Accept"
                        modalButtonclassName = "primary text-dark"
                        handleSubmit = {
                            handleSubmit
                        }
                        id = {
                            bidder.id
                        }
                        modalBody = {
                            renderModalContent(bidder.provider.name, bidder.estimated_cost ? bidder.estimated_cost : `Not Speciied`)
                        }
                        />
                      )}      
                    </div>
                  </div>
                </div>
              </li>
             
                
            </ul>
          </div>
          
          ))}
        </div>
        <div>
          {/*   <!-- Bid Acceptance Popup / End -->*/}

          {/*  <!-- Send Direct Message Popup
= -->*/}
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
