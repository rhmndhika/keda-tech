import React from 'react';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';


function App() {

  
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/about'element={<About />} />
          <Route path='/features'element={<Features />} />
          <Route path='/pricing'element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
