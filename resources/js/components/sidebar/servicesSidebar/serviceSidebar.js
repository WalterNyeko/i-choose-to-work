import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input} from 'antd';

const Search = Input.Search;

const ServiceSidebar = (props) => {
  return (
    <div>
        <h4 className="mt-3 mb-3">Select Category</h4>
       <ListGroup flush className="mt-3">
            <ListGroupItem className="text-capitalize"  onClick={() => props.clickedAll()} tag="a" >All</ListGroupItem>
            {props.categories.map((category, i) => <ListGroupItem className="text-capitalize" key={i} onClick={() => props.clicked(category.id)} tag="a" >{category.name}</ListGroupItem>)}
       </ListGroup>
    </div>
  )
}

export default ServiceSidebar
