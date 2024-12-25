import React from 'react';
import './folio.css';

const PortfolioGrid = () => {
  const dataurl = [
    {
      bgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/66b4b410cf2e49196cd1fb4b_phulkki.png",
      imgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/66996413e280fcd1415ecccd_Phulkki.svg",
      desc: "Innovating the Digital Experience in Fashion Tech"
    },
    {
      bgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/66b4b42bf0f1cf1cc2a94e0b_orient%20technology.png",
      imgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/6699642abcdf33c419d9da4a_Orient%20Technologies.svg",
      desc: "Revolutionizing Data Analytics with Insightful Tech"
    },
    {
      bgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/66b4b45cf261855a2a5de21f_Mandap.png",
      imgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/66996403b56098d72873eba5_Mandap.svg",
      desc: "Innovating the Digital Experience in Fashion Tech"
    } ,
    {
      bgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/66bc5ed7930cd1dd728f7e1d_Damensch%20Mockup%20New-p-800.png",
      imgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/6699640ce59ed4f7c83505bd_DaMensch.svg",
      desc: "Seamless Fashion Integration with E-Commerce Excellence"
    },
    {
      bgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/66ced5adccc857782565ce79_Mediwave%20Brand-p-800.png",
      imgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/669963fa3a674844ac8672fa_Mediwave.svg",
      desc: "Revitalizing Medical Spaces with Artful Designs"
    },
    {
      bgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/66ced5d2b46396e2f9ef118e_Surround%20Swar%20Brand-p-800.png",
      imgurl: "https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99de/66aa06e7add3e46f6280caca_image%2031.svg",
      desc: "Boosting High-End Media Presence for AV Products"
    }
  ];

  return (
    <div>


      

<div className="PortfolioGrid">
      {dataurl.map((item, index) => (
        <div
          key={index}
          className="child"
          style={{ backgroundImage: `url(${item.bgurl})` }}
        >
          <div className="child-content">
            <img className="child-img" src={item.imgurl} alt="Logo" />
            <div className="desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
    
    </div>
    
  );
};

export default PortfolioGrid;
