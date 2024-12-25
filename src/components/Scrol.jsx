import React from "react";
import "./Scrol.css";

const Scrol = () => {
  const images = [
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629e082954643af8b0c85_Group%2057.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a62b568545107cdb6d2fb8_65e05fc48b10765220bdf224_Group%2048097203.png",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629df8b939a6f0ff40e84_image%2030.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629e00692106cb9b24066_image%2031.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629e0aeb29192b7bc75ac_image%2032.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629df438c12d1775815cc_image%2033.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629df0850fb64f5e66ba5_Group%201000003410.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629e01dec5717a07146f9_Group%201000003407.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629dfaeb29192b7bc752c_Group%2048096826.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629dfda21c45e2c44a412_Group.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629e0752ea57968e8072a_Group%201000003409.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a62d53752ea57968e9fd82_Group%201000003408.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629e0c13e4846eea874d7_Phulkki%20Logo.svg",
    "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/66a629df0650a2602e97b4e7_Group%201000003411.svg",
  ];

  return (
    <div className="position-relative marquee-container d-none d-sm-block">
      {/* Marquee 1 */}
      <div className="scrol">
        {images.map((src, index) => (
          <span key={index}>
            <div>
              <img
                style={{ height: "40px" }} // Increased image height
                src={src}
                alt={`image-${index}`}
              />
            </div>
          </span>
        ))}

        {/* Duplicate items for seamless scrolling */}
        {images.map((src, index) => (
          <span key={`duplicate-${index}`}>
            <div>
              <img
                style={{ height: "40px" }} // Increased image height
                src={src}
                alt={`image-${index}`}
              />
            </div>
          </span>
        ))}
      </div>

      {/* Marquee 2 for alternate flow */}
      <div className="scrol scrol2">
        {images.map((src, index) => (
          <span key={index}>
            <div>
              <img
                style={{ height: "40px" }} // Increased image height
                src={src}
                alt={`image-${index}`}
              />
            </div>
          </span>
        ))}

        {/* Duplicate items for seamless scrolling */}
        {images.map((src, index) => (
          <span key={`duplicate-${index}`}>
            <div>
              <img
                style={{ height: "40px" }} // Increased image height
                src={src}
                alt={`image-${index}`}
              />
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Scrol;
