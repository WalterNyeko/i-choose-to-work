import React from "react";
import DashboardLayout from "../layout/DashboardLayout";

const DashboardBookmarks = () => {
  return (
    <div>
      <DashboardLayout>
        <div>
          {/**Dashboard content  start*/}

          <div>
            {/*<!-- Headline -->*/}

            <div className="headline">
              <h3>
                <i className="icon-material-outline-business-center" />
                Bookmarked Jobs
              </h3>
            </div>

            <div className="content">
              <ul className="dashboard-box-list">
                <li>
                  {/*<!-- Job Listing -->*/}
                  <div className="job-listing">
                    {/*<!-- Job Listing Details -->*/}
                    <div className="job-listing-details">
                      {/*<!-- Logo -->*/}
                      <a href="#" className="job-listing-company-logo">
                        <img src="images/company-logo-02.png" alt="" />
                      </a>

                      {/*<!-- Details -->*/}
                      <div className="job-listing-description">
                        <h3 className="job-listing-title">
                          <a href="#">Barista and Cashier</a>
                        </h3>

                        {/*<!-- Job Listing Footer -->*/}
                        <div className="job-listing-footer">
                          <ul>
                            <li>
                              <i className="icon-material-outline-business" />
                              Coffee
                            </li>
                            <li>
                              <i className="icon-material-outline-location-on" />
                              San Francisco
                            </li>
                            <li>
                              <i className="icon-material-outline-business-center" />
                              Full Time
                            </li>
                            <li>
                              <i className="icon-material-outline-access-time" />2
                              days ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Buttons -->*/}
                  <div className="buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="left"
                    >
                      <i className="icon-feather-trash-2" />
                    </a>
                  </div>
                </li>

                <li>
                  {/* <!-- Job Listing -->*/}
                  <div className="job-listing">
                    {/*<!-- Job Listing Details -->*/}
                    <div className="job-listing-details">
                      {/*<!-- Logo -->*/}
                      <a href="#" className="job-listing-company-logo">
                        <img src="images/company-logo-04.png" alt="" />
                      </a>

                      {/*<!-- Details -->*/}
                      <div className="job-listing-description">
                        <h3 className="job-listing-title">
                          <a href="#">Administrative Assistant</a>
                        </h3>

                        {/*<!-- Job Listing Footer -->*/}
                        <div className="job-listing-footer">
                          <ul>
                            <li>
                              <i className="icon-material-outline-business" />
                              Mates
                            </li>
                            <li>
                              <i className="icon-material-outline-location-on" />
                              San Francisco
                            </li>
                            <li>
                              <i className="icon-material-outline-business-center" />
                              Full Time
                            </li>
                            <li>
                              <i className="icon-material-outline-access-time" />2
                              days ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<!-- Buttons -->*/}
                  <div className="buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="left"
                    >
                      <i className="icon-feather-trash-2" />
                    </a>
                  </div>
                </li>

                <li>
                  {/*<!-- Job Listing -->*/}
                  <div className="job-listing">
                    {/*<!-- Job Listing Details -->*/}
                    <div className="job-listing-details">
                      {/*<!-- Logo -->*/}
                      <a href="#" className="job-listing-company-logo">
                        <img src="images/company-logo-05.png" alt="" />
                      </a>

                      {/*<!-- Details -->*/}
                      <div className="job-listing-description">
                        <h3 className="job-listing-title">
                          <a href="#">Construction Labourers</a>
                        </h3>

                        {/*<!-- Job Listing Footer -->*/}
                        <div className="job-listing-footer">
                          <ul>
                            <li>
                              <i className="icon-material-outline-business" />
                              Podous
                            </li>
                            <li>
                              <i className="icon-material-outline-location-on" />
                              San Francisco
                            </li>
                            <li>
                              <i className="icon-material-outline-business-center" />
                              Full Time
                            </li>
                            <li>
                              <i className="icon-material-outline-access-time" />2
                              days ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<!-- Buttons -->*/}
                  <div className="buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="left"
                    >
                      <i className="icon-feather-trash-2" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*<!-- Dashboard Box -->*/}
        <div className="col-xl-12">
          <div className="dashboard-box">
            {/*<!-- Headline -->*/}
            <div className="headline">
              <h3>
                <i className="icon-material-outline-face" /> Bookmarked Freelancers
              </h3>
            </div>

            <div className="content">
              <ul className="dashboard-box-list">
                <li>
                  {/*<!-- Overview -->*/}
                  <div className="freelancer-overview">
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
                            David Peterson
                            <img
                              className="flag"
                              src="images/flags/de.svg"
                              alt=""
                              title="Germany"
                              data-tippy-placement="top"
                            />
                          </a>
                        </h4>
                        <span>iOS Expert + Node Dev</span>
                        {/*<!-- Rating -->*/}
                        <div className="freelancer-rating">
                          <div className="star-rating" data-rating="4.2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<!-- Buttons -->*/}
                  <div className="buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="left"
                    >
                      <i className="icon-feather-trash-2" />
                    </a>
                  </div>
                </li>
                <li>
                  {/*<!-- Overview -->*/}
                  <div className="freelancer-overview">
                    <div className="freelancer-overview-inner">
                      {/*<!-- Avatar -->*/}
                      <div className="freelancer-avatar">
                        <a href="#">
                          <img
                            src="images/user-avatar-placeholder.png"
                            alt=""
                          />
                        </a>
                      </div>

                      {/*<!-- Name -->*/}
                      <div className="freelancer-name">
                        <h4>
                          <a href="#">
                            Marcin Kowalski
                            <img
                              className="flag"
                              src="images/flags/pl.svg"
                              alt=""
                              title="Poland"
                              data-tippy-placement="top"
                            />
                          </a>
                        </h4>
                        <span>Front-End Developer</span>
                        {/*<!-- Rating -->*/}
                        <div className="freelancer-rating">
                          <div className="star-rating" data-rating="4.7" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<!-- Buttons -->*/}
                  <div className="buttons-to-right">
                    <a
                      href="#"
                      className="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="left"
                    >
                      <i className="icon-feather-trash-2" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/**Dashboard content  end*/}
          <div>
            <div>
              {/*<!-- Apply for a job popup
    = -->*/}
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

export default DashboardBookmarks;
