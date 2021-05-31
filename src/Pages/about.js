import React from 'react'
import ParaFragment from '../Feature/aboutParagraph'
import colors from '../Feature/colors'
import AboutImg from '../Images/about_1.png'
import Team from '../Images/TEAM.jpg'
import Developers from '../Images/DEVELOPERS.jpg'
import fonts from '../Feature/fonts'
import Footer from '../Feature/footer'
import Color from '../Feature/colors'
import '../App.css';
import { useMediaPredicate } from "react-media-hook";

const About = () => {
    const windowWidth = window.innerWidth
    const lessThan993=useMediaPredicate("(max-width:993px)");
    return (
        <div style={{}}>
            <div>
                <div className="d-flex flex-wrap justify-content-center py-3 my-4 " style={{}}>
                    <ParaFragment
                        imgSrc={AboutImg}
                        imageWidth={'400px'}
                        imgRadius={'5%'}
                        isReverse={true}
                        data={AboutCompany}
                    // imgheight={'200px'}
                    />
                    <div className='col-12 about-text' style={{textAlign:"justify", 
                    paddingLeft: '10px', color: Color.ParagraphColor, wordSpacing: 4, fontSize: '18px' }}>
                        <p>To provide satisfying products to our customers, we utilize object-oriented analysis, design, and testing methodologies and ensure seamless integration and
                        traceability between the project’s requirements, design, development, quality assurance, and delivery.
                        Our goal is not only to achieve local and global customers but also to support the development of the domestic Information Technology Industry.
                        </p>
                    </div>
                </div>
                <div className="nails w-100 pb-0 mb-3  large-view" style={{ position: 'relative', margin: '' }}>
                    <div className="image-layout">
                        <img className="img-fluid about-image shadow-lg w-100" alt="developers" src={Developers} style={{ height: '400px', overflow: 'auto' }} />
                    </div>
                    <div className="team-introduction" style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(72, 61, 139,0.5)'
                    }}>
                        <div className="mt-4 team-title" style={{ whiteSpace: 'nowrap', fontSize: fonts.heading12, fontWeight: 600, color: colors.WhiteColor, textAlign: 'center' }}>Team Introduction</div>
                        {/* <div className="p-3 mx-5" style={{ position: 'relative', fontSize: '18px', letterSpacing: '0.5px', color: colors.WhiteColor, wordSpacing: 4 }}> */}
                        <div className='mx-4 px-4 pt-3' style={{ paddingLeft: '', color: Color.WhiteColor, wordSpacing: 4, fontSize: '16px', letterSpacing: '0.5px', }}>
                            <p>The team is made up of 20 local talents who strive for the continual development of innovative and exceptional skills by adopting international & the foremost practice standards. We maintain continuous improvements by promoting a learning environment, ensuring that our employees are exposed to and trained on state-of-the-art technologies. As a team, we continue to learn together, creating a collaborative environment encouraging individual and organizational growth and development. The work environment in the company reflects a professional approach to dedicated team spirit and serves as a motivational ground for the professional and personal growth of the software talent.</p></div>
                    </div>
                </div>

                <div className="col-12 m-container mb-5 mobile-view" style={{ textAlign:"justify",color: colors.ParagraphColor, fontSize: '15px', wordSpacing: 4, marginTop: '3%' }}>
                    <div className="ms-3 me-2" style={{ paddingLeft:"10px",whiteSpace: 'nowrap', color: colors.TitleColor, fontSize: fonts.heading12, fontWeight: 400 }}>Team Introduction</div>
                    <div className={`dropdown-divider m-title border-0 p-0`} style={{ backgroundColor: '', height: "2px" }}></div>
                    <div className="ms-3 me-2" style={{paddingLeft:"10px",paddingRight:"40px"}}>The team is made up of 20 local talents who strive for the continual development of innovative and exceptional skills by adopting international & the foremost practice standards. We maintain continuous improvements by promoting a learning environment, ensuring that our employees are exposed to and trained on state-of-the-art technologies. As a team, we continue to learn together, creating a collaborative environment encouraging individual and organizational growth and development. The work environment in the company reflects a professional approach to dedicated team spirit and serves as a motivational ground for the professional and personal growth of the software talent.</div>
                </div>
                {/* height: '250px', width: '320px', */}
                <div className="d-flex flex-wrap justify-content-center py-3 my-2 " style={{}}>
                    <ParaFragment
                        imgSrc={Team}
                        imageWidth={'400px'}
                        imgRadius={'5%'}
                        isReverse={false}
                        data={TeamData}
                    // imgheight={'95px'}
                    />
                </div>
                <div className="col-12 ms-3 me-2 m-container mb-5 about-operation-destop" style={{ textAlign:"justify",color: colors.ParagraphColor, fontSize: '18px', wordSpacing: 4, marginTop: '3%' }}>
                    <div className="me-2" style={{ whiteSpace: 'nowrap', color: colors.TitleColor, fontSize: fonts.heading12, 
                    fontWeight: 400 }}>
                        Operations</div>
                    <div className={`dropdown-divider m-title border-0 p-0`} style={{ backgroundColor: '', height: "2px" }}></div>
                    {/* me-2 */}
                    <div className="d-flex justify-content-center py-3 my-2"
                     style={{paddingRight:lessThan993?"60px":null}}>
                    {/*style={{paddingLeft:lessThan769?"20px":"40px",paddingRight:lessThan769?"60px":"80px"}}> */}
                        Kumo Solutions is dedicated to transforming our consumers’ needs into fully realized and satisfying products by comprehensively understanding our clients’ business requirements and delivering beyond their expectations. Our commitment and dedication are backed by the necessary technological skill and innovation as we craft software customized to the needs of each individual consumers’ daily operations. Our software development process is continuously monitored and improved to maximize our client’s ease and productivity.</div>
                </div>
               
            </div>
        </div>
    )
}
export default About;

const AboutCompany = {
    title: 'About the company',
    description1: '“We make our History with your satisfaction.”',
    description2: 'Kumo Solutions was founded in 2018 at Mandalay, Myanmar to provide software development related services. By the strength of local talents, we have successfully delivered projects to both local and global customers.',
    description3: 'We have been highly engaged in working with Taiwanese and Singaporean companies by collaborating in multiple projects with successful outcomes. Our main focus is to deliver world-class End-to-End IT solutions and continue to strive for improvement and innovation.',
    // description4: 'To provide satisfying products to our customers, we utilize object-oriented analysis, design, and testing methodologies and ensure seamless integration and traceability between the project’s requirements, design, development, quality assurance, and delivery.',
    // description5: 'Our goal is not only to achieve local and global customers but also to support the development of the domestic Information Technology Industry.'
}
const TeamData = {
    title: 'Global Scale and Agility',
    description1: 'Kumo Solutions keeps up in an environment that demands constant change through agile teamwork and consistent adaptations to the latest technologies and innovations. Working with international organizations and companies has also given insight on international approaches and different points of views, further broadening our knowledge and capabilities. With the guided and multi-level trainings, we are focused on creating a stable foundation to approach situations with better agility throughout the globe.'
}
