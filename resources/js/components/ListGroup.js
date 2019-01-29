import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ListGroupo = (props) => {
    return(
        
        <ListGroupItem onClick={props.onclick} tag="button" action>{props.name}</ListGroupItem>

    )
}

export default ListGroupo;