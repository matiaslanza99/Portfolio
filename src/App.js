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
        <Parallax pages={4}>
        <Container fluid>
          <ParallaxLayer 
            offset={0}
            speed={0.2}
            >
            <Home/> 
          </ParallaxLayer>

          <ParallaxLayer 
            offset={1}
            speed={0.3}>
            <AboutMe/>
          </ParallaxLayer>

          <ParallaxLayer 
            offset={2}
            speed={0.2}
            >
            <Proyects/>     
          </ParallaxLayer>

            <ParallaxLayer 
              offset={3}
              speed={0.3}
            >
              <Contact/>
              <Footer/>
            </ParallaxLayer>
     
          </Container>
        </Parallax>
    </>
  );
}

export default App;
