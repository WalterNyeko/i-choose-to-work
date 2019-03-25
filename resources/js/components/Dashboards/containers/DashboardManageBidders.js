import React from "react";
import DashboardLayout from "../layout/DashboardLayout";

const DashboardManageBidders = ({ handleInputChange, state, user}) => {
  return (
    <div>
      <DashboardLayout>
      <div>
        <div>
          {/**Dashboard manage bidders content Start */}
          {/* <!-- Headline -->*/}
          <div class="headline">
            <h3>
              <i class="icon-material-outline-supervisor-account" /> 3 Bidders
            </h3>
            <div class="sort-by">
              <select class="selectpicker hide-tick">
                <option>Highest First</option>
                <option>Lowest First</option>
                <option>Fastest First</option>
              </select>
            </div>
          </div>

          <div class="content">
            <ul class="dashboard-box-list">
              <li>
                {/*<!-- Overview -->*/}
                <div class="freelancer-overview manage-candidates">
                  <div class="freelancer-overview-inner">
                    {/*<!-- Avatar -->*/}
                    <div class="freelancer-avatar">
                      <div class="verified-badge" />
                      <a href="#">
                        <img src="images/user-avatar-big-02.jpg" alt="" />
                      </a>
                    </div>

                    {/*<!-- Name -->*/}
                    <div class="freelancer-name">
                      <h4>
                        <a href="#">
                          Mugula Abbey
                        </a>
                      </h4>

                      {/*<!-- Details -->*/}
                      <span class="freelancer-detail-item">
                        <a href="#">
                          <i class="icon-feather-mail" />
                          <span
                            class="__cf_email__"
                            data-cfemail="1c787d6a75785c79647d716c7079327f7371"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </span>

                      {/* <!-- Rating -->*/}
                      <div class="freelancer-rating">
                        <div class="star-rating" data-rating="5.0" />
                      </div>

                      {/* <!-- Bid Details -->*/}
                      <ul class="dashboard-task-info bid-info">
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
                      <div class="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                        <a
                          href="#small-dialog-1"
                          class="popup-with-zoom-anim button ripple-effect"
                        >
                          <i class="icon-material-outline-check" />
                          Accept Offer
                        </a>
                        <a
                          href="#small-dialog-2"
                          class="popup-with-zoom-anim button dark ripple-effect"
                        >
                          <i class="icon-feather-mail" /> Send Message
                        </a>
                        <a
                          href="#"
                          class="button gray ripple-effect ico"
                          title="Remove Bid"
                          data-tippy-placement="top"
                        >
                          <i class="icon-feather-trash-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
             
                
            </ul>
          </div>
          {/**Dashboard manage bidders content end */}
        </div>
        <div>
          <div>
            {/* <!-- Bid Acceptance Popup
================================================== -->*/}
            <div
              id="small-dialog-1"
              class="zoom-anim-dialog mfp-hide dialog-with-tabs"
            >
              {/* <!--Tabs -->*/}
              <div class="sign-in-form">
                <ul class="popup-tabs-nav">
                  <li>
                    <a href="#tab1">Accept Offer</a>
                  </li>
                </ul>

                <div class="popup-tabs-container">
                  {/*  <!-- Tab -->*/}
                  <div class="popup-tab-content" id="tab">
                    {/*<!-- Welcome Text -->*/}
                    <div class="welcome-text">
                      <h3>Accept Offer From David</h3>
                      <div class="bid-acceptance margin-top-15">$3200</div>
                    </div>

                    <form id="terms">
                      <div class="radio">
                        <input
                          id="radio-1"
                          name="radio"
                          type="radio"
                          required
                        />
                        <label for="radio-1">
                          <span class="radio-label" /> I have read and agree to
                          the Terms and Conditions
                        </label>
                      </div>
                    </form>

                    {/* <!-- Button -->*/}
                    <button
                      class="margin-top-15 button full-width button-sliding-icon ripple-effect"
                      type="submit"
                      form="terms"
                    >
                      Accept <i class="icon-material-outline-arrow-right-alt" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*   <!-- Bid Acceptance Popup / End -->*/}

          {/*  <!-- Send Direct Message Popup
================================================== -->*/}
          <div
            id="small-dialog-2"
            class="zoom-anim-dialog mfp-hide dialog-with-tabs"
          >
            {/*  <!--Tabs -->*/}
            <div class="sign-in-form">
              <ul class="popup-tabs-nav">
                <li>
                  <a href="#tab2">Send Message</a>
                </li>
              </ul>

              <div class="popup-tabs-container">
                {/* <!-- Tab -->*/}
                <div class="popup-tab-content" id="tab2">
                  {/*<!-- Welcome Text -->*/}
                  <div class="welcome-text">
                    <h3>Direct Message To David</h3>
                  </div>

                  {/*  <!-- Form -->*/}
                  <form method="post" id="send-pm">
                    <textarea
                      name="textarea"
                      cols="10"
                      placeholder="Message"
                      class="with-border"
                      required
                    />
                  </form>

                  {/* <!-- Button -->*/}
                  <button
                    class="button full-width button-sliding-icon ripple-effect"
                    type="submit"
                    form="send-pm"
                  >
                    Send <i class="icon-material-outline-arrow-right-alt" />
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
