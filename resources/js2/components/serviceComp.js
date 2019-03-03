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

import partn from "./../../../public/images/claspedhands.jpg";
import "./../../../public/css/my.css";

import { Icon, Divider } from "antd";

const serviceCat = [
    {
        image: partn
    },
    {
        image: partn
    },
    {
        image: partn
    },
    {
        image: partn
    }
];

class ServiceComponent extends Component {
    render() {
        return ( 
            <div style={{marginTop:"10px",marginBottom:"10px"}} className="text-center">
            <h1 style={{color:"#000000"}} className="text-center">
                    Services Categories
               </h1>
                
                <br />
                <div>
                    <Row className="d-flex justify-content-center">
                    {serviceCat.map(item => (
                        <Col className="d-flex justify-content-center">
                            
                                <Card style={{ backgroundColor:"#acbadf0c",width: "300px", margin: "5px" , display:"block"}}>
                                    <CardImg
                                        top
                                        width="100%"
                                        src={item.image}
                                        alt="Card image cap"
                                    />

                                    <CardBody className="text-center">
                                        <CardTitle
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            service name
                                        </CardTitle>

                                        <Button
                                            tyle={{ width: "300px" }}
                                            color="danger"
                                            size="lg"
                                        >
                                            Book{"  "}
                                            <Icon type="book" />
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
