import React from "react";
import DashboardLayout from "../layout/DashboardLayout";

const DashboardActiveBids = ({ handleInputChange, state, user}) => {
  return (
    <div>
      <DashboardLayout>
      <div>
        {/**Active content starts */}
        <div className="headline">
          <h3>
            <i className="icon-material-outline-gavel" /> Bids List
          </h3>
        </div>

        <div className="content">
          <ul className="dashboard-box-list">
            <li>
              {/*<!-- Job Listing -->*/}
              <div className="job-listing width-adjustment">
                {/*<!-- Job Listing Details -->*/}
                <div className="job-listing-details">
                  {/*<!-- Details -->*/}
                  <div className="job-listing-description">
                    <h3 className="job-listing-title">
                      <a href="#">Pet care</a>
                    </h3>
                  </div>
                </div>
              </div>

              {/*<!-- Task Details -->*/}
              <ul className="dashboard-task-info">
                <li>
                  <strong>UGX4000</strong>
                  <span>Rate</span>
                </li>
                <li>
                  <strong>9/04/2019</strong>
                  <span>Delivery Time</span>
                </li>
              </ul>

              {/*<!-- Buttons -->*/}
              <div className="buttons-to-right always-visible">
                <a
                  href="#small-dialog"
                  className="popup-with-zoom-anim button dark ripple-effect ico"
                  title="Edit Bid"
                  data-tippy-placement="top"
                >
                  <i className="icon-feather-edit" />
                </a>
                <a
                  href="#"
                  className="button red ripple-effect ico"
                  title="Cancel Bid"
                  data-tippy-placement="top"
                >
                  <i className="icon-feather-trash-2" />
                </a>
              </div>
            </li>
            <li>
              {/*<!-- Job Listing -->*/}
              <div className="job-listing width-adjustment">
                {/*<!-- Job Listing Details -->*/}
                <div className="job-listing-details">
                  {/*<!-- Details -->*/}
                  <div className="job-listing-description">
                    <h3 className="job-listing-title">
                      <a href="#">Build me a website in Angular JS</a>
                    </h3>
                  </div>
                </div>
              </div>

              {/*<!-- Task Details -->*/}
              <ul className="dashboard-task-info">
                <li>
                  <strong>$2,550</strong>
                  <span>Fixed price</span>
                </li>
                <li>
                  <strong>14 Days</strong>
                  <span>Delivery Time</span>
                </li>
              </ul>

              {/*<!-- Buttons -->*/}
              <div className="buttons-to-right always-visible">
                <a
                  href="#small-dialog"
                  className="popup-with-zoom-anim button dark ripple-effect ico"
                  title="Edit Bid"
                  data-tippy-placement="top"
                >
                  <i className="icon-feather-edit" />
                </a>
                <a
                  href="#"
                  className="button red ripple-effect ico"
                  title="Cancel Bid"
                  data-tippy-placement="top"
                >
                  <i className="icon-feather-trash-2" />
                </a>
              </div>
            </li>
          
          </ul>
        </div>
            {/**Active content ends */}

      </div>

      <div>
        <div>
          {/*       
<!-- Edit Bid Popup
 ================================================== -->*/}
          <div
            id="small-dialog"
            className="zoom-anim-dialog mfp-hide dialog-with-tabs"
          >
            {/*<!--Tabs -->*/}
            <div className="sign-in-form">
              <ul className="popup-tabs-nav">
                <li>
                  <a href="#tab">Edit Bid</a>
                </li>
              </ul>

              <div className="popup-tabs-container">
                {/*<!-- Tab -->*/}
                <div className="popup-tab-content" id="tab">
                  {/*<!-- Bidding -->*/}
                  <div className="bidding-widget">
                    {/*<!-- Headline -->*/}
                    <span className="bidding-detail">
                      Set your <strong>minimal hourly rate</strong>
                    </span>

                    {/*<!-- Price Slider -->*/}
                    <div className="bidding-value">
                      $<span id="biddingVal" />
                    </div>
                    <input
                      className="bidding-slider"
                      type="text"
                      value=""
                      data-slider-handle="custom"
                      data-slider-currency="$"
                      data-slider-min="10"
                      data-slider-max="60"
                      data-slider-value="40"
                      data-slider-step="1"
                      data-slider-tooltip="hide"
                      onChange={handleInputChange}
                    />

                    {/*<!-- Headline -->*/}
                    <span className="bidding-detail margin-top-30">
                      Set your <strong>delivery time</strong>
                    </span>

                    {/*<!-- Fields -->*/}
                    <div className="bidding-fields">
                      <div className="bidding-field">
                        {/*<!-- Quantity Buttons -->*/}
                        <div className="qtyButtons with-border">
                          <div className="qtyDec" />
                          <input 
                            type="text" 
                            name="qtyInput" 
                            value="2"
                            onChange={handleInputChange} />
                          <div className="qtyInc" />
                        </div>
                      </div>
                      <div className="bidding-field">
                        <select className="selectpicker default with-border" defaultValue="Days">
                          <option >Days</option>
                          <option>Hours</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/*<!-- Button -->*/}
                  <button
                    className="button full-width button-sliding-icon ripple-effect"
                    type="submit"
                  >
                    Save Changes{" "}
                    <i className="icon-material-outline-arrow-right-alt" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Edit Bid Popup / End -->*/}
        </div>
      </div>
      </DashboardLayout>
    </div>
  );
};

export default DashboardActiveBids;
