import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
  useLocation,
  Link,
} from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  let loc = location.pathname;
  return (
  
    <div className='p-0 m-0 d-flex justify-content-center align-self-center ' >
      <nav class="navbar navbar-expand-md navbar-light bg-light p-0 w-100 shadow-sm m-0" style={{ position:'absolute', zIndex:1000 }}>
        <div class="container-fluid d-flex justify-content-between ">
        <img className="navbar-brand mx-3 pr-3" src={"/kumo.png"} style={{ width: window.innerWidth > 600 ? 75 : 60, height: 50 }} ></img>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse col-8 justify-content-end"  id="navbarSupportedContent" style={{  }}>
          <Switch
            >
              <div className="navbar-nav">
                <Link
                  to="/home"
                  className=""
                  style={{
                    textDecoration: "none",
                    fontWeight: loc.includes("home") ? 600 : 400,
                  }}
                >
                  <div className='py-2 px-3' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                    style={{
                      color: loc.includes("home")
                        ? "#775ADA" : '#084C95',
                        borderRadius :6
,                      fontWeight: loc.includes("home") ? 600 : 400,
                    }}
                  >
                    Home
                  </div>
                </Link>
                <Link
                  to="/about"
                  className=""
                  style={{
                    textDecoration: "none",
                    fontWeight: loc.includes("about") ? 600 : 400,
                  }}
                >
                  <div className='py-2 px-3' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                    style={{
                      color: loc.includes("about")
                        ? "#775ADA" : '#084C95',
                        borderRadius :6
,                      fontWeight: loc.includes("about") ? 600 : 400,
                    }}
                  >
                      About Us</div>
                </Link>

                <Link
                  to="/services"
                  className=""
                  style={{
                    textDecoration: "none",
                    fontWeight: loc.includes("services") ? 600 : 400,
                  }}
                >
                  <div className='py-2 px-3' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                    style={{
                      color: loc.includes("services")
                        ? "#775ADA" : '#084C95',
                        borderRadius :6
,                      fontWeight: loc.includes("services") ? 600 : 400,
                    }}
                  >
                      Services</div>
                </Link>
                <Link
                  to="/products"
                  className=""
                  style={{
                    textDecoration: "none",
                    fontWeight: loc.includes("products") ? 600 : 400,
                  }}
                >
                  <div className='py-2 px-3' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                    style={{
                      color: loc.includes("products")
                        ? "#775ADA" : '#084C95',
                        borderRadius :6
,                      fontWeight: loc.includes("products") ? 600 : 400,
                    }}
                  >
                      Products</div>
                </Link>
                <Link
                  to="/contact"
                  className=""
                  style={{
                    textDecoration: "none",
                    fontWeight: loc.includes("contact") ? 600 : 400,
                  }}
                >
                  <div className='py-2 px-3' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
                    style={{
                      color: loc.includes("contact")
                        ? "#775ADA" : '#084C95',
                        borderRadius :6
,                      fontWeight: loc.includes("contact") ? 600 : 400,
                    }}
                  >
                      Contact</div>
                </Link>
              </div>
            </Switch>
            {/* <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul> */}
            
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-md navbar-light bg-light w-100 shadow-sm " style={{ position:'fixed',zIndex:1000, opacity:0.9 }}>
        <div className="d-flex mx-xl-5 mx-lg-5 mx-md-4 mx-sm-2 mx-sm-1 mx-1 justify-content-between w-100">
          <img className="navbar-brand" src={"/kumo.jpeg"} style={{ width: window.innerWidth > 600 ? 60 : 40, height: 40 }} ></img>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Switch
            >
              <div className="navbar-nav">
                <Link
                  to="/home"
                  className=""
                  style={{
                    textDecoration: "none",
                    fontWeight: loc.includes("home") ? 600 : 400,
                  }}
                >
                  <div className='py-2 px-3'
                    style={{
                      color: loc.includes("home")
                        ? "#775ADA" : '#084C95',
                        borderRadius :6
,                      fontWeight: loc.includes("home") ? 600 : 400,
                    }}
                  >
                    Home
                  </div>
                </Link>
                <Link
                  to="/about"
                  className=""
                  style={{
                    textDecoration: "none",
                    fontWeight: loc.includes("about") ? 600 : 400,
                  }}
                >
                  <div className='py-2 px-3'
                    style={{
                      color: loc.includes("about")
                        ? "#775ADA" : '#084C95',
                        borderRadius :6
,                      fontWeight: loc.includes("about") ? 600 : 400,
                    }}
                  >
                      About Us</div>
                </Link>

                <Link
                  to="/services"
                  className=""
                  style={{
                    textDecoration: "none",
                    fontWeight: loc.includes("services") ? 600 : 400,
                  }}
                >
                  <div className='py-2 px-3'
                    style={{
                      color: loc.includes("services")
                        ? "#775ADA" : '#084C95',
                        borderRadius :6
,                      fontWeight: loc.includes("services") ? 600 : 400,
                    }}
                  >
                      Services</div>
                </Link>
                <Link
                  to="/products"
                  className=""
                  style={{
                    textDecoration: "none",
                    fontWeight: loc.includes("products") ? 600 : 400,
                  }}
                >
                  <div className='py-2 px-3'
                    style={{
                      color: loc.includes("products")
                        ? "#775ADA" : '#084C95',
                        borderRadius :6
,                      fontWeight: loc.includes("products") ? 600 : 400,
                    }}
                  >
                      Products</div>
                </Link>
                <Link
                  to="/contact"
                  className=""
                  style={{
                    textDecoration: "none",
                    fontWeight: loc.includes("contact") ? 600 : 400,
                  }}
                >
                  <div className='py-2 px-3'
                    style={{
                      color: loc.includes("contact")
                        ? "#775ADA" : '#084C95',
                        borderRadius :6
,                      fontWeight: loc.includes("contact") ? 600 : 400,
                    }}
                  >
                      Contact</div>
                </Link>
              </div>
            </Switch>
          </div>
        </div>
      </nav> */}
    </div>
  );
};
export default withRouter(Nav);

// style={{
//     color: loc.includes("dashboard")
//       ? MyColor.secondarySelected
//       : MyColor.dropDownItemColor,
//     borderBottom: `1px solid ${MyColor.divider}`,
//     color: loc.includes("dashboard")
//       ? MyColor.secondarySelectedText
//       : MyColor.bodyText,
//     fontWeight: loc.includes("dashboard") ? 600 : 400,
//   }}
