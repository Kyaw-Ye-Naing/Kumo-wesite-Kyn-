import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,useLocation
} from "react-router-dom";
import Home from "./Pages/home";
import Nav from "./Feature/nav";
import About from "./Pages/about";
import Services from "./Pages/services";
import Products from "./Pages/products";
import Contact from "./Pages/contacts";
import Map from "./Feature/MapForContact"
import Footer from "./Feature/footer";
import Bg from '../src/Images/bg.svg';
import { PageTransition } from '@steveeeie/react-page-transition';

const App = () => {
  let location = useLocation();
  let loc = location.pathname;
  
  return (
    
    <div className='m-0' style={{ backgroundImage: `url(${Bg})`, height: "100%",backgroundAttachment:'fixed',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>            
      <Nav />
      <PageTransition
              preset="cubeToRight"
              transitionKey={loc}
              className="transition-container"
            >
      <div className="mx-xl-4 px-xl-4 mx-lg-4 px-lg-4 mx-md-4 px-md-4 mx-sm-2 px-sm-2 mx-xs-1 px-xs-1 mx-1 px-1 pt-3 ">
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/products" component={Products} exact />
          <Route path="/contact" component={Contact} exact />
          <Redirect to="/home" from="/" component={Home} exact />
        </Switch>
      </div>      
          { loc.includes("contact") &&
            <div className='mb-5' style={{ height: '50%', position: "relative" }}>
              <Map />
            </div>
          }
        <Footer/>
      </PageTransition>
    </div>    
  );
};
export default withRouter(App);
