import React from "react";
import { Icon } from "antd";
import {
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from "reactstrap";


const FooterComp = () => (
    <div className="footerlayer">
        <Row>
            <Col className="col-md-3">
                <ListGroup style={{ backgroundColor: "#00000000" }}>
                    <ListGroupItem style={{ backgroundColor: "#00000000" }}>
                        <ListGroupItemHeading
                            style={{ backgroundColor: "#00000000" }}
                        >
                            <h3>
                                <Icon
                                    type="alert"
                                    theme="twoTone"
                                    twoToneColor="#ffff00"
                                />{" "} {'\u2728'}{" "}
                                ichuzz to work
                            </h3>
                        </ListGroupItemHeading>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col style={{ backgroundColor: "#00000000" }} className="col-md-3">
                <ListGroup style={{ backgroundColor: "#00000000" }}>
                    <ListGroupItem style={{ backgroundColor: "#00000000" }} className="catandpat text-center">
                        <ListGroupItemHeading
                            style={{ backgroundColor: "#00000000" }}
                        >
                            <h3 className="text-center"> Service Categories</h3>
                        </ListGroupItemHeading>
                        <ListGroupItemText tag="a" href="#">Category</ListGroupItemText>

                        <ListGroupItemText tag="a" href="#">Category</ListGroupItemText>

                        <ListGroupItemText tag="a" href="#">Category</ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col style={{ backgroundColor: "#00000000" }} className="col-md-3">
                <ListGroup style={{ backgroundColor: "#00000000" }}>
                    <ListGroupItem style={{ backgroundColor: "#00000000" }} className="catandpat text-center">
                        <ListGroupItemHeading
                            style={{ backgroundColor: "#00000000" }}
                        >
                            <h3 className="text-center">ichuzz2work Parterns</h3>
                        </ListGroupItemHeading>
                        <ListGroupItemText tag="a" href="#">Partern</ListGroupItemText>

                        <ListGroupItemText tag="a" href="#">Partern</ListGroupItemText>

                        <ListGroupItemText tag="a" href="#">Partern</ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col className="col-md-3">
                <ListGroup style={{ backgroundColor: "#00000000" }}>
                    <ListGroupItem style={{ backgroundColor: "#00000000" }}>
                    <ListGroupItemHeading
                            style={{ backgroundColor: "#00000000" }}
                        >
                            <h3 className="text-center">Social Media Links</h3>
                        </ListGroupItemHeading>
                        <ListGroupItemHeading
                            style={{ backgroundColor: "#00000000" }}
                        >
                        <div  className="listclass text-center">
                            <ul
                                style={{ backgroundColor: "#00000000" }}
                               
                            >
                                <li>
                                    <a href="#">
                                        <Icon type="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Icon type="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Icon type="linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Icon type="google-plus" />
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </ListGroupItemHeading>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
    </div>
);

export default FooterComp;
