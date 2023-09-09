import "./App.css"

import Container from 'react-bootstrap/Container';

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";
import Proyects from "./components/proyects";
import Contact from "./components/contact";
import Home from "./components/home";
import LateralNav from "./components/lateralNav";
import Section from "./FramerMotion/Section";
function App() {
  return (
    <>
      <Container fluid className="container-full-height aling-items-center">
      <Home/>
      <Section><AboutMe/></Section>
      <Section><Proyects/></Section>      
      <Section><Contact/></Section>
      <LateralNav/> 
      </Container>
      <Footer/>
    </>
  );
}

export default App;
