import React from 'react'
import { Row, Col} from "reactstrap";
import { Avatar} from 'antd';

import accounting from "./../../../public/images/icons/icons8-accounting-100-2.png";
import collaboration from "./../../../public/images/icons/icons8-collaboration-100-2.png";
import toolbox from "./../../../public/images/icons8-toolbox-400.png";


const HowItWorks= ()=> ( 

         <div  className="text-center" style={{width:"100%"}}>
            <h1>How It works</h1>
            <Row>
            <Col className="col-md-4">
            <Avatar>
                <img src={toolbox} width="100px" height="100px"/>
            </Avatar>
            <p className="lead">Come with your skill sets and publish them to the world</p>
            </Col>
            <Col className="col-md-4">
            <Avatar shape="square" src={collaboration}  size={100}/><br/>
            <p className="lead">We get you connect with customer in need of your service</p>
            </Col>
            <Col className="col-md-4">
            <Avatar shape="square" src={accounting}  size={100}/><br/>
            <p className="lead">Link to the world and make money out of you skills</p>
            </Col>
            </Row>
            </div>
       );
 

export default HowItWorks;
