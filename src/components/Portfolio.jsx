import React from "react";
import "./Services.css";
import PortfolioGrid from "./PortfolioGrid";

const Portfolio = () => {
  return (
    <div className="mb-16">
      <div className="portContainer">
        <div className="porthead ">
          <div>
            <h1 style={{ marginTop: "-30px" }} className="titleAbout pabout">
              Our <br />
              Portfolio
            </h1>
          </div>
          <div className="clientp">
            <p className="sh1-paragraph">
              Explore how we’ve guided brands to shine <br /> digitally & achieve remarkable growth and <br /> exceeding expectations.
            </p>
          </div>
        </div>
      </div>

      <PortfolioGrid />

      {/* View All Work Button */}
      <button>View All Our Work <i className="fa fa-arrow-right"></i></button>
    </div>
  );
};

export default Portfolio;
