import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Nav = lazy(() => import('./Components/Nav'))
const Routes = lazy(() => import('./Routes'))
const Footer = lazy(() => import('./Components/Footer'))

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Carregando...</p>}>
        <BrowserRouter>
          <Nav/>
          <Routes/>
        </BrowserRouter>
        <Footer/>
      </Suspense>
    </>
  );
}

export default App;
