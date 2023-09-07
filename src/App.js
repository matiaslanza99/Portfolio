import "./App.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import emailjs from "emailjs-com";
import Badge from 'react-bootstrap/Badge';

function App() {
  const [highlightedProject, setHighlightedProject] = useState(null);

  const [input, setInput] = useState({
    name:"",
    email:"",
    mensaje:""
  })
  const [error, setError] = useState({
    name:"",
    email:"",
    mensaje:""
  })

  function validate(input){
    const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let error;
    if(input.name.trim.length === 0){
      error.name ="¡Ingresa su nombre por favor!"
    }
    if(input.email.trim.length === 0){
      error.email ="¡Ingresa su email por favor!"
    }else if (!patronCorreo.test(input.email)) {
      error.email = "¡Ingresa un email válido!";
    }
    if(input.mensaje.trim.length === 0){
      error.mensaje ="¡Ingresa un mensaje por favor!"
    }else if(input.mensaje.trim.length < 20){
      error.mensaje ="¡El mensaje no cumple con el minimo requerido!"
    }
  }
  const handleChange = (event) => {
    console.log(event.target.value)
      setInput({
        ...input,
        [event.target.name]: event.target.value
      });
      
      setError(
        validate({
          ...input,
          [event.target.name]: event.target.value
        })
      );
      console.log("all Inputs", input);
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
    
      // Configuración para EmailJS (debes reemplazar con tus propios valores)
      const serviceID = "service_tohu2s9";
      const templateID = "template_fn5ngde";
      const userID = "u9m5VHUhB9zLn3OEY";
    
      // Enviar el correo electrónico utilizando EmailJS
      emailjs.sendForm(serviceID, templateID, event.target, userID)
        .then((response) => {
          console.log("Correo electrónico enviado exitosamente", response);
          Swal.fire("Éxito", "Correo electrónico enviado exitosamente", "success");
        })
        .catch((error) => {
          console.error("Error al enviar el correo electrónico", error);
          Swal.fire("Error", "Ocurrió un error al enviar el correo electrónico", "error");
        });
    };

  return (
    <>
      <Navbar expand="lg" className="navBar fixed-top">
        <Nav className="navBar-box">
          <Nav.Link className="navBar-option" href="#home">Home</Nav.Link>
          <Nav.Link className="navBar-option" href="#sobremi">Sobre Mí</Nav.Link>
          <Nav.Link className="navBar-option" href="#proyectos">Proyectos</Nav.Link>
          <Nav.Link className="navBar-option" href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar>

      <Container fluid className="container-full-height aling-items-center">

        <Row className='seccionesPresentacion align-items-center justify-content-center' fluid id="home">
           <img src="banner.jpg"alt="perfil"/>
        </Row>

        <Row className='secciones align-items-center justify-content-center' id="sobremi">
          <Col xs={5}>
            <h1>¡Hola! Soy Matías</h1>
            <br />
            <h3>¿Quién Soy?</h3>
            <p>Soy un Programador FullStack emocionado por dar mis primeros pasos en este fascinante mundo de la tecnología.</p>
            <h3>¿De que me ocupo?</h3>
            <p>
              Poseo conocimientos en áreas tanto de back-end como de front-end. Actualmente, estoy enfocado en mejorar mi eficiencia y velocidad en el trabajo, tanto para beneficio propio como para contribuir al éxito del equipo. Además, estoy trabajando en el desarrollo de mi portafolio y en proyectos en los cuales implemento nuevas herramientas y tecnologías.
            </p>
          </Col>
          <Col xs={6} className='fondo-tec'>
          </Col>
        </Row>
        <Row className='seccione-proyecto align-items-center justify-content-center' id="proyectos">
          <Col xs={10}>
            <Col className="text-center">
              <h1>Mis Proyectos</h1>
            </Col>
            <Col>
              <div className="ctn-images">
              <div className="ctn-img">
                
                    <h5>ONE ECommerce</h5>
                    <p>
                      Pagina e-commerce donde se puede comprar y vender.
                    </p>
                    <Badge className="tecsUsed">HTML</Badge>
                    <Badge className="tecsUsed">CSS</Badge>
                    <Badge className="tecsUsed">JavaScript</Badge>
                    <Badge className="tecsUsed">React</Badge>
                    <Badge className="tecsUsed">Redux</Badge>
                    <Badge className="tecsUsed">Firebase</Badge>
                    <Badge className="tecsUsed">Nodemailer</Badge>
                    <Badge className="tecsUsed">Sequelize</Badge>
                    <Badge className="tecsUsed">Express.js</Badge>
                    <Badge className="tecsUsed">PostgreSQL</Badge>
                    <Badge className="tecsUsed">Mercado Pago</Badge>
 
                </div>

                <div className="ctn-img">
                  <a className="SaS" href="https://pf-grupo-20.vercel.app/">
                  <img src="pp1.jpg" alt="pp1" />
                  </a> 
                </div>
              </div>
            </Col>
            <Col>
              <div className="ctn-images">
              <div className="ctn-img">
                  <a className="SaS" href="https://github.com/matiaslanza99/videogamesPI">
                    <img src="pp2.avif" alt="pp2"/>
                  </a> 
                </div>

                <div className="ctn-img">
               
                    <h5>Videgames PI</h5>
                    <p>
                      Este proyecto se basa en sacar buscar de videojuegos en una api externa para mostrarlos y filtrarlos.
                    </p>
                    <Badge className="tecsUsed">HTML</Badge>
                    <Badge className="tecsUsed">CSS</Badge>
                    <Badge className="tecsUsed">JavaScript</Badge>
                    <Badge className="tecsUsed">React</Badge>
                    <Badge className="tecsUsed">Redux</Badge>
                    <Badge className="tecsUsed">Sequelize</Badge>
               
                </div>
              </div>
            </Col>
            
          </Col>
        </Row>
        <Row className='secciones align-items-center justify-content-center'id="contacto"> 

          <Col xs={8} className="justify-content-center">
              <h1 className="text-center">¡Contactame!</h1>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tu Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="user_email"
                        placeholder="Ingresa aqui tu email" 
                        className="form-input"/>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Nombre Completo / Empresa</Form.Label>
                      <Form.Control 
                        name="user_name" 
                        type="text" 
                        placeholder="Ingresa aqui tu nombre" 
                        className="form-input" 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Form.Label>Tu Mensaje</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Sera un gusto conocerte!">
                      <Form.Control
                        as="textarea"
                        className="form-input"
                        name="message"
                      />
                    </FloatingLabel>
                    <button type="submit" className="btn-submit">
                      Enviar
                    </button>
                  </Col>
                </Row>
               

                
              </Form>
              
          </Col>

        </Row>
        
    </Container>


    <footer>
  <div className="text-center py-3 bg-dark">
    <a className="icono-redes" href="https://www.linkedin.com/in/matias-nicolas-lanza-091955244/">
      <i className="bi bi-linkedin "></i>
    </a>
    <a className="icono-redes" href="https://github.com/matiaslanza99">
      <i className="bi bi-github"></i>
    </a>
  </div>
</footer>

  </>
  );
}

export default App;
