import "./App.css"

import Container from 'react-bootstrap/Container';
import NavBar from "./components/navBar"
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";
import Proyects from "./components/proyects";
import Contact from "./components/contact";
import Home from "./components/home";
import {Parallax,ParallaxLayer} from "@react-spring/parallax";

function App() {
  return (
    <>
        <NavBar/>

            <Home/> 
      

            <AboutMe/>
        

            <Proyects/>     
      
              <Contact/>

            

              <Footer/>
    </>
  );
}

export default App;
