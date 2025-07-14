import React, { useEffect, useState } from 'react'
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from 'gsap';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './tabs/Home';
import Features from './tabs/Features';
import Layout from './components/LayoutA';
import LayoutB from './components/LayoutB';
import About from './tabs/About';
import LayoutC from './components/LayoutC';
import Contact from './tabs/Contact';
import Privacy from './tabs/Privacy';
import { Toaster } from 'sonner';
import { Laptop2 } from 'lucide-react';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    }

    checkMobile();
    window.addEventListener("resize", checkMobile);
  
    return () => {
      window.removeEventListener("resize",checkMobile)
    }
  }, [])
  
  return (
   <>
   {isMobile ? (
    <div className='p-5 h-screen item-col flex-center gap-30 bg-black/60 text-center text-white'>
      <h1>Please View on Laptop only</h1>
      <Laptop2 
      className='size-30 animate-bounce duration-300'
      />
    </div>
   ):(
    <>
    <Routes>
      {/* Layout for Home and Feature */}
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>
      </Route>
      <Route element={<LayoutB />}>
        <Route path='/features' element={<Features />} />
        <Route path='/about-pillpadi' element={<About />} />
      </Route>
      <Route element={<LayoutC />}>
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/terms-and-condition' element={<Privacy />} />
      </Route>
    </Routes>
    </>
   )}
   </>
  )
}

export default App