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
           <div class="headline">
                                <h3>
                                    <i class="icon-material-outline-assignment" />{" "}
                                    My Posted Tasks
                                </h3>
                            </div>

                            <div class="content">
                                <ul class="dashboard-box-list">
                                    {tasks}
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
