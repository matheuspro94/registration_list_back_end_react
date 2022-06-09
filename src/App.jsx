import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/layout/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Users from './pages/Users'
import Footer from '../src/components/layout/Footer'
import Container from './components/layout/Container'

function App () {
  return (
    <div className="App">
      <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/users" index element={<Users />}></Route>
            <Route path="/about" index element={<About />}></Route>
          </Routes>
        </Container>
      <Footer />
    </div>
  )
}

export default App
