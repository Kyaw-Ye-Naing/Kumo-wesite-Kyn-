import React from "react";
import { useMediaPredicate } from "react-media-hook";

export default function ThreeImage(){
  const greaterThan1360 = useMediaPredicate("(min-width: 1370px)");
 
        return(
            <div>
            <div
            className="col-lg-3 col-xl-12 col-md-12 px-2 desktop"
            style={{ maxHeight: 600, position: 'relative', zIndex: 1}}
          >
            <div
              className="d-flex justify-content-end align-items-start "
              style={{}}
            >
              <img
                className=" shadow acbel"
                src={"/acbel.jpeg"}
                alt="view"
                style={{ width: greaterThan1360?"550px":"400px", height: greaterThan1360?"230px":"210px", borderRadius: 17, right: -500}}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{}}
            >
              <img
                className=" shadow CRM "
                src={"/crm.jpeg"}
                alt="view"
                style={{ width: greaterThan1360?"550px":"400px", height: greaterThan1360?"230px":"210px",
                  borderRadius: 17,
                  position: "absolute",
                  right: 100
                  
                }}
              />
            </div>
            <div
              className="d-flex justify-content-start align-self-end"
              style={{}}
            >
              <img
                className="shadow ibpem"
                src={"/ibpemwhite.jpeg"}
                alt="view"
                style={{width:
                  greaterThan1360?"550px":"400px", height: greaterThan1360?"230px":"210px",
                  borderRadius: 17,
                  position: "absolute",
                  right: 150
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-xl-12 col-md-12 px-2 mobile-image"
            style={{ maxHeight: 600, position: 'relative', zIndex: 1 }}
          >
            <div
              className="d-flex justify-content-end align-items-start "
              style={{}}
            >
              <img
                className=" shadow acbel"
                src={"/acbel.jpeg"}
                alt="view"
                style={{ width: greaterThan1360?"550px":"400px", height: greaterThan1360?"250":"210px", borderRadius: 17, right: -500}}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{}}
            >
              <img
                className=" shadow CRM "
                src={"/crm.jpeg"}
                alt="view"
                style={{
                  width: "400px",
                  height: 210,
                  borderRadius: 17,
                  position: "absolute",
                  right: 100
                  
                }}
              />
            </div>
            <div
              className="d-flex justify-content-start align-self-end"
              style={{}}
            >
              <img
                className="shadow ibpem view"
                src={"/ibpemwhite.jpeg"}
                alt="view"
                style={{
                  width: "400px",
                  height: 210,
                  borderRadius: 17,
                  position: "absolute",
                  right: 120
                }}
              />
            </div>
          </div>

        </div>
        )
}