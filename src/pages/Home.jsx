import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Features from '../components/Features'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Button, Icon } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

const Home = () => {

  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };
  const handleScroll = () => {
    if (window.pageYOffset > 700) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <Navbar />
    <About />
    <Features />
    <Pricing />
    <Contact />
    <Footer />
    {showScrollButton && (
        <Button
          onClick={scrollToTop}
          size="md"
          position="fixed"
          bottom="20px"
          right="20px"
          zIndex="1"
        >
          <ArrowUpIcon />
        </Button>
      )}
    </>
  )
}

export default Home