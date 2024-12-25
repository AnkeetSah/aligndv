import React from "react";
import "./Marque.css";

const Marque = () => {
  return (
    <div className="position-relative marquee-container d-none d-sm-block">
      {/* Marquee 1 */}
      <div className="marquee">

        <span ><div><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /></div><b>100% Client Retention</b></span>
        <span><div><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /></div><b>30+ Projects</b></span>
        <span><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /><b>15+ Clients</b></span>
        

        {/* Duplicate items for seamless scrolling */}
        <span ><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /><b>100% Client Retention</b></span>
        <span><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /><b>30+ Projects</b></span>
        <span><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /><b>15+ Clients</b></span>
        

      </div>

      {/* Marquee 2 for alternate flow (optional) */}
      <div className="marquee marquee2">
      <span ><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /><b>100% Client Retention</b></span>
        <span><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /><b>30+ Projects</b></span>
        <span><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /><b>15+ Clients</b></span>
        

        {/* Duplicate items for seamless scrolling */}
        <span ><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /><b>100% Client Retention</b></span>
        <span><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /><b>30+ Projects</b></span>
        <span><img src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66c2d4cc93428761c909728f_Star.svg" alt="" /><b>15+ Clients</b></span>
        

      </div>
    </div>
  );
};

export default Marque;
