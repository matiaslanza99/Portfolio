import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <Row className='secciones align-items-center justify-content-center' id="sobremi">
      <Col sm={5}>
        <h1>¡Hola! Soy Matías</h1>
        <br />
        <h3>¿Quién Soy?</h3>
        <p>Soy un Programador FullStack emocionado por dar mis primeros pasos en este fascinante mundo de la tecnología.</p>
        <h3>¿De qué me ocupo?</h3>
        <p>
          Poseo conocimientos en áreas tanto de back-end como de front-end. Actualmente, estoy enfocado en mejorar mi eficiencia y velocidad en el trabajo, tanto para beneficio propio como para contribuir al éxito del equipo. Además, estoy trabajando en el desarrollo de mi portafolio y en proyectos en los cuales implemento nuevas herramientas y tecnologías.
        </p>
      </Col>
        <Col xs={6} sm={5} className='fondo-tec'>
      </Col>
    </Row>
  );
}

export default AboutMe;
