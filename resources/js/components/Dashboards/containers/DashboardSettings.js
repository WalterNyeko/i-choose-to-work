import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { routes } from "../../../constants";
import { Link } from 'react-router-dom';

const DashboardSettings = ({
  handleInputChange, 
  handleSubmitProfileUpdate, 
  handleSubmitPasswordUpdate, 
  state, 
  user
}) => {
  return (
    <div>
      <DashboardLayout>
        <div>
          {/**Settings content start */}
          <div>
            {/*  <!-- Headline -->*/}
            <div className="headline">
              <h3>
                <i className="icon-material-outline-account-circle" /> My Account
              </h3>
            </div>

            <div className="content with-padding padding-bottom-0">
              <div className="row">
                <div className="col-auto">
                  <div
                    className="avatar-wrapper"
                    data-tippy-placement="bottom"
                    title="Change Avatar"
                  >
                    <img
                      className="profile-pic"
                      src="images/user-avatar-placeholder.png"
                      alt=""
                    />
                    <div className="upload-button" />
                    <input 
                      className="file-upload" 
                      type="file" 
                      accept="image/*"
                      onChange={handleInputChange}/>
                  </div>
                </div>

                <div className="col">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="submit-field">
                        <h5>Full Name</h5>
                        <input type="text" className="with-border" value="Tom" />
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="submit-field">
                        <h5>Phone</h5>
                        <input 
                          type="text" 
                          className="with-border" 
                          name="phoneNumber"
                          value={state.phoneNumber}
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                    {user === 'public' ?
                    <div className="col-xl-6">
                    {/*<!-- Account Type -->*/}
                    <div className="submit-field">
                      <h5>Account Type</h5>
                      <div className="account-type">
                        <div>
                          <input
                            type="radio"
                            name="account-type-radio"
                            id="freelancer-radio"
                            className="account-type-radio"
                            checked
                          />
                          <label
                            htmlFor="freelancer-radio"
                            className="ripple-effect-dark"
                          >
                            <i className="icon-material-outline-account-circle" />
                            Default User
                          </label>
                        </div>

                        <div>
                          <input
                            type="radio"
                            name="account-type-radio"
                            id="employer-radio"
                            className="account-type-radio"
                          />
                          <label
                            htmlFor="employer-radio"
                            className="ripple-effect-dark"
                          >
                            <i className="icon-material-outline-business-center" />
                            <a href={routes.BECOME_PROVIDER}>Become Provider</a>
                          </label>
                        </div>
                      </div>
                    </div>
                    </div>
                    :
                    <div className="col-xl-6">
                      {/*<!-- Account Type -->*/}
                      <div className="submit-field">
                        <h5>Account Type</h5>
                        <div className="account-type">
                          <div>
                            <input
                              type="radio"
                              name="account-type-radio"
                              id="freelancer-radio"
                              className="account-type-radio"
                              checked
                            />
                            <label
                              htmlFor="freelancer-radio"
                              className="ripple-effect-dark"
                            >
                              <i className="icon-material-outline-account-circle" />
                              Service Provider
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="account-type-radio"
                              id="employer-radio"
                              className="account-type-radio"
                            />
                            <label
                              htmlFor="employer-radio"
                              className="ripple-effect-dark"
                            >
                              <i className="icon-material-outline-business-center" />
                              <Link to="/dashboard/dashboardmanagebidders">
                              <span className="text-info">Make Bid{" "}</span>
                              </Link>

                              Make Bid
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>}
                    <div className="col-xl-6">
                      <div className="submit-field">
                        <h5>Physical Address</h5>
                        <input
                          type="text"
                          className="with-border"
                          name="address"
                          value={state.address}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Dashboard Box -->*/}
        <div className="col-xl-12">
          <div className="dashboard-box">
         
            <div className="content">
              <ul className="fields-ul">
               
                <li>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="submit-field">
                        <h5>Tagline</h5>
                        <input
                          type="text"
                          className="with-border"
                          name="taglineProfessional"
                          onChange={handleInputChange}
                          value={state.taglineProfessional}
                        />
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="submit-field">
                        <h5>Introduce Yourself</h5>
                        <textarea 
                          cols="30" 
                          name="description"
                          rows="5" 
                          className="with-border"
                          onChange={handleInputChange}>
                          {state.description}
                        </textarea>
                      </div>
                    </div>

                    <div className="col-xl-12" onClick={handleSubmitProfileUpdate}>
                      <a href="#" className="btn btn-success btn-lg ripple-effect big margin-top-10">
                        Save Changes
                      </a>
                    </div>

                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*<!-- Dashboard Box -->*/}
        <div className="col-xl-12">
          <div id="test1" className="dashboard-box">
            {/* <!-- Headline -->*/}
            <div className="headline">
              <h3>
                <i className="icon-material-outline-lock" /> Password & Security
              </h3>
            </div>

            <div className="content with-padding">
              <div className="row">
                <div className="col-xl-4">
                  <div className="submit-field">
                    <h5>Current Password</h5>
                    <input 
                      type="password" 
                      className="with-border"
                      name="currentPassword"
                      value={state.currentPassword}
                      onChange={handleInputChange} />
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="submit-field">
                    <h5>New Password</h5>
                    <input 
                      type="password" 
                      className="with-border"
                      name="newPassword"
                      value={state.newPassword}
                      onChange={handleInputChange} />
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="submit-field">
                    <h5>Repeat New Password</h5>
                    <input 
                      type="password" 
                      className="with-border"
                      name="confirmPassword"
                      value={state.confirmPassword}
                      onChange={handleInputChange} />
                  </div>
                </div>

                <div className="col-xl-12">
                  <div className="checkbox">
                    <input 
                      type="checkbox" 
                      id="two-step" 
                      checked />
                    <label htmlFor="two-step">
                      <span className="checkbox-icon" /> Enable Two-Step
                      Verification via Email
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- Button -->*/}
        <div className="col-xl-12" onClick={handleSubmitPasswordUpdate}>
          <a href="#" className="button ripple-effect big margin-top-30">
            Update Password
          </a>
        </div>
          {/**Settings content end */}

      </DashboardLayout>
    </div>
  );
};

export default DashboardSettings;
