import { motion } from "framer-motion";
import Row from 'react-bootstrap/Row';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Row className='seccionesPresentacion align-items-center justify-content-center' fluid id="home">
        <motion.div className="profileContainer">
          <img src="perfilNoneFond.png" alt="profile" className='profileAnimatePhoto'/>
          <img src="nombre.png" alt="nombreImg" className='nameImg'/>
          <img src="fullstackr.png" alt="profile" className='fullStackImg'/>
        </motion.div>

        <motion.div className="nubeContainer">
          <img src="nube.png" alt="sombraNube1" className='sombraNube1'/>
          <img src="lampara.png" alt="lampara1" className='lampara1'/>
          <img src="nube.png" alt="nube1" className='nube1'/>
          
        </motion.div>

        <motion.div className="nubeContainer">
          <img src="nube.png" alt="sombraNube1" className='sombraNube2'/>
          <img src="nube.png" alt="nube2" className='nube2'/>
          <img src="lampara.png" alt="lampara2" className='lampara2'/>
        </motion.div>
      </Row>
    </motion.div>
  );
}

export default Home;
/*
  import React, { useState } from 'react';

function ImageGallery(props) {
    // Utilizamos un objeto para rastrear el estado de carga de cada imagen.
    const [loadedImages, setLoadedImages] = useState({});

    const handleImageLoad = (src) => {
        setLoadedImages(prevState => ({
            ...prevState,
            [src]: true
        }));
    };

    return (
        <div>
            {props.images.map((imageSrc, index) => (
                <img
                    key={index}
                    style={{ display: loadedImages[imageSrc] ? 'block' : 'none' }}
                    src={imageSrc}
                    alt={Image ${index}}
                    onLoad={() => handleImageLoad(imageSrc)}
                />
            ))}
        </div>
    );
}

export default ImageGallery;
*/