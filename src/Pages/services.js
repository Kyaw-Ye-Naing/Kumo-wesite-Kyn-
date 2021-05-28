import React from 'react'
import Azure from '../Images/azure.png'
import Warehouse from '../Images/AI.jpg'
import Mobile from '../Images/mobileapps.jpg'
import WebApp from '../Images/webapp.jpg'
import UiUx from '../Images/uiux.png'
import Paragraph from '../Feature/serviceParagraph'
import Footer from '../Feature/footer'

const Services = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center py-3 my-4" style={{}}>
            <Paragraph
                imgSrc={Azure}
                imageWidth={'215px'}
                imgRadius={'70%'}
                isReverse={false}
                data={analyticsData}
            />
            <Paragraph
                imgSrc={Warehouse}
                imageWidth={'215px'}
                imgRadius={'70%'}
                isReverse={true}
                data={warehouseData}
            />
            <Paragraph
                imgSrc={Mobile}
                imageWidth={'215px'}
                imgRadius={'70%'}
                isReverse={false}
                data={mobileDevData}
            />
            <Paragraph
                imgSrc={WebApp}
                imageWidth={'215px'}
                imgRadius={'70%'}
                isReverse={true}
                data={webDevData}
            />
            <Paragraph
                imgSrc={UiUx}
                imageWidth={'215px'}
                imgRadius={'70%'}
                isReverse={false}
                data={ui_uxData}
            />
        </div>
    )
}
export default Services;

const analyticsData = {
    title: 'Data Analytics Services',
    description: 'Our data analytic services analyse and transforms businesses’ raw data into actionable and insightful information which aids the user in making quick and accurate data-driven decisions. Data Analytics helps in delivering faster and more detailed data reports backed by precise and insightful analysis, enhancing customer experiences. We have collaborated with experts in related areas to bring out the best outcomes for analysing data.'
}

const warehouseData = {
    title: 'Data Warehousing',
    description: 'We provide the service for data warehousing by designing a data storage system by querying data from different sources such as Rest API, Databases, Excel and CSV. Then, analyse data to transform those into actionable insight. Then, save in the system and distribute those back to related customers for services.'
}

const mobileDevData = {
    title: 'Mobile Development',
    description: 'We provide full-cycle mobile app development services, including professional business analysis, design, and development of your mobile application from a single idea to complete application launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand. Using a proactive approach and an agile process, we ensure your time and investment are optimized at every step of development and you receive a digital product that fully meets your requirements and exceeds your expectations.'
}

const webDevData = {
    title: 'Web Development',
    description: 'Kumo Solutions’ web development services include the designing, building, integration, scaling, and maintenance of our dynamic software solutions. Our products deliver highly functional, and visually engaging web products, including both platform-based and custom web solutions for enterprises. In an increasingly competitive online market, the appearance, usability and accessibility of your website is more important than ever.'
}

const ui_uxData = {
    title: 'UI/UX Design',
    description: 'We provide UI/UX design services to create user-friendly interfaces that enable users to understand how to use complex technical products. Our UX design enhances the users’ experience by integrating with our integrated UI (user interface) that emphasizes a clear and concise look and layout. Kumo Solutions’ UI/UX design services empower businesses, enabling the creation of a clear vision of their products that is easily communicable to their customers.'
}