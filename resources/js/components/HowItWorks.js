import React from 'react'
import { Row, Col} from "reactstrap";
import { Avatar, Divider} from 'antd';

import accounting from "./../../../public/images/accounting.png";
import collaboration from "./../../../public/images/collaboration.png";
import toolbox from "./../../../public/images/toolboxicon.png";


const HowItWorks= ()=> ( 

         <div  className="text-center" style={{width:"100%", padding:"5px", backgroundColor:"#7b9af115",color:"#000000"}}>
        <h1 style={{color:"#000000",paddingTop:"5px"}} className="text-center">How It works</h1>           
            <Row>
            <Col className="col-md-4 col-sm-12">
            <Avatar  shape="square" src={toolbox}  size={100}/>
            <p className="lead">Come with your skill sets and publish them to the world</p>
            </Col>
            <Col className="col-md-4 col-sm-12">
            <Avatar shape="square" src={collaboration}  size={100}/><br/>
            <p className="lead">We get you connect with customer in need of your service</p>
            </Col>
            <Col className="col-md-4 col-sm-12">
            <Avatar shape="square" src={accounting}  size={100}/><br/>
            <p className="lead">Link to the world and make money out of you skills</p>
            </Col>
            </Row>
            </div>
       );
 

export default HowItWorks;
