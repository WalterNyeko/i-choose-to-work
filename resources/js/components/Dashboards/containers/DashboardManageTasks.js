import React from 'react'
import DashboardLayout from '../layout/DashboardLayout';
import { NavLink } from 'react-router-dom';
import { Spin } from 'antd';
import { Button } from 'antd';

const DashboardManageTasks = (props) => {
    let tasks = null;
    if(props.state.tasks.length)
    {
        tasks = props.state.tasks.map((task, i) =>
            <li key={i}>
                {/*<!-- Job Listing -->*/}
                <div className="job-listing width-adjustment">
                    {/*<!-- Job Listing Details -->*/}
                    <div className="job-listing-details">
                        {/* <!-- Details -->*/}
                        <div className="job-listing-description">
                            <h3 className="job-listing-title">
                                <a className="text-capitalize" href="#">
                                    {task.service.name}
                                </a>
                                <span className="dashboard-status-button yellow">
                                    {task.created_at}
                                </span>
                            </h3>

                            {/*<!-- Job Listing Footer -->*/}
                            <div className="job-listing-footer">
                                <ul>
                                    <li>
                                        <i className="icon-material-outline-access-time" />
                                        {task.expected_start_date}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Task Details -->*/}
                <ul className="dashboard-task-info">
                    <li>
                        <strong>{task.offer.length}</strong>
                        <span>Bids</span>
                    </li>
                    
                </ul>

                {/* <!-- Buttons -->*/}
                <div className="buttons-to-right always-visible">
                    <NavLink to={`/dashboard/dashboardmanagebidders/${task.id}`}>
                    <Button className="primary">Manage Bidders{" "}</Button>
                    </NavLink>
                     {' '}
                    <Button className="danger">Edit</Button>
                     {' '}
                    <Button className="danger">Delete</Button>
                    <span className="button-info">
                        {task.offer.length}
                    </span>
                    
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
                                    My Posted Tasks
                                </h3>
                            </div>

                            <div className="content">
                                <ul className="dashboard-box-list">
                                    {tasks}
                                </ul>
                            </div>
          {/*** manage tasks Childern end */}
                           
      </div>
      </DashboardLayout>
    </div>
  )
  }  


export default DashboardManageTasks
