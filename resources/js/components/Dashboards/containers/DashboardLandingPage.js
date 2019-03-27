import React from "react";
import DashboardLayout from "../layout/DashboardLayout";

const DashboardLandingPage = () => {
  return (
    <div>
      <DashboardLayout>
        <div>
          <div>
            {/*<!-- Fun Facts Container  Start-->*/}
            <div className="fun-facts-container">
              <div className="fun-fact" data-fun-fact-color="#36bd78">
                <div className="fun-fact-text">
                  <span>Task Bids Won</span>
                  <h4>22</h4>
                </div>
                <div className="fun-fact-icon">
                  <i className="icon-material-outline-gavel" />
                </div>
              </div>
              <div className="fun-fact" data-fun-fact-color="#b81b7f">
                <div className="fun-fact-text">
                  <span>Jobs Applied</span>
                  <h4>4</h4>
                </div>
                <div className="fun-fact-icon">
                  <i className="icon-material-outline-business-center" />
                </div>
              </div>
              <div className="fun-fact" data-fun-fact-color="#efa80f">
                <div className="fun-fact-text">
                  <span>Reviews</span>
                  <h4>28</h4>
                </div>
                <div className="fun-fact-icon">
                  <i className="icon-material-outline-rate-review" />
                </div>
              </div>

              {/*<!-- Last one has to be hidden below 1600px, sorry :( -->*/}
              <div className="fun-fact" data-fun-fact-color="#2a41e6">
                <div className="fun-fact-text">
                  <span>This Month Views</span>
                  <h4>987</h4>
                </div>
                <div className="fun-fact-icon">
                  <i className="icon-feather-trending-up" />
                </div>
              </div>
            </div>
            {/*<!-- Fun Facts Container End -->*/}
            <div>
              {/*<!-- Row -->*/}
              <div className="row">
                {/* <!-- Dashboard Box -->*/}
                <div className="col-xl-6">
                  <div className="dashboard-box">
                    <div className="headline">
                      <h3>
                        <i className="icon-material-baseline-notifications-none" />
                        Notifications
                      </h3>
                      <button
                        className="mark-as-read ripple-effect-dark"
                        data-tippy-placement="left"
                        title="Mark all as read"
                      >
                        <i className="icon-feather-check-square" />
                      </button>
                    </div>
                    <div className="content">
                      <ul className="dashboard-box-list">
                        <li>
                          <span className="notification-icon">
                            <i className="icon-material-outline-group" />
                          </span>
                          <span className="notification-text">
                            <strong>Michael Shannah</strong> applied for a job
                            <a href="#">Full Stack Software Engineer</a>
                          </span>
                          {/*<!-- Buttons -->*/}
                          <div className="buttons-to-right">
                            <a
                              href="#"
                              className="button ripple-effect ico"
                              title="Mark as read"
                              data-tippy-placement="left"
                            >
                              <i className="icon-feather-check-square" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="notification-icon">
                            <i className=" icon-material-outline-gavel" />
                          </span>
                          <span className="notification-text">
                            <strong>Gilber Allanis</strong> placed a bid on your
                            <a href="#">iOS App Development</a> project
                          </span>
                          {/* <!-- Buttons -->*/}
                          <div className="buttons-to-right">
                            <a
                              href="#"
                              className="button ripple-effect ico"
                              title="Mark as read"
                              data-tippy-placement="left"
                            >
                              <i className="icon-feather-check-square" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="notification-icon">
                            <i className="icon-material-outline-autorenew" />
                          </span>
                          <span className="notification-text">
                            Your job listing
                            <a href="#">Full Stack Software Engineer</a> is
                            expiring
                          </span>
                          {/* <!-- Buttons -->*/}
                          <div className="buttons-to-right">
                            <a
                              href="#"
                              className="button ripple-effect ico"
                              title="Mark as read"
                              data-tippy-placement="left"
                            >
                              <i className="icon-feather-check-square" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="notification-icon">
                            <i className="icon-material-outline-group" />
                          </span>
                          <span className="notification-text">
                            <strong>Sindy Forrest</strong> applied for a job
                            <a href="#">Full Stack Software Engineer</a>
                          </span>
                          {/* <!-- Buttons -->*/}
                          <div className="buttons-to-right">
                            <a
                              href="#"
                              className="button ripple-effect ico"
                              title="Mark as read"
                              data-tippy-placement="left"
                            >
                              <i className="icon-feather-check-square" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="notification-icon">
                            <i className="icon-material-outline-rate-review" />
                          </span>
                          <span className="notification-text">
                            <strong>David Peterson</strong> left you a
                            <span
                              className="star-rating no-stars"
                              data-rating="5.0"
                            />
                            rating after finishing
                            <a href="#">Logo Design</a> task
                          </span>
                          {/*<!-- Buttons -->*/}
                          <div className="buttons-to-right">
                            <a
                              href="#"
                              className="button ripple-effect ico"
                              title="Mark as read"
                              data-tippy-placement="left"
                            >
                              <i className="icon-feather-check-square" />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/*<!-- Dashboard Box -->*/}
                <div className="col-xl-6">
                  <div className="dashboard-box">
                    <div className="headline">
                      <h3>
                        <i className="icon-material-outline-assignment" /> Recent
                        Requests
                      </h3>
                    </div>
                    <div className="content">
                      <ul className="dashboard-box-list">
                        <li>
                          <div className="invoice-list-item">
                            <strong>Professional Plan</strong>
                            <ul>
                              <li>
                                <span className="unpaid">Unpaid</span>
                              </li>
                              <li>Order: #326</li>
                              <li>Date: 12/08/2018</li>
                            </ul>
                          </div>
                          {/*<!-- Buttons -->*/}
                          <div className="buttons-to-right">
                            <a href="pages-checkout-page.html" className="button">
                              Finish Payment
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="invoice-list-item">
                            <strong>Professional Plan</strong>
                            <ul>
                              <li>
                                <span className="paid">Paid</span>
                              </li>
                              <li>Order: #264</li>
                              <li>Date: 10/07/2018</li>
                            </ul>
                          </div>
                          {/*<!-- Buttons -->*/}
                          <div className="buttons-to-right">
                            <a
                              href="pages-invoice-template.html"
                              className="button gray"
                            >
                              View Invoice
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="invoice-list-item">
                            <strong>Professional Plan</strong>
                            <ul>
                              <li>
                                <span className="paid">Paid</span>
                              </li>
                              <li>Order: #211</li>
                              <li>Date: 12/06/2018</li>
                            </ul>
                          </div>
                          {/* <!-- Buttons -->*/}
                          <div className="buttons-to-right">
                            <a
                              href="pages-invoice-template.html"
                              className="button gray"
                            >
                              View Invoice
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="invoice-list-item">
                            <strong>Professional Plan</strong>
                            <ul>
                              <li>
                                <span className="paid">Paid</span>
                              </li>
                              <li>Order: #179</li>
                              <li>Date: 06/05/2018</li>
                            </ul>
                          </div>
                          {/* <!-- Buttons -->*/}
                          <div className="buttons-to-right">
                            <a
                              href="pages-invoice-template.html"
                              className="button gray"
                            >
                              View Invoice
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- Row / End -->*/}
            </div>
          </div>
          <div>
            <div>
              {/*<!-- Apply for a job popup
================================================== -->*/}
              <div
                id="small-dialog"
                className="zoom-anim-dialog mfp-hide dialog-with-tabs"
              >
                {/*<!--Tabs -->*/}
                <div className="sign-in-form">
                  <ul className="popup-tabs-nav">
                    <li>
                      <a href="#tab">Add Note</a>
                    </li>
                  </ul>

                  <div className="popup-tabs-container">
                    {/*<!-- Tab -->*/}
                    <div className="popup-tab-content" id="tab">
                      {/*<!-- Welcome Text -->*/}
                      <div className="welcome-text">
                        <h3>Do Not Forget 😎</h3>
                      </div>

                      {/*<!-- Form -->*/}
                      <form method="post" id="add-note">
                        <select
                          className="selectpicker with-border default margin-bottom-20"
                          data-size="7"
                          title="Priority"
                        >
                          <option>Low Priority</option>
                          <option>Medium Priority</option>
                          <option>High Priority</option>
                        </select>

                        <textarea
                          name="textarea"
                          cols="10"
                          placeholder="Note"
                          className="with-border"
                        />
                      </form>

                      {/*<!-- Button -->*/}
                      <button
                        className="button full-width button-sliding-icon ripple-effect"
                        type="submit"
                        form="add-note"
                      >
                        Add Note{" "}
                        <i className="icon-material-outline-arrow-right-alt" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- Apply for a job popup / End -->*/}
            </div>
          </div>
        </div>
      
      </DashboardLayout>
    </div>
  );
};

export default DashboardLandingPage;
