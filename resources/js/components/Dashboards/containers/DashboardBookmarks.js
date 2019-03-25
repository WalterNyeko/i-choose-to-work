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

            <div class="headline">
              <h3>
                <i class="icon-material-outline-business-center" />
                Bookmarked Jobs
              </h3>
            </div>

            <div class="content">
              <ul class="dashboard-box-list">
                <li>
                  {/*<!-- Job Listing -->*/}
                  <div class="job-listing">
                    {/*<!-- Job Listing Details -->*/}
                    <div class="job-listing-details">
                      {/*<!-- Logo -->*/}
                      <a href="#" class="job-listing-company-logo">
                        <img src="images/company-logo-02.png" alt="" />
                      </a>

                      {/*<!-- Details -->*/}
                      <div class="job-listing-description">
                        <h3 class="job-listing-title">
                          <a href="#">Barista and Cashier</a>
                        </h3>

                        {/*<!-- Job Listing Footer -->*/}
                        <div class="job-listing-footer">
                          <ul>
                            <li>
                              <i class="icon-material-outline-business" />
                              Coffee
                            </li>
                            <li>
                              <i class="icon-material-outline-location-on" />
                              San Francisco
                            </li>
                            <li>
                              <i class="icon-material-outline-business-center" />
                              Full Time
                            </li>
                            <li>
                              <i class="icon-material-outline-access-time" />2
                              days ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Buttons -->*/}
                  <div class="buttons-to-right">
                    <a
                      href="#"
                      class="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="left"
                    >
                      <i class="icon-feather-trash-2" />
                    </a>
                  </div>
                </li>

                <li>
                  {/* <!-- Job Listing -->*/}
                  <div class="job-listing">
                    {/*<!-- Job Listing Details -->*/}
                    <div class="job-listing-details">
                      {/*<!-- Logo -->*/}
                      <a href="#" class="job-listing-company-logo">
                        <img src="images/company-logo-04.png" alt="" />
                      </a>

                      {/*<!-- Details -->*/}
                      <div class="job-listing-description">
                        <h3 class="job-listing-title">
                          <a href="#">Administrative Assistant</a>
                        </h3>

                        {/*<!-- Job Listing Footer -->*/}
                        <div class="job-listing-footer">
                          <ul>
                            <li>
                              <i class="icon-material-outline-business" />
                              Mates
                            </li>
                            <li>
                              <i class="icon-material-outline-location-on" />
                              San Francisco
                            </li>
                            <li>
                              <i class="icon-material-outline-business-center" />
                              Full Time
                            </li>
                            <li>
                              <i class="icon-material-outline-access-time" />2
                              days ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<!-- Buttons -->*/}
                  <div class="buttons-to-right">
                    <a
                      href="#"
                      class="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="left"
                    >
                      <i class="icon-feather-trash-2" />
                    </a>
                  </div>
                </li>

                <li>
                  {/*<!-- Job Listing -->*/}
                  <div class="job-listing">
                    {/*<!-- Job Listing Details -->*/}
                    <div class="job-listing-details">
                      {/*<!-- Logo -->*/}
                      <a href="#" class="job-listing-company-logo">
                        <img src="images/company-logo-05.png" alt="" />
                      </a>

                      {/*<!-- Details -->*/}
                      <div class="job-listing-description">
                        <h3 class="job-listing-title">
                          <a href="#">Construction Labourers</a>
                        </h3>

                        {/*<!-- Job Listing Footer -->*/}
                        <div class="job-listing-footer">
                          <ul>
                            <li>
                              <i class="icon-material-outline-business" />
                              Podous
                            </li>
                            <li>
                              <i class="icon-material-outline-location-on" />
                              San Francisco
                            </li>
                            <li>
                              <i class="icon-material-outline-business-center" />
                              Full Time
                            </li>
                            <li>
                              <i class="icon-material-outline-access-time" />2
                              days ago
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<!-- Buttons -->*/}
                  <div class="buttons-to-right">
                    <a
                      href="#"
                      class="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="left"
                    >
                      <i class="icon-feather-trash-2" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*<!-- Dashboard Box -->*/}
        <div class="col-xl-12">
          <div class="dashboard-box">
            {/*<!-- Headline -->*/}
            <div class="headline">
              <h3>
                <i class="icon-material-outline-face" /> Bookmarked Freelancers
              </h3>
            </div>

            <div class="content">
              <ul class="dashboard-box-list">
                <li>
                  {/*<!-- Overview -->*/}
                  <div class="freelancer-overview">
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
                            David Peterson
                            <img
                              class="flag"
                              src="images/flags/de.svg"
                              alt=""
                              title="Germany"
                              data-tippy-placement="top"
                            />
                          </a>
                        </h4>
                        <span>iOS Expert + Node Dev</span>
                        {/*<!-- Rating -->*/}
                        <div class="freelancer-rating">
                          <div class="star-rating" data-rating="4.2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<!-- Buttons -->*/}
                  <div class="buttons-to-right">
                    <a
                      href="#"
                      class="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="left"
                    >
                      <i class="icon-feather-trash-2" />
                    </a>
                  </div>
                </li>
                <li>
                  {/*<!-- Overview -->*/}
                  <div class="freelancer-overview">
                    <div class="freelancer-overview-inner">
                      {/*<!-- Avatar -->*/}
                      <div class="freelancer-avatar">
                        <a href="#">
                          <img
                            src="images/user-avatar-placeholder.png"
                            alt=""
                          />
                        </a>
                      </div>

                      {/*<!-- Name -->*/}
                      <div class="freelancer-name">
                        <h4>
                          <a href="#">
                            Marcin Kowalski
                            <img
                              class="flag"
                              src="images/flags/pl.svg"
                              alt=""
                              title="Poland"
                              data-tippy-placement="top"
                            />
                          </a>
                        </h4>
                        <span>Front-End Developer</span>
                        {/*<!-- Rating -->*/}
                        <div class="freelancer-rating">
                          <div class="star-rating" data-rating="4.7" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<!-- Buttons -->*/}
                  <div class="buttons-to-right">
                    <a
                      href="#"
                      class="button red ripple-effect ico"
                      title="Remove"
                      data-tippy-placement="left"
                    >
                      <i class="icon-feather-trash-2" />
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
                class="zoom-anim-dialog mfp-hide dialog-with-tabs"
              >
                {/*<!--Tabs -->*/}
                <div class="sign-in-form">
                  <ul class="popup-tabs-nav">
                    <li>
                      <a href="#tab">Add Note</a>
                    </li>
                  </ul>

                  <div class="popup-tabs-container">
                    {/*<!-- Tab -->*/}
                    <div class="popup-tab-content" id="tab">
                      {/*<!-- Welcome Text -->*/}
                      <div class="welcome-text">
                        <h3>Do Not Forget 😎</h3>
                      </div>

                      {/*<!-- Form -->*/}
                      <form method="post" id="add-note">
                        <select
                          class="selectpicker with-border default margin-bottom-20"
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
                          class="with-border"
                        />
                      </form>

                      {/*<!-- Button -->*/}
                      <button
                        class="button full-width button-sliding-icon ripple-effect"
                        type="submit"
                        form="add-note"
                      >
                        Add Note{" "}
                        <i class="icon-material-outline-arrow-right-alt" />
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
