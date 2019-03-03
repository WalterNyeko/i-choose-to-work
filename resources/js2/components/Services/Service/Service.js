import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';
import {Link} from 'react-router-dom'

const Service = (props) => {
  return (
    <div className="mb-3">
      <Card body outline color="danger">
        <CardTitle className="text-capitalize">{props.title}</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Link to={props.link} className="btn btn-danger">Request</Link>
      </Card>
    </div>
  );
};

export default Service;