import React from 'react'
import {Link} from 'react-router-dom'

const Single = (props) => {
  return (
    <a href="#" class="task-listing">

       
        <div class="task-listing-details">

            
            <div class="task-listing-description">
                <h3 class="task-listing-title">{props.service ? props.service : 'Service'}</h3>
                <ul class="task-icons">
                    <li><i class="icon-material-outline-location-on"></i> {props.address ? props.address : 'Address'}</li>
                    <li><i class="icon-material-outline-access-time"></i> 2 minutes ago</li>
                </ul>
                < p class = "task-listing-text" >{props.description}</p>
                <div class="task-tags">
                    <span>{props.category}</span>
                </div>
            </div>

        </div>

        <div class="task-listing-bid">
            <div class="task-listing-bid-inner">
                <div class="task-offers">
                    
                </div>
                <span class="button button-sliding-icon ripple-effect">Bid Now <i class="icon-material-outline-arrow-right-alt"></i></span>
            </div>
        </div>
    </a>
  )
}

export default Single

