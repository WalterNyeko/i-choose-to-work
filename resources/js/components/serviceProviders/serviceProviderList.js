import React, { Component } from "react";
import avataicon from "../../assets/avatar3.png";
import {Link} from 'react-router-dom'

class ServiceProviderList extends Component {
    render() {
        return (
            <>
                <div class="freelancer">

					<div class="freelancer-overview">
						<div class="freelancer-overview-inner">
							
							<span class="bookmark-icon"></span>
							
							<div class="freelancer-avatar">
								<div class="verified-badge"></div>
								<a href="#"><img src="images/user-avatar-big-01.jpg" alt=""/></a>
							</div>

							
							<div class="freelancer-name">
								<h4><a href="#">{this.props.name} <img class="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top"/></a></h4>
								<span>Service Provider</span>
								<div class="freelancer-rating">
									<div class="star-rating" data-rating="4.1"></div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="freelancer-details">
						<div class="freelancer-details-list">
							<ul>
								<li>Location <strong><i class="icon-material-outline-location-on"></i> {this.props.address}</strong></li>
								{/* <li>Rate <strong>$60 / hr</strong></li> */}
								<li>Job Success <strong>95%</strong></li>
							</ul>
						</div>
						<Link to={`/profile/${this.props.id}`} class="button button-sliding-icon ripple-effect">View Profile <i class="icon-material-outline-arrow-right-alt"></i></Link>
					</div>
				</div>
            </>
        );
    }
}

export default ServiceProviderList;
