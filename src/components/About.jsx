import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="aboutContainer flex flex-wrap">
      <div className=" h-full aboutdiv">
        <h1 className="titleAbout">About Align</h1>
        <p className="t-about">
          Align is your full-service brand designing and marketing agency,
          dedicated to driving end-to end business <br /> growth. Quick-witted,
          ambitious, and timelessly creative.
        </p>

  <div className=" flex items-center mt-7 know">
  <div className="mr-4 mt-4"> {/* Margin to space out the elements */}
     <h3>//////////////////</h3>
  </div>
  <div>
    <button className="flex items-center">
      Know About Us <i className="fa fa-arrow-right ml-2"></i> {/* Added margin-left to space the arrow */}
    </button>
  </div>
</div>

      </div>
      <div className="   imgdiv ">
        <img
          src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/671f2eb1448ca484aa8a0a7b_64c0ab96d61a175666c67a78_Untitled_Artwork%2026-p-800.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
