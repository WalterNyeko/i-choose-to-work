import React, { Component } from "react";
import "../../../public/css/my.css";
import ServiceComponent from "./serviceComp";
import HowItWorks from "./HowItWorks";
import { Jumbotron, Button } from "reactstrap";
import FooterComp from "./footerComponent";

class HeaderHeader extends Component {
    render() {
        return (
            <div>
                <header className="headermain">
                    <div className="headerfilter">
                        <div>
                            <Jumbotron
                                style={{
                                    backgroundColor: "#11101000",
                                    color: "snow"
                                }}
                                className="text-center"
                            >
                                <h1 className="display-3">
                                    Welcome to ichuzz2work
                                </h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Tenetur, similique
                                    aspernatur!
                                </p>
                                <hr className="my-2" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Velit, totam odio sint
                                    atque saepe minus
                                </p>
                                <p className="lead">
                                    <Button
                                        className="myBtnwhiteborder"
                                        color="danger"
                                        size="lg"
                                    >
                                        Become Service Provider
                                    </Button>{" "}
                                    <Button
                                        className="myBtnwhiteborder"
                                        color="danger"
                                        size="lg"
                                    >
                                        Request Service
                                    </Button>
                                </p>
                            </Jumbotron>
                        </div>
                    </div>
                </header>
                <ServiceComponent />
                <HowItWorks />
                <FooterComp />
            </div>
        );
    }
}

export default HeaderHeader;
