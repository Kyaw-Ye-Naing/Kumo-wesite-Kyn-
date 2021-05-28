import React, { Component } from 'react';

import Carousel from 'react-elastic-carousel';
import Item from "../Feature/Item";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
// import Carousel from 'react-multi-carousel'
import AllianceLogo from '../Images/alliancelogo.jpg';
import MarterLogo from '../Images/marter_logo.png';
import EverComm from '../Images/logo.dark.png';
import PPS from '../Images/pps beach light.png'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForward';

import ChevronLeftIcon from '../Images/left-chevron.png';

const IconCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 900 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

      const arrowStyle = {
        background: "transparent",
        border: 0,
        color: "#ffff00",
        fontSize: "15px"
      };
      const CustomLeftArrow = ({ previous }) => {
        return (
          <div
            style={{
              textAlign: "center",
              position: "relative"
            }}
          >
            <i className="bg-danger fal fa-chevron-left" onClick={previous}>TEST</i>
          </div>
      )
    };
    
    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return (
    <div style={{border: "0px",background:"" }}><ArrowBackIosIcon onClick={() => onClick()} /></div>
        )
      };

    const breakPoints = [
      { width: 0.1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 900, itemsToShow: 4 }
    ];
    return(
        <div>
             <div className="container ">
            <div className='row pt-3 justify-content-center' style={{}}>
                {/* <Carousel className='text-center' customRightArrow={<CustomRightArrow />}  responsive={responsive} swipeable={true} autoPlay={false} autoPlaySpeed={1000}   infinite={true} >
                <div>
                     <img className='img-fluid' src={EverComm} alt="spa" style={{padding: "80px 50px"   }}/>
                 </div>
                <div>
                     <img className='img-fluid' src={AllianceLogo} alt="salonroom" style={{padding: "50px 50px"   }}/>
                 </div>
                 <div>
                     <img className='img-fluid' src={MarterLogo} alt="room" style={{padding: "50px 50px"  }}/>
                 </div>
                 <div>
                     <img className='img-fluid' src={EverComm} alt="spa" style={{padding: "80px 50px"  }}/>
                 </div>
                 <div>
                     <img className='img-fluid' src={EverComm} alt="spa" style={{padding: "80px 50px"   }}/>
                 </div>
                </Carousel> */}

              <Carousel breakPoints={breakPoints}  pagination={false} infinite={true}   >
              <Item>
                     <img className='img-fluid-crso' src={EverComm} alt="salonroom" style={{padding: "80px 65px"}}/>
                 </Item>
                 <Item>
                     <img className='img-fluid-crso' src={AllianceLogo} alt="room" style={{padding: "50px 50px"  }}/>
                 </Item>
                 <Item> 
                     <img className='img-fluid-crso' src={MarterLogo} alt="spa" style={{padding: "50px 50px"  }}/>
                 </Item>
                 <Item>
                     <img className='img-fluid-crso' src={PPS} alt="spa" style={{padding: "80px 50px"   }}/>
                 </Item>
                 <Item>
                     <img className='img-fluid-crso' src={EverComm} alt="spa" style={{padding: "80px 50px"   }}/>
                 </Item>
              </Carousel>



            </div>
            </div> 
        </div>
    )
}

export default IconCarousel;