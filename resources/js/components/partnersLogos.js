import React from "react";
import partn from "./../../../public/images/groupappointment.png";
import { Divider } from "antd";

const ParternLog = () => (
    <div style={{padding:"5px",marginTop:"10px",marginBottom:"10px"}}>
       
       <h1 style={{color:"#000000"}} className="text-center">Partners logo</h1>
      

        <marquee>
            <img
                style={{
                    padding: "5px",
                    margin: "5px",
                    width: "100px",
                    height: "100px"
                }}
                src={partn}
                alt="partners Logo"
            />
        </marquee>
    </div>
);

export default ParternLog;
