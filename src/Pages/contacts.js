import React from "react";
import Font from "../Feature/fonts";
import Phone from "../Images/phone.png";
import Mail from "../Images/mail.png";
import Facebook from "../Images/facebook.png";
import Location from "../Images/locations.png";
import Input from "../Feature/input";
import MapForContact from "../Feature/MapForContact";
import Footer from "../Feature/footer";
import { WrapText } from "@material-ui/icons";


const Contact = () => {
  return (
    <div>
      <div className="pt-5 mt-3" style={{ color: "#084C95" }}>
        <div className="d-flex flex-wrap flex-xl-nowrap flex-lg-nowrap flex-md-nowrap justify-content-center contact-layout" style={{marginLeft:"5%" }} >
          <div className="col-xl-5 col-lg-5 col-md-6  pt-5 mx-3 justify-content-center">
            <div
              className="pt-3 "
              style={{
                fontSize: Font.heading12,
                borderBottom: "2px solid #9C1DE7 ",
                maxWidth: 180,
              }}
            >
              Contact Info
          </div>
            <div className="py-4">
              <div className="d-flex py-2">
                <img src={Phone} alt="phone" style={{ width: 25, height: 25 }} />
                <p className="px-3">(+95) 9-774 477 275</p>
              </div>
              <div className="d-flex py-2">
                <img src={Mail} alt="mail" style={{ width: 25, height: 25 }} />
                <p className="px-3">office@kumomyanmar.com</p>
              </div>
              <div className="d-flex  py-2">
                <img
                  src={Location}
                  alt="location"
                  style={{ width: 25, height: 25 }}
                />
                <div className="px-3">
                  <p style={{ whiteSpace: 'inherit' }}>(Nga Gyi/98), 64Street, Between</p>
                  <p  className="mandalay" style={{ lineHeight: 0, whiteSpace: 'pre' }}>
                    105 & 106 Street, Mandalay, Myanmar
                </p>
                </div>
              </div>
              <div className="d-flex py-2">
                <img
                  src={Facebook}
                  alt="facebook"
                  style={{ width: 25, height: 25 }}
                />
                <p className="px-3">KUMO Solutions Page</p>
              </div>
            </div>
          </div>
          <div className=" col-xl-7 col-lg-7 col-md-6  pt-2 justify-content-center business" style={{ fontSize: Font.heading12 }}>
            Join us for your Business
          <div className="py-4">
              <div className="py-2">
                <Input text={"Your Name"} />
              </div>
              <div className="py-3">
                <Input text={"Your Email"} />
              </div>
              <div>
                <textarea
                  className="p-3"
                  placeholder="Message ........"
                  style={{
                    color: "#799ED1",
                    fontSize: 16,
                    paddingLeft: 20,
                    minWidth: window.innerWidth > 800 ? 350 : 210,
                    minHeight: 200,
                    borderRadius: 20,
                    border: "1px solid #799ED1",
                  }}
                >
                 
              </textarea>
              </div>
              <div className='py-3'>
                <button className='p-2 shadow' style={{
                  color: "#799ED1",
                  fontSize: 16,
                  paddingLeft: 20,
                  borderRadius: 20,
                  minWidth: window.innerWidth > 800 ? 150 : 100,
                  border: "1px solid #799ED1",
                }}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div >
        {/* <div style={{ marginBottom: '32%' }}>
          <MapForContact />
        </div> */}
      </div>
    </div>

  );
};
export default Contact;
