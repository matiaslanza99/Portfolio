import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
function Proyects() {
  return (
    <Row className='secciones-proyectos align-items-center justify-content-center' id="proyectos">
          <Col sm={10}>
            <Col className="text-center">
              <h1>Mis Proyectos</h1>
            </Col>
            <Col xs={12}>
              <div className="ctn-images">
                <div className="ctn-img"> 
                      <h5>ONE-ECommerce</h5>
                      <p>
                        Página de comercio electrónico donde se puede comprar y vender.
                      </p>
                      
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
            <Col xs={12}>
              <div className="ctn-images">

                <div className="ctn-img">
               
                    <h5>Videogames-PI</h5>
                    <p>
                      Este proyecto se basa en buscar videojuegos en una API externa para mostrarlos y filtrarlos.
                    </p>
                   
                    <Badge className="tecsUsed">React</Badge>
                    <Badge className="tecsUsed">Redux</Badge>
                    <Badge className="tecsUsed">Sequelize</Badge>
                    <Badge className="tecsUsed">Express.js</Badge>
                    <Badge className="tecsUsed">PostgreSQL</Badge>
                </div>
              <div className="ctn-img">
                  <a className="SaS" href="https://github.com/matiaslanza99/videogamesPI">
                    <img src="pp2.avif" alt="pp2"/>
                  </a> 
                </div>
              </div>
            </Col>
            
          </Col>
        </Row>
  );
}

export default Proyects;