import React from "react";
import "./Services.css";
import "./Client.css";
import ClientSlider from "./ClientSlider";
const Client = () => {
  return (
    <div className="clientContainer">
      <div className="ccontainer ">
        <div
          className="flex justify-between items-center mb-12 flex-wrap  review  "
         
        >
          <div>
            <h1 style={{ marginTop: "-30px" }} className="titleAbout">
              Client
              <br />
              Reviews
            </h1>
          </div>
          <div className="clientp">
            <p className="sh1-paragraph">
              Client who have experienced a heavy <br />
              transformational growth with Align
            </p>
            <p className="sh1-paragraph mt-5">//////////////////</p>
          </div>
        </div>

        <ClientSlider />
      </div>
    </div>
  );
};

export default Client;
