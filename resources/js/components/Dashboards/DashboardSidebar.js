import React from "react";
import {Link} from 'react-router-dom';

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
						<li><Link to="#"><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
						<li><Link to="#"><i className="icon-material-outline-star-border"></i> Bookmarks</Link></li>
						<li><Link to="#"><i className="icon-material-outline-rate-review"></i> Reviews</Link></li>
					</ul>
					
					<ul data-submenu-title="Organize and Manage">
						<li><Link to="#">Manage Tasks <span className="nav-tag">2</span></Link></li>
						<li><Link to="#">Manage Bidders</Link></li>
						<li><Link to="#">My Active Bids <span className="nav-tag">4</span></Link></li>	
					</ul>
	
					<ul data-submenu-title="Account">
						<li><Link to="#"><i className="icon-material-outline-settings"></i> Settings</Link></li>
                        {role === 'provider' && 
                            <li><Link to="#"><i className="icon-material-outline-settings"></i> Settings</Link></li>
                        }
						<li><Link to="#"><i className="icon-material-outline-power-settings-new"></i> Logout</Link></li>
					</ul>
					
				</div>
			</div>
	
		</div>
	</div>         
    );
};

export default DashboardSidebar;