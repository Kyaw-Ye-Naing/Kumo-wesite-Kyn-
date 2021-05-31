import React from "react";
import colors from "./colors";
import fonts from "./fonts";
import { useMediaPredicate } from "react-media-hook";

const Homepageimage = (props) => {
  const { data, img1, img2, isCircle, isReverse} = props;
  const greaterThan1025=useMediaPredicate("(min-width:1025px)");

  return (
    <div className="d-flex justify-content-between centralized" style={{ margin: "30px 30px 0 0" }}>
      <div className="m-container" style={{width:greaterThan1025?"82%":null}}>
        <h3
          className="title"
          style={{
            color: "#084C95",
            textAlign: "left",
            font: "normal normal normal 30px/36px Microsoft Sans Serif",
          }}
        >
          {data.title}
        </h3>
        <div className=" p-0 m-0 m-title" style={{ display: "block" }}></div>
        <div
          className="m-paragraph"
          style={{
            fontSize: "18px",
            textAlign:"justify"
          }}
        >
          <p
            className=" ms-3 me-3"
            style={{ color: colors.TitleColor, whiteSpace: "wrap" }}
          >
            {data.description1}
          </p>
          <p
            className=" ms-3 me-2"
            style={{ color: colors.TitleColor, whiteSpace: "wrap" }}
          >
            {data.description2}
          </p>
          <p
            className=" ms-3 me-2"
            style={{ color: colors.TitleColor, whiteSpace: "wrap" }}
          >
            {data.description3}
          </p>
        </div>
      </div>
      <div className="">
        {/* style={{ float: isReverse ? 'left' : 'right' }} */}
        {isCircle == false ? null : (
          <div
            className="px-0 mx-0 my-4 image-box"
            style={{
              maxHeight: 100,
              position: "relative",
              display: "block",
              marginLeft: -50,
            }}
            // style={{ maxHeight: 100, position: "relative", display: "block", marginLeft: -50,float:"right" }}
          >
            <div className="px-3 mx-3  d-flex  justify-content-start align-items-center crm-container" style={{}}>
              <img
                className="img-fluid shadow crm1"
                src={img1}
                alt="view"
                style={{
                  width: 175,
                  height: 175,
                  borderRadius: "50%",
                  position: "absolute",
                  left: -4,
                  top: 10,
                }}
              />
            </div>
            <div className="px-4 mx-4 d-flex justify-content-start align-items-center" style={{ marginTop: -40 }}>
              <img
                className="img-fluid shadow crm"
                src={img2}
                alt="view"
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: "50%",
                  marginLeft: "52px",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepageimage;
