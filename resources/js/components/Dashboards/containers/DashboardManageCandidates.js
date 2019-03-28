import React from "react";
import DashboardLayout from "../layout/DashboardLayout";

const DashboardManageCandidates = () => {
  return (
    <div>
      <DashboardLayout>
      <div>
          {/*** manage candidates Childern start */}

        <div>
          {/*<!-- Headline -->*/}
          <div class="headline">
            <h3>
              <i class="icon-material-outline-supervisor-account" /> 3
              Candidates
            </h3>
          </div>

          <div class="content">
            <ul class="dashboard-box-list">
              <li>
                {/*<!-- Overview -->*/}
                <div class="freelancer-overview manage-candidates">
                  <div class="freelancer-overview-inner">
                    {/** <!-- Avatar -->*/}
                    <div class="freelancer-avatar">
                      <div class="verified-badge" />
                      <a href="#">
                        <img src="images/user-avatar-big-03.jpg" alt="" />
                      </a>
                    </div>

                    {/*  <!-- Name -->*/}
                    <div class="freelancer-name">
                      <h4>
                        <a href="#">
                          Sindy Forest
                          <img
                            class="flag"
                            src="images/flags/au.svg"
                            alt=""
                            title="Australia"
                            data-tippy-placement="top"
                          />
                        </a>
                      </h4>

                      {/*  <!-- Details -->*/}
                      <span class="freelancer-detail-item">
                        <a href="#">
                          <i class="icon-feather-mail" />
                          <span
                            class="__cf_email__"
                            data-cfemail="493a20272d30092c31282439252c672a2624"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </span>
                      <span class="freelancer-detail-item">
                        <i class="icon-feather-phone" /> (+61) 123-456-789
                      </span>

                      {/*  <!-- Rating -->*/}
                      <div class="freelancer-rating">
                        <div class="star-rating" data-rating="5.0" />
                      </div>

                      {/* <!-- Buttons -->*/}
                      <div class="buttons-to-right always-visible margin-top-25 margin-bottom-5">
                        <a href="#" class="button ripple-effect">
                          <i class="icon-feather-file-text" />
                          Download CV
                        </a>
                        <a
                          href="#small-dialog"
                          class="popup-with-zoom-anim button dark ripple-effect"
                        >
                          <i class="icon-feather-mail" /> Send Message
                        </a>
                        <a
                          href="#"
                          class="button gray ripple-effect ico"
                          title="Remove Candidate"
                          data-tippy-placement="top"
                        >
                          <i class="icon-feather-trash-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                {/* <!-- Overview -->*/}
                <div class="freelancer-overview manage-candidates">
                  <div class="freelancer-overview-inner">
                    {/**<!-- Avatar --> */}
                    <div class="freelancer-avatar">
                      <a href="#">
                        <img src="images/user-avatar-placeholder.png" alt="" />
                      </a>
                    </div>

                    {/*  <!-- Name -->*/}
                    <div class="freelancer-name">
                      <h4>
                        <a href="#">
                          Sebastiano Piccio
                          <img
                            class="flag"
                            src="images/flags/it.svg"
                            alt=""
                            title="Italy"
                            data-tippy-placement="top"
                          />
                        </a>
                      </h4>

                      {/*  <!-- Details -->*/}
                      <span class="freelancer-detail-item">
                        <a href="#">
                          <i class="icon-feather-mail" />
                          <span
                            class="__cf_email__"
                            data-cfemail="6b180e090a181f020a05042b0e130a061b070e45080406"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </span>
                      <span class="freelancer-detail-item">
                        <i class="icon-feather-phone" /> (+39) 123-456-789
                      </span>

                      {/*  <!-- Rating -->*/}
                      <br />
                      <span class="company-not-rated">
                        Minimum of 3 votes required
                      </span>

                      {/*  <!-- Buttons -->*/}
                      <div class="buttons-to-right always-visible margin-top-25 margin-bottom-5">
                        <a href="#" class="button ripple-effect">
                          <i class="icon-feather-file-text" />
                          Download CV
                        </a>
                        <a
                          href="#small-dialog"
                          class="popup-with-zoom-anim button dark ripple-effect"
                        >
                          <i class="icon-feather-mail" /> Send Message
                        </a>
                        <a
                          href="#"
                          class="button gray ripple-effect ico"
                          title="Remove Candidate"
                          data-tippy-placement="top"
                        >
                          <i class="icon-feather-trash-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                {/* <!-- Overview -->*/}
                <div class="freelancer-overview manage-candidates">
                  <div class="freelancer-overview-inner">
                    {/**<!-- Avatar --> */}
                    <div class="freelancer-avatar">
                      <a href="#">
                        <img src="images/user-avatar-placeholder.png" alt="" />
                      </a>
                    </div>

                    {/* <!-- Name -->*/}
                    <div class="freelancer-name">
                      <h4>
                        <a href="#">
                          Nikolay Azarov
                          <img
                            class="flag"
                            src="images/flags/ru.svg"
                            alt=""
                            title="Russia"
                            data-tippy-placement="top"
                          />
                        </a>
                      </h4>

                      {/*   <!-- Details -->*/}
                      <span class="freelancer-detail-item">
                        <a href="#">
                          <i class="icon-feather-mail" />
                          <span
                            class="__cf_email__"
                            data-cfemail="2947404246454850694c51484459454c074a4644"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </span>
                      <span class="freelancer-detail-item">
                        <i class="icon-feather-phone" /> (+7) 123-456-789
                      </span>

                      {/*  <!-- Rating -->*/}
                      <br />
                      <span class="company-not-rated">
                        Minimum of 3 votes required
                      </span>

                      {/*  <!-- Buttons -->*/}
                      <div class="buttons-to-right always-visible margin-top-25 margin-bottom-5">
                        <a href="#" class="button ripple-effect">
                          <i class="icon-feather-file-text" />
                          Download CV
                        </a>
                        <a
                          href="#small-dialog"
                          class="popup-with-zoom-anim button dark ripple-effect"
                        >
                          <i class="icon-feather-mail" /> Send Message
                        </a>
                        <a
                          href="#"
                          class="button gray ripple-effect ico"
                          title="Remove Candidate"
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
          {/*** manage candidates Childern start */}

        </div>

        {/**  <!-- Send Direct Message Popup
= -->*/}
        <div>
          <div
            id="small-dialog"
            class="zoom-anim-dialog mfp-hide dialog-with-tabs"
          >
            {/**  <!--Tabs -->*/}
            <div class="sign-in-form">
              <ul class="popup-tabs-nav">
                <li>
                  <a href="#tab">Send Message</a>
                </li>
              </ul>

              <div class="popup-tabs-container">
                {/*<!-- Tab -->*/}
                <div class="popup-tab-content" id="tab">
                  {/** <!-- Welcome Text -->*/}
                  <div class="welcome-text">
                    <h3>Direct Message To Sindy</h3>
                  </div>

                  {/*<!-- Form -->*/}
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
        </div>


        
      </div>
      </DashboardLayout>
    </div>
  );
};

export default DashboardManageCandidates;
