import React from 'react'
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';

const CategorySidebar = (props) => {
  const categories = props.categories;
  let categoriesList = null; 

  if(props.loading === true)
  {
    categoriesList = <Spinner color="primary" />
  }
  else
  {
    categoriesList = categories.map((cat) => <ListGroupItem
                                                    key={cat.id}
                                                    onClick={() => props.clicked(cat.id, props.pager)} 
                                                    tag="button" 
                                                    className="text-capitalize"
                                                    action>
                                                {cat.name}
                                                </ListGroupItem>)
  }
  return (
    <div>
      <h4 className="text-capitalize text-center">Select Category</h4>
      <ListGroup>
          {categoriesList}
      </ListGroup>
    </div>
  )
}

export default  CategorySidebar;
