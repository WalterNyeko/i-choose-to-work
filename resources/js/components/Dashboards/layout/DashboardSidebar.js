import React from "react";
import {Link} from 'react-router-dom';

const role = localStorage.getItem('role')

const DashboardSidebar = (props) => {
    return (
		<div class="dashboard-sidebar-inner" data-simplebar>
		<div class="dashboard-nav-container">
	
			{/*<!-- Responsive Navigation Trigger -->*/}
			<a href="#" class="dashboard-responsive-nav-trigger">
				<span class="hamburger hamburger--collapse" >
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</span>
				<span class="trigger-title">Dashboard Navigation</span>
			</a>
			
			{/*<!-- Navigation -->*/}
			<div class="dashboard-nav">
				<div class="dashboard-nav-inner">
	
					<ul data-submenu-title="Start">
						<li><Link to="/dashboard"><i class="icon-material-outline-dashboard"></i> Dashboard</Link></li>
						<li><Link to="/dashboard/dashboardbookmarks"><i class="icon-material-outline-star-border"></i> Bookmarks</Link></li>
						<li><Link to="/dashboard/dashboardreviews"><i class="icon-material-outline-rate-review"></i> Reviews</Link></li>
					</ul>
					
					<ul data-submenu-title="Organize and Manage">
					
						<li class="active-submenu"><Link to="#"><i class="icon-material-outline-assignment"></i> Tasks</Link>
							<ul>
								<li><Link to="/dashboard/dashboardmanagetasks">Manage Tasks <span class="nav-tag">2</span></Link></li>
								<li><Link to="/dashboard/dashboardmanagebidders">Manage Bidders</Link></li>
								<li><Link to="/dashboard/dashboardactivebids">My Active Bids <span class="nav-tag">4</span></Link></li>
								
							</ul>	
						</li>
					</ul>
	
					<ul data-submenu-title="Account">
						<li><Link to="/dashboard/dashboardsettings"><i class="icon-material-outline-settings"></i> Settings</Link></li>
                        {role === 'provider' && 
                            <li><Link to="#"><i class="icon-material-outline-settings"></i> Settings</Link></li>
                        }
						<li><Link to="#"><i class="icon-material-outline-power-settings-new"></i> Logout</Link></li>
					</ul>
					
				</div>
			</div>
	
		</div>
	</div>         
    );
};

export default DashboardSidebar;