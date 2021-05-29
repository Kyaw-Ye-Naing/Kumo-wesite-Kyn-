import React from "react";
import { useMediaPredicate } from "react-media-hook";

export default function ThreeImage(){
  const greaterThan1360 = useMediaPredicate("(min-width: 1367px)");
  const lessThan380 = useMediaPredicate("(max-width: 380px)");
  const greaterThan698 = useMediaPredicate("(min-width: 698px)");
  const greaterThan750=useMediaPredicate("(min-width:750px)");
        return(
            <div>
            <div
            className="col-lg-3 col-xl-12 col-md-12 px-2 desktop"
            style={{ maxHeight: 600, position: 'relative', zIndex: -1,
          marginLeft:greaterThan1360?"-2rem":"0rem",
          marginTop:greaterThan750?"0rem":"1.5rem"
          }}
          >
            <div
              className="d-flex justify-content-end align-items-start "
              style={{}}
            >
              <img
                className=" shadow acbel"
                src={"/acbel.jpeg"}
                alt="view"
                style={{ width: greaterThan1360?"550px":"400px", 
                height: greaterThan1360?"230px":"210px", 
                marginRight:lessThan380?"20px":"1px",
                borderRadius: 17, right: -500}}
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
                  marginLeft:lessThan380?"20px":"1px",
                  borderRadius: 17,
                  position: "absolute",
                  right: 150
                }}
              />
            </div>
          </div>
        
          <div
            className="col-lg-3 col-xl-12 col-md-12 px-2 mobile-image"
            style={{ maxHeight: 600, position: 'relative', zIndex: -1,marginLeft: "6rem",marginTop:"1rem" }}
          >
            <div
              className="d-flex justify-content-end align-items-start"
              style={{}}
            >
              <img
                className=" shadow acbel"
                src={"/acbel.jpeg"}
                alt="view"
                style={{ width:"230px",  borderRadius: 17, right: -500}}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{}}
            >
              <img
                className=" shadow CRM"
                src={"/crm.jpeg"}
                alt="view"
                style={{
                  width: "250px",
                  height:"160px",
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
                  width: "250px",
                  height: "170px",
                  borderRadius: 17,
                  position: "absolute",
                  right: 120
                }}
              />
            </div>
          </div>
          
           <div
            className="col-lg-3 col-xl-12 col-md-12 px-2 medium-image"
            style={{ maxHeight: 600, position: 'relative', zIndex: -1,marginLeft:lessThan380?"2rem":"7rem",marginTop:"1rem",
            display:greaterThan698?"none":"block" }}
          >
            <div
              className="d-flex justify-content-end align-items-start"
              style={{}}
            >
              <img
                className=" shadow acbel"
                src={"/acbel.jpeg"}
                alt="view"
                style={{ width:"230px",  borderRadius: 17, right: -500}}
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
                  width: "250px",
                  height:"160px",
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
                  width: "250px",
                  height: "170px",
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