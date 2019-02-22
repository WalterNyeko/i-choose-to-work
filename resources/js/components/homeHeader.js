import React, { Component } from "react";
import "../../../public/css/my.css";
import { Jumbotron, Button } from "reactstrap";


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
                                <h2 className="display-3">
                                    Welcome to ichuzz2work
                                </h2>
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
                                        className="Btnwhiteborder"
                                        color="danger"
                                        size="lg"
                                    >
                                        Become Service Provider
                                    </Button>{" "}
                                    <Button
                                        className="Btnwhiteborder"
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
                
            </div>
        );
    }
}

export default HeaderHeader;
