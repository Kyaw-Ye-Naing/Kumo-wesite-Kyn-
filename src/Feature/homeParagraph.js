import React, { useEffect, useState } from "react";
import colors from "./colors";
import fonts from "./fonts";
import { useMediaPredicate } from "react-media-hook";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeParagraph = (props) => {
  const { imgRadius, isReverse, imgSrc, imgWidth, data, imgheight} = props;
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const lessThan610 = useMediaPredicate("(max-width: 610px)");
  useEffect(() => {
    window.onresize = (e) => {
      setPageWidth(e.target.innerWidth);
    };
  });
  return (
    <div>
 <div className="home-destop-view" style={{ margin: "30px 30px 0 0" }}>
      <div
        className="image-box"
        style={{ float: isReverse ? "left" : "right" }}
      >
        <img
          className=" img-fluid"
          src={imgSrc}
          style={{
            display: "block",
            // width: lessThan610?300:imgWidth,
            width: imgWidth,
            // height: '185px',
            boxShadow: "10px 10px 10px #00000029",
            borderRadius: "41px",
            opacity: 1,
            // marginTop: -30
          }}
        />
      </div>
      <div className="m-container">
        <h3
          className="title "
          style={{
            color: "#084C95",
            textAlign: isReverse ? "right" : "left",
            font: "normal normal normal 30px/36px Microsoft Sans Serif",
          }}
        >
          {data.title}
        </h3>
        <div
          className="dropdown-divider-1 ud_line p-0 m-0 m-title "
          style={{ display: "block" }}
        ></div>
        <div className="m-paragraph px-2" style={{textAlign:"justify"}}>
          <p style={{ color: colors.ParagraphColor }}>{data.description1}</p>
          <p style={{ color: colors.ParagraphColor }}>{data.description2}</p>
          <p style={{ color: colors.ParagraphColor }}>{data.description3}</p>
        </div>
      </div>
    </div>

    <div className="home-mobile-view" style={{ margin: "30px 30px 0 0" }}>
      <div className="d-flex flex-column">
      <h3
          className="title "
          style={{
            color: "#084C95",
            textAlign: isReverse ? "right" : "left",
            font: "normal normal normal 30px/36px Microsoft Sans Serif",
          }}
        >
          {data.title}
        </h3>
        <div
          className="dropdown-divider-1 ud_line p-0 m-0 m-title "
          style={{ display: "block" }}
        ></div>
      <div
        className="image-box d-flex justify-content-center align-items-center mt-2"
        style={{ float: isReverse ? "left" : "right" }}
      >
        <img
          className=" img-fluid"
          src={imgSrc}
          style={{
            display: "block",
            width: lessThan610?400:imgWidth,
            // height: '185px',
            boxShadow: "10px 10px 10px #00000029",
            borderRadius: "41px",
            opacity: 1,
            // marginTop: -30
          }}
        />
      </div>
      <div className="m-container">
        
        <div className="m-paragraph px-2" style={{textAlign:"justify"}}>
          <p style={{ color: colors.ParagraphColor }}>{data.description1}</p>
          <p style={{ color: colors.ParagraphColor }}>{data.description2}</p>
          <p style={{ color: colors.ParagraphColor }}>{data.description3}</p>
        </div>
      </div>
      </div> 
    </div>
    </div>
   
  );
};

export default HomeParagraph;
