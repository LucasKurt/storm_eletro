import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Routes from "./Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes/>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
