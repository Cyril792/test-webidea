import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
       
        <div className="logo">
        <a href="/">
          <img
            src="https://www.webidea.fr/app/themes/agencewebidea/dist/images/logo.svg"
            alt="webidea"
            className="footerlogo"
          ></img>
          </a>
        </div>
        
        <div className="menu">
          <ul>
            <a href="/"><li>Vehicula fringilla suspendisse </li></a>  
            <a href="/"><li>Vulputate convallis massa </li></a> 
            <a href="/"><li>Aliquam gravida lacinia </li></a> 
            <a href="/"><li>Nulla dictum praesent </li></a> 
            <a href="/"><li>Enim vitae porttitor </li></a>  
            <a href="/"><li>Porttitor dapibus imperdiet </li></a> 
            <a href="/"><li>Vel aliquam </li></a> 
          </ul>
        </div>
        <div className="reseau">
          <ul>
            <a href="https://www.facebook.com/webidea.creation" target="_blank" rel="noreferrer noopener" ><li>Facebook</li></a>
            <a href="/"><li>Twitter</li></a>
            <a href="https://fr.linkedin.com/company/web-idea" target="_blank" rel="noreferrer noopener"><li>Linkedin</li></a>
          </ul>
        </div>
        <div className="contact">
          <h4> Nous contacter</h4>
          <p className="adress">
            2, rue Maurice Barrès <br /> 57000 METZ
          </p>
         <a href="tel:+33387521212"> <p className="tel">+33 3 87 52 12 12</p></a>
          <a href="mailto:hello@webidea.fr"> <p className="mail"> hello@webidea.fr</p></a>
        </div>
        <div className="copyright">
          <p>© 2020 Web Idea. Tous droits réservés.</p>
          <div className="lien"> <a href="/"><p> Mentions légales</p></a>
          <span></span>
          <a href="/"><p>Plan du site </p></a>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
