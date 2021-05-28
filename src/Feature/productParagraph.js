// import React, { useEffect, useState } from 'react'
// import Font from './fonts'
// import Color from './colors'

// const ProductParagraph = (props) => {
//     const { imgRadius, isReverse, imgSrc, imageWidth, data,imgheight } = props;
//     const [pageWidth, setPageWidth] = useState(window.innerWidth)

//     useEffect(() => {
//         window.onresize = (e) => {
//             setPageWidth(e.target.innerWidth)
//         }
//     })

//     return (
//         <div className='my-4'>
//             <div className={`d-flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} flex-xl-nowrap flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-xs-wrap flex-wrap mx-4 justify-content-center`} >
//                 <div className='row ms-3 me-2'>
//                 <div className='col-6 image-box' style={{ display: 'block'}}>
//                     <img className='shadow' src={imgSrc} alt="img" style={{ width: imageWidth, borderRadius: imgRadius,height:imgheight, border: '1px solid #C5B3E5' }} />
//                 </div>
//                 <div className='col-5 ms-3 me-2 m-container' style={{ display: 'block' }}>
//                     <div /*className={`${pageWidth < 768 ? 'text-right' : isReverse && ' text-end'} ms-5`}*/className='pl-2' style={{ whiteSpace: 'nowrap', color: Color.TitleColor, fontSize: Font.heading12, fontWeight: 400 }}>{data.title}</div>
//                     <div className={`dropdown-divider m-title border-0 `} style={{ backgroundColor: '', height: "2px"}}></div>
//                     <div className='ms-3 me-2' style={{color: "#084C95", fontWeight:600,fontSize: '15px' }}>
//                 <p style={{ }}>{data.description}</p>
//                 </div>
//             </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default ProductParagraph;


import React from "react";
import colors from "./colors";
import fonts from "./fonts";

const ProductParagraph = props => {
    const { data, imgSrc, imgWidth, isReverse,imgheight } = props

    return (
        < div  style={{ margin: '30px 30px 0 0' }}>
            <div className='' style={{ float: isReverse ? 'left' : 'right' }}><img className=' img-fluid' src={imgSrc} style={{
                display: 'block', width: imgWidth,
                height:imgheight,
                // height: '185px',
                // boxShadow: '10px 3px 10px #00000029',
                borderRadius: '41px',
                opacity: 1,
                paddingRight:20,
                // marginTop: -30

            }} /></div>
            <div className="m-container">
                <h3 className="title" style={{ color: '#084C95', textAlign: isReverse ? 'right' : 'left', font: 'normal normal normal 30px/36px Microsoft Sans Serif' }} >{data.title}</h3>
                <div className=" p-0 m-0 m-title" style={{ display: 'block' }}></div>
                <div className='m-paragraph' style={{
                    fontSize: "18px"
                }}>
                    <p className=' ms-3 me-3' style={{ color: colors.TitleColor, whiteSpace:'wrap' }}>{data.description1}</p>
                    <p className=' ms-3 me-2' style={{ color: colors.TitleColor, whiteSpace:'wrap' }}>{data.description2}</p>
                    <p className=' ms-3 me-2' style={{ color: colors.TitleColor , whiteSpace:'wrap'}}>{data.description3}</p>
                </div>
            </div>
        </div >
    )
}

export default ProductParagraph
