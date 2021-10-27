import React from 'react';
import Carousell from './compenent/Carousell';
import Footer from './compenent/Footer';
import Formulaire from './compenent/Formulaire';
import Header from './compenent/Header';
import Nav from './compenent/Nav';
import Services from './compenent/Services';

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Services />
      <Carousell />
      <Formulaire />
      <Footer />
    </div>
  );
};

export default App;