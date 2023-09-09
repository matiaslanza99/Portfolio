import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
function Proyects() {
  return (
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
  );
}

export default Proyects;