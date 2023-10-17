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
                        className="form-input"
                        required  
                      />
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
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Form.Label>Tu Mensaje</Form.Label>
                   
                      <Form.Control
                        as="textarea"
                        className="form-input-textarea"
                        name="message"
                        placeholder="Escribe tu mensaje aquí..."
                        required
                      />
                   
                    <button type="submit" className="btn-submit">
                      Enviar
                    </button>
                  </Col>
                </Row>
              </Form>
              
          </Col>

        </Row>
    );
  }
  
  export default Contact;