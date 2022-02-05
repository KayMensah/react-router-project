import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Details from './pages/Details';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Navbar from './component/Navbar';


const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes> 
       
        <Route path="/" element={<Home/>} />
        <Route path="/About/:itemId" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Details/:itemId" element={<Details/>} />
        <Route path="*" element={<PageNotFound/>} />
        
    </Routes>
      
        </BrowserRouter>
  );
};

export default Router;
