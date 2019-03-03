import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Input} from 'antd';

const Search = Input.Search;

const ServiceSidebar = (props) => {
  return (
    <div>
       {/* <Search
        placeholder="input search text"
        onSearch={(value) => props.search(value)}
        enterButton
        /> */}
        <h4 className="mt-3 mb-3">Select Category</h4>
       <ListGroup flush className="mt-3">
            {props.categories.map((category, i) => <ListGroupItem className="text-capitalize" key={i} onClick={() => props.clicked(category.id)} tag="a" >{category.name}</ListGroupItem>)}
       </ListGroup>
    </div>
  )
}

export default ServiceSidebar
