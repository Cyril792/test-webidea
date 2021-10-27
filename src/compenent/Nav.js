import React from "react";
import { useState } from "react";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

 

  return (
    <div className="navbar" id="navbar">
      <div className="logo">
        <a href="/">
          <img
            src="https://www.webidea.fr/app/themes/agencewebidea/dist/images/logo.svg"
            alt="webidea"
            className="headerlogo"
          ></img>
        </a>
      </div>
      <button
        className={`nav_burger ${showLinks ? "croix" : "burg"} `}
        onClick={handleShowLinks}
      >
        <span className="burger"></span>
      </button>
      <div className={`menu_der ${showLinks ? "show_nav" : "hide-nav"} `}>
        <div className="top_nav">
          <div className="logo">
            <a href="/">
              <img
                src="https://www.webidea.fr/app/themes/agencewebidea/dist/images/logo_b.svg"
                class="navbar-logo-fixed"
                alt="WEBIDEA"
              ></img>
            </a>
          </div>
        </div>
        <div className="separateur"></div>
        <div className="bot_nav">
          <div className="site">
            <a href="/">
            <div className="titre_nav">
              <h3>Création de site internet</h3>
              <i className="fas fa-arrow-right"></i>
            </div>
            </a>
            <ul>
              <li><a href="/">Sodales gravida nunc </a></li>
              <li><a href="/">Amet imperdiet </a></li>
              <li><a href="/">Ultrices vestibulum </a></li>
              <li><a href="/">Etiam magna vestibulum </a></li>
              <li><a href="/">Fringilla gravida </a></li>
            </ul>
          </div>
          <div className="marketing">
            <a href="/">
            <div className="titre_nav">
              <h3>Marketing digital</h3>
              <i className="fas fa-arrow-right"></i>
            </div>
            </a>
            <ul>
              <li><a href="/">Dapibus est arcu </a></li>
              <li><a href="/">Amet auctor </a></li>
              <li><a href="/">Praesent condimentum </a></li>
              <li><a href="/">Velit ornare auctor</a> </li>
              <li><a href="/">Nisl ipsum mauris</a> </li>
              <li><a href="/">Ipsum dapibus rhoncus </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
