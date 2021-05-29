import React from "react";
import { useHistory } from 'react-router-dom';
import { useMediaPredicate } from "react-media-hook";

const OurService = () => {
    const history = useHistory();
    const handleClickDtrAnz = () => history.push('/services');
    const lessThan610 = useMediaPredicate("(max-width: 610px)");
    const greaterThan1400 = useMediaPredicate("(min-width: 1400px)");
    return (
        <div >
            {/* <div className="col-lg-12 mt-2 pt-4 px-0 mx-0" >
                <div className="row justify-content-center p-0 m-0" style={{ color: "#084C95", fontSize: 14, }}>

                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-1 p-0 m-0 ">
                        <div className="p-2">
                            <div className="shadow m-0" onClick={handleClickDtrAnz} 
                            style={{ height: 120, border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 15, background: "#FFFFFF" }}>
                                <img className="center mt-3" src={"/icons/line_chart.png"} alt="view" style={{ background: "#084c95", borderRadius: 10, display: "block", margin: "auto", height: "50px" }} />
                                <div className="text-center" style={{ paddingTop:lessThan610?0:15 }}>
                                    <span className="service-text" >Data Analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-1 p-0 m-0 ">
                        <div className="p-2">
                            <div className="shadow m-0" onClick={handleClickDtrAnz} 
                            style={{ height:120, border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 15, background: "#FFFFFF" }}>
                                <img src={"/icons/globe.png"} alt="view" style={{ display: "block", margin: "auto" }} />
                                <div className="text-center" style={{ paddingTop: lessThan610?0:15 }}>
                                    <span className="service-text" >Web Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-1 p-0 m-0 ">
                        <div className="p-2">
                            <div className="shadow m-0" onClick={handleClickDtrAnz} 
                            style={{ height: 120, border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 15, background: "#FFFFFF" }}>
                                <img src={"/icons/iphone.png"} alt="view" style={{ display: "block", margin: "auto" }} />
                                <div className="text-center" style={{ paddingTop: lessThan610?0:15 }}>
                                    <span className="service-text" >Mobile Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-1 p-0 m-0 ">
                        <div className="p-2">
                            <div className="shadow m-0" onClick={handleClickDtrAnz} 
                            style={{ height: 120, border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 15, background: "#FFFFFF" }}>
                                <img src={"/icons/laptop.png"} alt="view" style={{ display: "block", margin: "auto" }} />
                                <div className="text-center" style={{ paddingTop: lessThan610?0:15 }}>
                                    <span className="service-text" >UI/UX Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-1 p-0 m-0">
                        <div className="p-2">
                            <div className="shadow m-0" onClick={handleClickDtrAnz} 
                            style={{ height:120, border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 15, background: "#FFFFFF" }}>
                                <img src={"/icons/hangar.png"} alt="view" style={{ display: "block", margin: "auto" }} />
                                <div className="text-center" style={{ paddingTop: lessThan610?0:15 }}>
                                    <span className="service-text" >Data Warehousing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
             <div className="col-lg-12 mt-2 pt-4 px-0 mx-0">
                <div className="row justify-content-around p-0 m-0" style={{ color: "#084C95", fontSize: 14, }}>

                    <div className="col-4 col-sm-4 col-md-4 col-lg-2  col-xxl-1 p-0 m-0 ">
                        <div className="p-2">
                            <div className="shadow m-0" onClick={handleClickDtrAnz} 
                            style={{ height: 120, border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 15, background: "#FFFFFF",
                            width:greaterThan1400?"150px":null
                            }}>
                                <img className="center mt-3" src={"/icons/line_chart.png"} alt="view" style={{ background: "#084c95", borderRadius: 10, display: "block", margin: "auto", height: "50px" }} />
                                <div className="text-center" style={{ paddingTop:lessThan610?0:15 }}>
                                    <span className="service-text" >Data Analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2  col-xxl-1 p-0 m-0 ">
                        <div className="p-2">
                            <div className="shadow m-0" onClick={handleClickDtrAnz} 
                            style={{ height:120, border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 15, background: "#FFFFFF",
                            width:greaterThan1400?"150px":null }}>
                                <img src={"/icons/globe.png"} alt="view" style={{ display: "block", margin: "auto" }} />
                                <div className="text-center" style={{ paddingTop: lessThan610?0:15 }}>
                                    <span className="service-text" >Web Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2  col-xxl-1 p-0 m-0 ">
                        <div className="p-2">
                            <div className="shadow m-0" onClick={handleClickDtrAnz} 
                            style={{ height: 120, border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 15, background: "#FFFFFF" ,
                            width:greaterThan1400?"150px":null}}>
                                <img src={"/icons/iphone.png"} alt="view" style={{ display: "block", margin: "auto" }} />
                                <div className="text-center" style={{ paddingTop: lessThan610?0:15 }}>
                                    <span className="service-text" >Mobile Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2  col-xxl-1 p-0 m-0 ">
                        <div className="p-2">
                            <div className="shadow m-0" onClick={handleClickDtrAnz} 
                            style={{ height: 120, border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 15, background: "#FFFFFF",
                            width:greaterThan1400?"150px":null }}>
                                <img src={"/icons/laptop.png"} alt="view" style={{ display: "block", margin: "auto" }} />
                                <div className="text-center" style={{ paddingTop: lessThan610?0:15 }}>
                                    <span className="service-text" >UI/UX Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2  col-xxl-1 p-0 m-0">
                        <div className="p-2">
                            <div className="shadow m-0" onClick={handleClickDtrAnz} 
                            style={{ height:120, border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 15, background: "#FFFFFF",
                            width:greaterThan1400?"150px":null }}>
                                <img src={"/icons/hangar.png"} alt="view" style={{ display: "block", margin: "auto" }} />
                                <div className="text-center" style={{ paddingTop: lessThan610?0:15 }}>
                                    <span className="service-text" >Data Warehousing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurService;