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
                        ><h3>
                            <Icon
                                type="alert"
                                theme="twoTone"
                                twoToneColor="#ffff00"
                            />{" "}
                            ichuzz to work</h3>
                        </ListGroupItemHeading>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col style={{ backgroundColor: "#00000000" }} className="col-md-3">
                <ListGroup style={{ backgroundColor: "#00000000" }}>
                    <ListGroupItem style={{ backgroundColor: "#00000000" }}>
                        <ListGroupItemHeading
                            style={{ backgroundColor: "#00000000" }}
                        >
                            <h3> Service Categories</h3>
                        </ListGroupItemHeading>
                        <ListGroupItemText>Category</ListGroupItemText>

                        <ListGroupItemText>Category</ListGroupItemText>

                        <ListGroupItemText>Category</ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col style={{ backgroundColor: "#00000000" }} className="col-md-3">
                <ListGroup style={{ backgroundColor: "#00000000" }}>
                    <ListGroupItem style={{ backgroundColor: "#00000000" }}>
                        <ListGroupItemHeading
                            style={{ backgroundColor: "#00000000" }}
                        >
                            <h3>ichuzz2work Parterns</h3>
                        </ListGroupItemHeading>
                        <ListGroupItemText>Partern</ListGroupItemText>

                        <ListGroupItemText>Partern</ListGroupItemText>

                        <ListGroupItemText>Partern</ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col className="col-md-3">
                

                <ListGroup style={{ backgroundColor: "#00000000" }}>
                    <ListGroupItem style={{ backgroundColor: "#00000000" }}>
                        <ListGroupItemHeading
                            style={{ backgroundColor: "#00000000" }}
                        >
                           <ul style={{ backgroundColor: "#00000000" }} id="sociallist">
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
                        </ListGroupItemHeading>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
    </div>
);

export default FooterComp;
