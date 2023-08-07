import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Projects from './pages/Projects';

 function AppRoutes() {
  return (
    <BrowserRouter>
     
     <Header/>
    <Routes>
      <Route index element={<Home />} />
        <Route path="/sobre" element={<About/>} />
        <Route path="/projetos" element={<Projects/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;