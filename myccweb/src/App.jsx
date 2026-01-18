import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Courses from '../src/Pages/Courses'
import Tutorials from '../src/Pages/Tutorials'
import Blog from '../src/Pages/Blog'
import Jobs from '../src/Pages/Jobs'
import Contact from '../src/Pages/Contact'
import Navbar from './Components/Navbar'
import TopHeader from './Components/Header'

function App() {
  return (
    <>
  
         <BrowserRouter>
         
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses/:type" element={<Courses />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App