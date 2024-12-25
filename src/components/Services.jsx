import React from "react";

import "./Services.css";
import Slider from "./Slider";

const Services = () => {
  return (
    <div className="serviceContainer ">


      <div   className="   written written1  "    >
        <div>       <h1  className="titleAbout">  Our <br /> Services    </h1>  </div>
         <div><p className="sh1-paragraph ">     Designed to capture and express your <br /> brand's essence,  ensuring it's not only <br /> seen but felt.{" "} </p>  </div>
      </div>


      <div className="written written2 " >
        <Slider />
      </div>


    </div>
  );
};

export default Services;
