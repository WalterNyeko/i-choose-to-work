import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';

const Service = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={require('../../../assets/service.jpg')} alt="Card image cap" />
        <CardImgOverlay style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <CardTitle className="text-uppercase">{props.name ? props.name : 'Service Title'}</CardTitle>
          <CardText>{props.description ? props.description : 'Get work done by pros'}</CardText>
          <Button color="danger" onClick={(id) => props.click()} style={{ marginTop: '1em' }}>Request</Button>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Service