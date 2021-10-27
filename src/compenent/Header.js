import React from 'react';

const Header = () => {

    const scrollx =() => {
        window.scrollBy(0 ,window.innerHeight);
      }
    return (
        
        <div className="header">
          
            <div className="titre">
                <h1> Test d'intégration d'un site internet pour un <p className="gras"> poste de développeur </p></h1>
                <p>Réaliser ce test d'intégration web pour évaluer vos compétences et tentez de rejoindre l'équipe Web Idea ! </p>
            </div>
            <div className="defiler" onClick={scrollx}>
                <p>Faites défiler </p>
                <span></span>
                </div>
            
        </div>
        
    );
};

export default Header;