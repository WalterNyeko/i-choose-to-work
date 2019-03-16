import React from 'react'
import DashboardLayout from '../layout/DashboardLayout';
import { Link } from 'react-router-dom';

const DashboardManageTasks = ({handleInputChange, state, user}) => {
  return (
    <div>
        <DashboardLayout>
      <div>
          {/*** manage tasks Childern start */}
           {/* <!-- Headline -->*/}
           <div className="headline">
                                <h3>
                                    <i className="icon-material-outline-assignment" />{" "}
                                    My Tasks
                                </h3>
                            </div>

                            <div className="content">
                                <ul className="dashboard-box-list">
                                    <li>
                                        {/*<!-- Job Listing -->*/}
                                        <div className="job-listing width-adjustment">
                                            {/*<!-- Job Listing Details -->*/}
                                            <div className="job-listing-details">
                                                {/* <!-- Details -->*/}
                                                <div className="job-listing-description">
                                                    <h3 className="job-listing-title">
                                                        <a href="#">
                                                            Design a Landing
                                                            Page
                                                        </a>
                                                        <span className="dashboard-status-button yellow">
                                                            Expiring
                                                        </span>
                                                    </h3>

                                                    {/*<!-- Job Listing Footer -->*/}
                                                    <div className="job-listing-footer">
                                                        <ul>
                                                            <li>
                                                                <i className="icon-material-outline-access-time" />
                                                                23 hours left
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Task Details -->*/}
                                        <ul className="dashboard-task-info">
                                            <li>
                                                <strong>3</strong>
                                                <span>Bids</span>
                                            </li>
                                            <li>
                                                <strong>$22</strong>
                                                <span>Avg. Bid</span>
                                            </li>
                                            <li>
                                                <strong>$15 - $30</strong>
                                                <span>Hourly Rate</span>
                                            </li>
                                        </ul>

                                        {/* <!-- Buttons -->*/}
                                        <div className="buttons-to-right always-visible">
                                            <a
                                                href="/dashboard/dashboardmanagebidders"
                                                className="button ripple-effect"
                                            >
                                                
						                        <Link to="/dashboard/dashboardmanagebidders">
                                                    <span className="text-white">Manage Bidders{" "}</span>
                                                </Link>

                                                <span className="button-info">
                                                    3
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                className="button gray ripple-effect ico"
                                                title="Edit"
                                                data-tippy-placement="top"
                                            >
                                                <i className="icon-feather-edit" />
                                            </a>
                                            <a
                                                href="#"
                                                className="button gray ripple-effect ico"
                                                title="Remove"
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
                                                        <a href="#">
                                                            Food Delivery Mobile
                                                            Application
                                                        </a>
                                                    </h3>

                                                    {/*<!-- Job Listing Footer -->*/}
                                                    <div className="job-listing-footer">
                                                        <ul>
                                                            <li>
                                                                <i className="icon-material-outline-access-time" />
                                                                6 days, 23 hours
                                                                left
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*<!-- Task Details -->*/}
                                        <ul className="dashboard-task-info">
                                            <li>
                                                <strong>3</strong>
                                                <span>Bids</span>
                                            </li>
                                            <li>
                                                <strong>$3,200</strong>
                                                <span>Avg. Bid</span>
                                            </li>
                                            <li>
                                                <strong>$2,500 - $4,500</strong>
                                                <span>Fixed Price</span>
                                            </li>
                                        </ul>

                                        {/*<!-- Buttons -->*/}
                                        <div className="buttons-to-right always-visible">
                                            <a
                                                href="/"
                                                className="button ripple-effect"
                                            >
                                                <Link to="/dashboard/dashboardmanagebidders">
                                                    <span className="text-white">Manage Bidders{" "}</span>
                                                </Link>
                                                <span className="button-info">
                                                    3
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                className="button gray ripple-effect ico"
                                                title="Edit"
                                                data-tippy-placement="top"
                                            >
                                                <i className="icon-feather-edit" />
                                            </a>
                                            <a
                                                href="#"
                                                className="button gray ripple-effect ico"
                                                title="Remove"
                                                data-tippy-placement="top"
                                            >
                                                <i className="icon-feather-trash-2" />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
          {/*** manage tasks Childern end */}
                           
      </div>
      </DashboardLayout>
    </div>
  )
}

export default DashboardManageTasks
