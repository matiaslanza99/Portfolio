import "./App.css";
import NavBar from "./components/navBar"
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";
import Proyects from "./components/proyects";
import Contact from "./components/contact";
import Home from "./components/home";

function App() {
  return (
    <>
        <Home/> 
        <AboutMe/>
        <Proyects/>     
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
