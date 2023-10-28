function Footer() {
    return (
      <footer>
        <div className="text-center py-2 position-fixed bottom-0 w-100">
          <a className="icono-redes fs-4" href="https://www.linkedin.com/in/matias-nicolas-lanza-091955244/">
            <abbr title="Visitar LinkedIn"><i className="bi bi-linkedin "></i></abbr>
          </a>
          <a className="icono-redes fs-4" href="https://github.com/matiaslanza99">
            <abbr title="Visitar GitHub"><i className="bi bi-github"></i></abbr>
          </a>
          <a className="icono-redes fs-4" href="./downloads/MatíasNicolasLanzaCV.pdf" download>
            <abbr title="Descargar CV"><i className="bi bi-download"></i></abbr>
          </a>
        </div>
    
      </footer>
    );
  }
  
  export default Footer;