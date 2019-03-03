import React, { Component } from "react";
import avataicon from "../../assets/avatar3.png";

class ServiceProviderList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <style>
                    {`
                .comp {
                    font-size: 16px;
                  }
                  .cardi{
        
       
                    border-radius: 2%;
                    margin: 6px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }
                  .comp ul li {
                    list-style: none;
                  }                
                `}
                </style>
                
                <div className="comp d-inline justify-content-center">
                    <div className="row justify-content-center col-lg-6 col-md-10 col-sm-12 no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="m-auto align-self-center" style={{display: "block"}}>
                            <img className="rounded-circle m-2" width="150" height="150" src={avataicon}/>
                        </div>                  
                        <div className="col-lg-8 col-md-7 col-sm-12 ml-1 p-4 d-flex flex-column position-static">
                   
                            <p className="card-text mb-auto"><h4>{this.props.name}</h4></p>
                            <p className="card-text mb-auto"> {this.props.about}</p>
                        
                
                            <div className="row d-flex col-lg-8 col-md-12 justify-content-between">
                                <div className="col-4">
                                        <a href="#" className="btn btn-outline-info m-2" role="button" aria-pressed="true">View</a>
                                </div>
                                <div className="col-4">
                                    <button  className="btn btn-outline-success m-2" role="button" onClick={() => {this.props.hire(this.props.id)}} aria-pressed="true">Hire</button>
                                </div>
                            </div>
                   
                        </div>
                  
                    </div>
                </div>
                  
            </div>
        );
    }
}

export default ServiceProviderList;
