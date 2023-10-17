import { motion } from "framer-motion";
import Row from 'react-bootstrap/Row';

function Home() {
  return (
      <Row className='seccionesPresentacion align-items-center justify-content-center' fluid id="home">
        <img src="lampara.png" alt="lampara2" className='lampara2'/>

        <img src="nube.png" alt="sombraNube1" className='sombraNube1'/>
        <img src="lampara.png" alt="lampara1" className='lampara1'/>
        <img src="nube.png" alt="nube1" className='nube1'/>

        <img src="nube.png" alt="sombraNube1" className='sombraNube2'/>
        <img src="nube.png" alt="nube2" className='nube2'/>


        <img src="fullstackr.png" alt="profile" className='fullStackImg'/>
        <img src="perfilNoneFond.png" alt="profile" className='profileAnimatePhoto'/>
        <img src="nombre.png" alt="nombreImg" className='nameImg'/>


      </Row>
  );
}

export default Home;