import React from "react";
import img1 from "../asset/img/service1.png";
import img2 from "../asset/img/service2a.png";
import img3 from "../asset/img/service2b.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service1">
        <div className="texte_service">
          <h4>Nisi nec velit </h4>
          <h2>Nullam pulvinar felis at metus malesuada</h2>
          <p>
            Pellentesque tincidunt tristique neque, eget venenatis enim gravida
            quis. Fusce at egestas libero. Cras convallis egestas ullamcorper.
            Suspendisse sed ultricies nisl, pharetra rutrum mauris. Vestibulum
            at massa dui. Morbi et purus velit. Etiam tristique, justo eu
            condimentum efficitur, purus velit facilisis sem, id fringilla
            tortor quam quis dolor. Praesent ultricies dignissim ex, at volutpat
            sapien ullamcorper rhoncus.
          </p>
          <a href="/"><span>Découvrez le service <i className="fas fa-arrow-right"></i></span></a>
        </div>
        <div className="img_service">
          <img src={img1} alt="service1"></img>
        </div>
      </div>
      <div className="service2">
        <div className="texte_service">
          <h4>Bibendum curabitur magna</h4>
          <h2>Aenean sed nibh a magna posuere</h2>
          <p>
            Maecenas interdum lorem eleifend orci aliquam mollis aliquam non
            rhoncus magna :
          </p>
          <ul>
            <li>Suscipit libero</li>
            <li>Duis et risus accumsan sem tempus porta nec sit amet est</li>
            <li>Libero adipiscing</li>
          </ul>

          <a href="/" ><span>Découvrez le service <i className="fas fa-arrow-right"></i></span></a>
          </div>
          <div className="img_service">
          <img src={img2} alt="service2a" id="service2a"></img>
          <img src={img3} alt="service2b" id="service2b"></img>
        </div>
      </div>
    </div>
  );
};

export default Services;
