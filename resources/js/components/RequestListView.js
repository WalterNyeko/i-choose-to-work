import React, { Component } from "react";

import avataicon from "../assets/avatar3.png";
//import plann from "../../../public/images/planning.jpg";

class RequestList extends Component {
    render() {
        return (
            <>
                <style>
                    {`                     
                        .row-section{float:left; width:100%; background: #42275a;  /* fallback for old browsers */
                        background: -webkit-linear-gradient(to bottom, #734b6d, #42275a);  /* Chrome 10-25, Safari 5.1-6 */
                        background: linear-gradient(to bottom, #734b6d, #42275a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        }
                        .row-section h2{float:left; width:100%; color:#fff; margin-bottom:30px; font-size: 14px;}
                        .row-section h2 span{font-family: 'Libre Baskerville', serif; display:block; font-size:45px; text-transform:none; margin-bottom:20px; margin-top:30px;font-weight:700;}
                        .row-section h2 a{color:#d2abce;}
                        .row-section .row-block{background:#fff; padding:20px; margin-bottom:50px;}
                        .row-section .row-block ul{margin:0; padding:0;}
                        .row-section .row-block ul li{list-style:none; margin-bottom:20px;}
                        .row-section .row-block ul li:last-child{margin-bottom:0;}
                        .row-section .row-block ul li:hover{cursor:grabbing;}
                        .row-section .row-block .media{border:1px solid #d5dbdd; padding:5px 20px; border-radius: 5px; box-shadow:0px 2px 1px rgba(0,0,0,0.04); background:#fff;}
                        .row-section .media .media-left img{width:75px;}
                        .row-section .media .media-body p{padding: 0 15px; font-size:14px;}
                        .row-section .media .media-body h4 {color: #6b456a; font-size: 18px; font-weight: 600; margin-bottom: 0; padding-left: 14px; margin-top:12px;}
                        .btn-default{color:#fff; border-radius:30px; border:none; font-size:16px;} 
                    `}
                </style>
                <section className="row-section">
                    <div className="row-block">
                        <ul>
                            {this.props.isCat === 'false' ? this.props.requests.map((req, i) => <li key={i}>
                                                                    <div class="media">
                                                                        <div class="media-left align-self-center">
                                                                            <img class="rounded-circle" src={avataicon} />
                                                                        </div>
                                                                        <div class="media-body">
                                                                            <div className="d-flex justify-content-between mb-3">
                                                                                <h4 class="text-uppercase">{req.customer.name ? req.customer.name : 'Customer'}</h4>
                                                                            </div>
                                                                            <p>{req.description ? req.description : 'Some description goes here'}</p>
                                                                            <div className="d-flex justify-content-between text-capitalize">
                                                                                <h4>{req.service.name}</h4>
                                                                                <h4>{req.address}</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div class="media-right align-self-center">
                                                                            <a href="#" class="btn btn-danger">Ofer Service</a>
                                                                        </div>
                                                                    </div>
                                                                </li>)
                                : this.props.requests.map((req) => req.requests.map((res) => <h2>hello</h2>) )}
                        </ul>
                    </div>
                </section>
               
            </>
        );
    }
}

export default RequestList;
