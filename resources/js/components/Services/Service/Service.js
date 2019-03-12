import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import { Api } from '../../../constants';

const Service = (props) => {
  return (
    <div>
      <Link to={`/book/${props.id}`} className="blog-compact-item-container">
        <div className="blog-compact-item">
          <img src="images/blog-04a.jpg" alt=""/>
          <span className="blog-item-tag text-capitalize">{props.name}</span>
          <div className="blog-compact-item-content">
            
            <button className="btn btn-outline-danger btn-block">Book Now</button> <br/>
            <p>{props.description ? props.description : 'Get work done'}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service