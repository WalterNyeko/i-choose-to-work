import React, { Component } from "react";
import avataicon from "../../assets/avatar3.png";
import {Link} from 'react-router-dom'

class ServiceProviderList extends Component {
    render() {
        return (
            <>
                <div className="freelancer">

					<div className="freelancer-overview">
						<div className="freelancer-overview-inner">
							
							<span className="bookmark-icon"></span>
							
							<div className="freelancer-avatar">
								<div className="verified-badge"></div>
								<a href="#"><img src="images/user-avatar-big-01.jpg" alt=""/></a>
							</div>

							
							<div className="freelancer-name">
								<h4><a href="#">{this.props.name} <img className="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top"/></a></h4>
								<span>Service Provider</span>
								<div className="freelancer-rating">
									<div className="star-rating" data-rating="4.1"></div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="freelancer-details">
						<div className="freelancer-details-list">
							<ul>
								<li>Location <strong><i className="icon-material-outline-location-on"></i> {this.props.address}</strong></li>
								{/* <li>Rate <strong>$60 / hr</strong></li> */}
								<li>Job Success <strong>95%</strong></li>
							</ul>
						</div>
						<Link to={`/profile/${this.props.id}`} className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></Link>
					</div>
				</div>
            </>
        );
    }
}

export default ServiceProviderList;
