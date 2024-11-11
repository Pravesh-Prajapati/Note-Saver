import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/paste' element={<Paste />} /> */}
          {/* <Route path='/viewpaste/:id' element={<ViewPaste />} /> */}
          <Route path='/viewpaste/:id' element={<ViewPaste />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
