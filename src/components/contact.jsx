import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

import Swal from 'sweetalert2';
import emailjs from "emailjs-com";

function Contact() {
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
      const serviceID = "service_tohu2s9";
      const templateID = "template_fn5ngde";
      const userID = "u9m5VHUhB9zLn3OEY";
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
      <Row className='secciones align-items-center justify-content-center' id="contacto"> 

          <Col xs={12} sm={8} className="justify-content-center">
              <h1 className="text-center">¡Contactame!</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Tu Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    placeholder="Ingresa aqui tu email" 
                    className="form-input"
                    required  
                  />
                  {error.email && <p className="error-msg">{error.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Nombre Completo / Empresa</Form.Label>
                  <Form.Control 
                    name="name" 
                    type="text" 
                    value={input.name}
                    onChange={handleChange}
                    placeholder="Ingresa aqui tu nombre" 
                    className="form-input"
                    required
                  />
                  {error.name && <p className="error-msg">{error.name}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Tu Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    className="form-input-textarea"
                    name="mensaje"
                    value={input.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  />
                  {error.mensaje && <p className="error-msg">{error.mensaje}</p>}
                </Form.Group>

                <Col className="text-center">
                  <button type="submit" className="btn-submit">
                    Enviar
                  </button>
                </Col>
              </Form>
          </Col>
        </Row>
     
    );
  }
  
  export default Contact;