import React, { useEffect, useState } from 'react'
import Font from './fonts'
import Color from './colors'
import { useMediaPredicate } from "react-media-hook";


const AboutParagraph = (props) => {
    const { imgRadius, isReverse, imgSrc, imageWidth, data,imgheight } = props;
    const [pageWidth, setPageWidth] = useState(window.innerWidth)
    const lessThan540=useMediaPredicate("(max-width:540px)");

    useEffect(() => {
        window.onresize = (e) => {
            setPageWidth(e.target.innerWidth)
        }
    })
    return (
        <div>
<div className='col-12 mt-3 about-destop-view'>
            <div className={`d-flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} flex-xl-nowrap flex-lg-nowrap flex-md-wrap flex-sm-wrap flex-xs-wrap flex-wrap `} >
            <div className='' style={{ display: 'inline-block', verticalAlign: 'top' }}>
                    <img className='pl-3 about-image' src={imgSrc} alt="img" style={{ width: imageWidth, borderRadius: imgRadius, border: '1px solid #C5B3E5',backgroundColor:"#d2edff" }} />
                </div>
                <div className='m-container px-2' style={{ display: 'inline-block'}}>
                    <div className={`${isReverse && 'me-2'} about-title`} style={{ whiteSpace: 'nowrap', color: Color.TitleColor, fontSize: Font.heading12, fontWeight: 400 }}>{data.title}</div>
                    <div className={`m-title border-0 mx-1`} style={{ backgroundColor: '', height: "", width:"100%",marginLeft: -30 }}></div>
                    <div className='d-flex flex-sm-wrap flex-xs-wrap   me-2 description' style={{ color: Color.ParagraphColor, fontSize: '18px',textAlign:"justify"  }}>
                    {/* paddingRight:"50px" */}
                        {data.description1}
                    </div>
                    <div className=' me-2 mt-1' style={{ textAlign:"justify",color: Color.ParagraphColor, fontSize: '18px' }}>
                        {data.description2}
                    </div>
                    <div className='me-2 mt-1' style={{ textAlign:"justify",color: Color.ParagraphColor, fontSize: '18px'}}>
                        {data.description3}
                    </div>                     
                </div>

                
             </div>
         </div>

         <div className='col-11 mt-3 about-mobile-view'>
            <div className=" d-flex flex-column" >
            <div className="me-2 about-title"
                     style={{ whiteSpace: 'nowrap', color: Color.TitleColor, fontSize: Font.heading12, fontWeight: 400 }}>{data.title}
            </div>
            <div className={`m-title border-0 mx-1`} style={{ backgroundColor: '', height: "", width:"100%",marginLeft: -30 }}></div>
            <div className='mt-2' style={{ display: 'inline-block', verticalAlign: 'top' }}>
                    <img className='pl-3 about-image' src={imgSrc} alt="img"
                     style={{ width: lessThan540?"450px":"570px", borderRadius: imgRadius, border: '1px solid #C5B3E5',backgroundColor:"#d2edff" }} />
            </div>
                <div className='m-container px-2' style={{ display: 'inline-block'}}>
                  
                   
                    <div className='d-flex flex-sm-wrap flex-xs-wrap   me-2 description' style={{ color: Color.ParagraphColor, fontSize: '18px',textAlign:"justify"  }}>
                    {/* paddingRight:"50px" */}
                        {data.description1}
                    </div>
                    <div className=' me-2 mt-1' style={{ textAlign:"justify",color: Color.ParagraphColor, fontSize: '18px' }}>
                        {data.description2}
                    </div>
                    <div className='me-2 mt-1' style={{ textAlign:"justify",color: Color.ParagraphColor, fontSize: '18px'}}>
                        {data.description3}
                    </div> 
                    <div className='me-2 mt-1' style={{ textAlign:"justify",color: Color.ParagraphColor, fontSize: '18px'}}>
                    To provide satisfying products to our customers, we utilize object-oriented analysis, design, and testing methodologies and ensure seamless integration and
                        traceability between the project’s requirements, design, development, quality assurance, and delivery.
                        Our goal is not only to achieve local and global customers but also to support the development of the domestic Information Technology Industry. 
                    </div>   
                                    
                </div>

                
             </div>
         </div>
        </div>
        
        // <div className='col-11 my-4'>
        //     <div className={`d-flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} flex-xl-nowrap flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-xs-wrap flex-wrap mx-4 justify-content-center`} >
        //         <div className='image-box' style={{ display: 'inline-block', verticalAlign: 'top' }}>
        //         <img className='col-md-12 col-xl-12 image-fluid shadow' src={imgSrc} alt="img" style={{ width: imageWidth, borderRadius: imgRadius, border: '1px solid #C5B3E5',height:imgheight }} />
        //         </div>
        //         <div className='mt-3 m-container' style={{ display: 'inline-block' }}>
        //             <div className={`${pageWidth < 768 ? 'text-center' : isReverse && ' text-end'} ms-2`} style={{ whiteSpace: 'nowrap', color: Color.TitleColor, fontSize: Font.heading12, fontWeight: 400 }}>{data.title}</div>
        //             <div className={`m-title border-0 px-3`} style={{ backgroundColor: '', height: "", width:"100%",marginLeft: -15 }}></div>
        //             <div className='ms-3 me-2' style={{ color: Color.ParagraphColor, fontSize: '15px' }}>
        //                 {data.description}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        
    )
}
export default AboutParagraph;