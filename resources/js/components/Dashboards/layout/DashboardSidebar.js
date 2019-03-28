import React from "react";
import {Link} from 'react-router-dom';
import { routes } from "../../../constants";

const role = localStorage.getItem('role')

const DashboardSidebar = (props) => {
    return (
		<div className="dashboard-sidebar-inner" data-simplebar>
		<div className="dashboard-nav-container">
	
			{/*<!-- Responsive Navigation Trigger -->*/}
			<a href="#" className="dashboard-responsive-nav-trigger">
				<span className="hamburger hamburger--collapse" >
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</span>
				<span className="trigger-title">Dashboard Navigation</span>
			</a>
			
			{/*<!-- Navigation -->*/}
			<div className="dashboard-nav">
				<div className="dashboard-nav-inner">
	
					<ul data-submenu-title="Start">
						<li><Link to="/dashboard"><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
						{/* <li><Link to="/dashboard/dashboardbookmarks"><i className="icon-material-outline-star-border"></i> Bookmarks</Link></li>
						<li><Link to="/dashboard/dashboardreviews"><i className="icon-material-outline-rate-review"></i> Reviews</Link></li> */}
					</ul>
					
					<ul data-submenu-title="Organize and Manage">
					
						<li><Link to="/dashboard/dashboardmanagetasks">Manage Tasks <span className="nav-tag">2</span></Link></li>
						{props.role === 'provider' &&
						<li><Link to="/dashboard/dashboardactivebids">My Active Bids <span className="nav-tag">4</span></Link></li>
						}		
					</ul>
	
					<ul data-submenu-title="Account">
						<li><Link to="/dashboard/dashboardsettings"> Settings</Link></li>
						{props.role === 'provider' &&
						<li><Link to={routes.PROVIDER_SERVICE}> Services</Link></li>
						}
					</ul>
					
				</div>
			</div>
	
		</div>
	</div>         
    );
};

export default DashboardSidebar;