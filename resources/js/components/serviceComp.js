import React, { Component } from "react";
import {
    Card,
    CardImg,
  
    CardBody,
    CardTitle,
 
    Button,
    
    Row,
    Col
} from "reactstrap";


import Provisionaldata from "../../../public/data/provisionData";
import { Icon } from "antd";

class ServiceComponent extends Component {
    render() {
        return (
            <div className="text-center">
                <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                    Services Categories
                </span>
                <br />
                <div style={{ margin: "10px"}}>
                   
                        <Row>
                            {Provisionaldata.map(service=>(
                                <Col>
                                <Card style={{width:"300px",margin:"5px"}}>
                                    <CardImg
                                        top
                                        width="100%"
                                        src={service.image}
                                        alt="Card image cap"
                                    />
                                    
                                    <CardBody className="text-center">
                                        <CardTitle style={{fontSize:"20px",fontWeight:"bold"}}>{service.servicename}</CardTitle>
                                        
                                        <Button tyle={{width:"300px"}} color="danger" size="lg">
                                            Book{"  "}<Icon type="book"/>
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            ))}
                           
                           
                        </Row>
                   
                </div>
            </div>
        );
    }
}

export default ServiceComponent;
