import React from 'react'
import Ipbem from '../Images/ipbem.jpeg';
import Survey from '../Images/survey.jpeg';
import CRM from '../Images/crm.jpeg';
import Chiller1 from '../Images/chiller1.jpeg';
import ACBEL from '../Images/acbel.jpeg';
import Solar from '../Images/solar.JPG'
import Paragraph from '../Feature/productParagraph'
import Footer from '../Feature/footer'
import fonts from '../Feature/fonts'
import colors from '../Feature/colors'

const Products = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center py-3 ">
            {/* <div className="container ms-3 me-2 mb-5 m-container" style={{ color: colors.ParagraphColor, fontSize: '14px', marginTop: '6%' }}>
                <div className="" style={{ whiteSpace: 'nowrap', color: colors.TitleColor, fontSize: fonts.heading12, fontWeight: 400 }}>Real-Time Machine Learning Platform </div>
                <div className={`dropdown-divider m-title border-0 p-0`} style={{ backgroundColor: '', height: '2px' }}></div>
                <div className="row mt-3">
                    <div className="col-5"> */}
            {/* <div className="d-flex justify-content-between"> */}
            {/* <div className="ms-3 me-2" style={{ color: "#084C95", fontWeight: 600 }}>Through partnerships with CapitaLand, we developed a real-time machine learning platform capable of performing real-time data analysis. This platform combines intelligent, decision-making algorithms with collected data, enabling developers to create a business solution instantaneously with the most current data. In collaboration with data scientists and experts from Taiwan and Singapore (NTU), this platform provides users real-time alarm system of chillers by learning and training machines’ behaviours through machine learning algorithms</div>
                    </div>
                    <div className="col-6 image-box">
                        <img className='shadow' src={Ipbem} width={"600px"} style={{ borderRadius: '40px', height: '230px' }} />
                    </div>
                </div>
            </div> */}
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px" }}
            >

                <Paragraph
                    imgSrc={Ipbem}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={false}
                    data={Ipbemdata}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px"}}
            >

                <Paragraph
                    imgSrc={ACBEL}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={true}
                    data={acbelData}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px" }}
            >

                <Paragraph
                    imgSrc={CRM}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={false}
                    data={Crmdata}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px"}}
            >

                <Paragraph
                    imgSrc={Chiller1}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={true}
                    data={chillerData}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px" }}
            >

                <Paragraph
                    imgSrc={Solar}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={false}
                    data={Solardata}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px"}}
            >

                <Paragraph
                    imgSrc={Survey}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={true}
                    data={surveyData}
                    imgheight={'250px'}
                />
            </div>
        </div>
        /* <div className="container ms-5 me-2" style={{ marginTop: '-4%', color: "#084C95", fontWeight: 600 }}>
            <p>The system provides chiller system’s latest information with Map View, consuming side, report analysis and control. For user management, admin can add or edit or delete users and their information and control access limit for each user.</p>
        </div>

        <div className="mb-5 ">
        <div className=" ms-5 me-4 row mt-5 ">
            <div className=" ms-3 me-2 col-5 m-container">
                <div style={{ whiteSpace: 'nowrap', color: colors.TitleColor, fontSize: fonts.heading12, fontWeight: 400 }}>CRM Modules</div>
                <div className={`dropdown-divider m-title border-0 pl-1`} style={{ backgroundColor: '', height: "2px", width: 510 }}></div>
                <div className="" style={{ color: "#084C95", fontWeight: 600 }}>
                    Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager.</div>
            </div>
            <div className=" ms-3 me-2 col-6 image-box">
                <img className='shadow' src={CRM} width={"610px"} style={{ borderRadius: '40px', height: '230px' }} />
            </div>
        </div>
        <div className="container " style={{ color: "#084C95", fontWeight: 600, marginRight: 26 }}>
            <p>Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps.
            </p>
        </div>
        </div>


        <Paragraph
            imgSrc={Chiller1}
            imageWidth={'590px'}
            imgRadius={'40px'}
            isReverse={false}
            data={chillerData}
            imgheight={'250px'}
        />
        <div className="container " style={{ color: "#084C95", fontWeight: 600, marginRight: 26, marginTop: '-3%' }}>
            <p>Moreover, clients can check daily reports through this platform for chillers’ overall performance reviews by selecting any date they would like to review. The system contains user management system to control users’ role and levels so that sites information are only accessed by authorized person. Admin can edit each user’s access level from the UI.
            </p>
        </div>


        <div className=" ms-5 me-4 row mt-5 mb-5 ">
            <div className=" ms-3 me-2 col-5 m-container">
            <div  style={{ whiteSpace: 'nowrap', color: colors.TitleColor, fontSize: fonts.heading12, fontWeight: 400 }}>Solarporean </div>
                <div className={`dropdown-divider m-title border-0 pl-1`} style={{ backgroundColor: '', height: "2px", width: 510 }}></div>
                <div className="" style={{ color: "#084C95", fontWeight: 600 }}>
                This product is dedicated for a Singapore based Solar Power Company. The main function of this product is providing source information for Singapore’s Energy Market bidding. In this single platform, various vendors are able to control their sites for power output monitoring and market bidding. As a registered vendor, the client is able to access real-time and historical prices and demand on the market. Users can also generate various reports such as quarterly revenue report, service report, activation reports and so on by selecting the time range they would like to. 
                </div>
            </div>
            <div className=" ms-3 me-2 col-6 image-box">
                <img className='shadow' src={Solar} width={"600px"} style={{ borderRadius: '40px', height: '250px' }} />
            </div>
        </div>
        <Paragraph
            imgSrc={Survey}
            imageWidth={'590px'}
            imgRadius={'40px'}
            isReverse={false}
            data={surveyData}
            imgheight={'250px'}
        />
    </div> */
    )
}
export default Products;

const Ipbemdata = {
    title: 'Real-Time Machine Learning Platform',
    description1: 'Through partnerships with CapitaLand, we developed a real-time machine learning platform capable of performing real-time data analysis. This platform combines intelligent, decision-making algorithms with collected data, enabling developers to create a business solution instantaneously with the most current data. In collaboration with data scientists and experts from Taiwan and Singapore (NTU), this platform provides users real-time alarm system of chillers by learning and training machines’ behaviours through machine learning algorithms.'
}

const acbelData = {
    title: 'Taiwan Centralized ',
    description1: 'Taiwan Centralized Project for Acbel is the centralized chiller system for monitoring Energy and power consumptions of chillers, cooling towers, zone pumps and etc. It controls multiple sites for saving opportunity and validating measurable saving results by using data visualizations and data driven approaches. It consists of MyApps and User Management system in which MyApps provides five main parts for chiller system and User Management for authorizing user access to the system.',
    description2: 'The system provides chiller system’s latest information with Map View, consuming side, report analysis and control. For user management, admin can add or edit or delete users and their information and control access limit for each user.'
}

const Crmdata = {
    title: 'CRM Modules ',
    description1: ' Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager.',
    description2: 'Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps.'
}
const Solardata = {
    title: 'Solarporean',
    description1: 'This product is dedicated for a Singapore based Solar Power Company. The main function of this product is providing source information for Singapore’s Energy Market bidding. In this single platform, various vendors are able to control their sites for power output monitoring and market bidding. As a registered vendor, the client is able to access real-time and historical prices and demand on the market. Users can also generate various reports such as quarterly revenue report, service report, activation reports and so on by selecting the time range they would like to.'
}

const chillerData = {
    title: 'Chiller Plant Analytics',
    description1: 'We have implemented Power generating and cooling system data analysis reporting to several chiller system clients: Acbel (Taiwan), PPHG (Singapore) and so on. Our Chiller Plant Analytics product includes real-time chiller monitoring system, daily reports on each chillers’ performance, and mobile alert system. Through this system, clients can monitor chiller performance trends in real-time or by historical dates, power consumptions of each chiller component and temperature trends of each chiller produced while in operation.',
    description2: 'Moreover, clients can check daily reports through this platform for chillers’ overall performance reviews by selecting any date they would like to review. The system contains user management system to control users’ role and levels so that sites information are only accessed by authorized person. Admin can edit each user’s access level from the UI.'
}

const surveyData = {
    title: 'Survey Platform ',
    description1: 'This is the Singapore exploratory project in which the platform to create, fill and submit surveys. By collecting information through survey system, the platform will transform those information into meaningful reports for application across industries.'
}