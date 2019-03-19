import React from 'react'
import {Link} from 'react-router-dom'

const Single = (props) => {
  return (
    <div className="task-listing">

       
        <div className="task-listing-details">

            
            <div className="task-listing-description">
                <h3 className="task-listing-title text-capitalize" onClick={(id) => props.goTo(props.id)}>{props.service ? props.service : 'Service'}</h3>
                <ul className="task-icons">
                    <li><i className="icon-material-outline-location-on"></i> {props.address ? props.address : 'Address'}</li>
                    <li><i className="icon-material-outline-access-time"></i> {props.createdAt}</li>
                </ul>
                < p class = "task-listing-text" >{props.description}</p>
                <div className="task-tags">
                   Delivery date: <span>{props.date}</span>
                </div>
            </div>

        </div>

        <div className="task-listing-bid">
            <div className="task-listing-bid-inner">
                <div className="task-offers">
                    
                </div>
                <span className="button button-sliding-icon ripple-effect" onClick={(id) => props.bid(id)}>Bid Now <i className="icon-material-outline-arrow-right-alt"></i></span>
            </div>
        </div>
    </div>
  )
}

export default Single

