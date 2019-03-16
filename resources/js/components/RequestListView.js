import React, { Component } from "react";

import avataicon from "../assets/avatar3.png";
import Single from "./single";
//import plann from "../../../public/images/planning.jpg";

class RequestList extends Component {
    render() {
        return (
            <>
                <div className="tasks-list-container compact-list margin-top-35">
                       
                            {this.props.isCat === 'false' ? this.props.requests.map((req, i) => <Single key={i} service={req.service.name} bid={(id) => this.props.bid(req.id)} createdAt={req.created_at} id={req.id} goTo={(id) => this.props.goTo(req.id)} address={req.address} description={req.description} /> )
                                : this.props.requests.map((req) => req.requests.map((res) => <h2>hello</h2>) )}
                        
                </div>
               
            </>
        );
    }
}

export default RequestList;
