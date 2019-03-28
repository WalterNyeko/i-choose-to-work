import React, {Component} from 'react'
import DashboardLayout from '../layout/DashboardLayout';
import {Link} from 'react-router-dom';
import { Spin } from 'antd';

class DashboardManageTasks extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tasks: [],
       loading: false,
       errors: []
    }
    this.getTasks = this.getTasks.bind(this);
  }

  componentDidMount() {
      this.getTasks();
  }
  
  getTasks()
  {
      this.setState({
          loading: true
      });
      const token = localStorage.getItem('token');
      axios.get('api/services/user/requests', {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
      .then((res) => {
          this.setState({
              loading: false,
              tasks: res.data.data
          })
      })
      .catch((err) => {
          this.setState({
              errors: err,
              loading: false
          })
      })
  }
  render() {
    let tasks = null;
    if(this.state.tasks.length)
    {
        tasks = this.state.tasks.map((task, i) =>
            <li>
                {/*<!-- Job Listing -->*/}
                <div class="job-listing width-adjustment">
                    {/*<!-- Job Listing Details -->*/}
                    <div class="job-listing-details">
                        {/* <!-- Details -->*/}
                        <div class="job-listing-description">
                            <h3 class="job-listing-title">
                                <a className="text-capitalize" href="#">
                                    {task.service.name}
                                </a>
                                <span class="dashboard-status-button yellow">
                                    {task.created_at}
                                </span>
                            </h3>

                            {/*<!-- Job Listing Footer -->*/}
                            <div class="job-listing-footer">
                                <ul>
                                    <li>
                                        <i class="icon-material-outline-access-time" />
                                        {task.expected_start_date}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Task Details -->*/}
                <ul class="dashboard-task-info">
                    <li>
                        <strong>{task.offer.length}</strong>
                        <span>Bids</span>
                    </li>
                    
                </ul>

                {/* <!-- Buttons -->*/}
                <div class="buttons-to-right always-visible">
                    <Link
                        to="/dashboard/dashboardmanagebidders"
                        class="button ripple-effect"
                    >
                        <i class="icon-material-outline-supervisor-account" />
                        Manage Bidders{" "}
                        <span class="button-info">
                            {task.offer.length}
                        </span>
                    </Link>
                    {/* <a
                        href="#"
                        class="button gray ripple-effect ico"
                        title="Edit"
                        data-tippy-placement="top"
                    >
                        <i class="icon-feather-edit" />
                    </a> */}
                    <a
                        href="#"
                        class="button gray ripple-effect ico"
                        title="Remove"
                        data-tippy-placement="top"
                    >
                        <i class="icon-feather-trash-2" />
                    </a>
                </div>
            </li>
        )
    }
    else
    {
        <Spin/>
    }
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
                                                            Task 1
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
                                            
                                        </ul>

                                        {/* <!-- Buttons -->*/}
                                        <div className="buttons-to-right always-visible">
                                            <Link
                                                to="/dashboard/dashboardmanagebidders"
                                                className="button ripple-effect"
                                            >
                                                <i className="icon-material-outline-supervisor-account" />
                                                Manage Bidders{" "}
                                                <span className="button-info">
                                                    3
                                                </span>
                                            </Link>
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
                                                           Task 2
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
                                            {/* <li>
                                                <strong>$3,200</strong>
                                                <span>Avg. Bid</span>
                                            </li>
                                            <li>
                                                <strong>$2,500 - $4,500</strong>
                                                <span>Fixed Price</span>
                                            </li> */}
                                        </ul>

                                        {/*<!-- Buttons -->*/}
                                        <div className="buttons-to-right always-visible">
                                            <Link
                                                to="/dashboard/dashboardmanagebidders"
                                                className="button ripple-effect"
                                            >
                                                <i className="icon-material-outline-supervisor-account" />
                                                Manage Bidders{" "}
                                                <span className="button-info">
                                                    3
                                                </span>
                                            </Link>
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

}

export default DashboardManageTasks
