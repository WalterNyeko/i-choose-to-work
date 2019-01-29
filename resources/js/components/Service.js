import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';

const Service = (props) => {
  return (
    <div className="mb-3">
      <Card body outline color="danger">
        <CardTitle className="text-capitalize">{props.title}</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <a href={props.link} className="btn btn-danger">Request</a>
      </Card>
    </div>
  );
};

export default Service;