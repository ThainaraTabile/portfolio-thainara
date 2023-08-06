import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

 function AppRoutes() {
  return (
    <BrowserRouter>
     
     <Header/>
    <Routes>
      <Route index element={<Home />} />
        <Route path="/sobre" element={<About/>} />
  
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;