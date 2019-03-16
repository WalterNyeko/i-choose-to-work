import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import { Api } from '../../../constants';

const Service = (props) => {
  return (
    <div>
      <Link to={`/book/${props.id}`} class="blog-compact-item-container">
        <div class="blog-compact-item">
          <img src={props.image ? props.image : 'images/blog-04a.jpg'} alt=""/>
          <span class="blog-item-tag text-capitalize">{props.name}</span>
          <div class="blog-compact-item-content">
            
            <button class="btn btn-outline-danger btn-block">Book Now</button> <br/>
            <p>{props.description ? props.description : 'Get work done'}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service