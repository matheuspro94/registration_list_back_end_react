import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/layout/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NewUsers from './pages/NewUsers'
import Users from './pages/Users'
import Footer from '../src/components/layout/Footer'
import User from './pages/User'

function App () {
  return (
    <div>
      <Navbar />
          <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/newusers" index element={<NewUsers />}></Route>
            <Route path="/users" index element={<Users />}></Route>
            <Route path="/user/:id" index element={<User />}></Route>
            <Route path="/about" index element={<About />}></Route>
          </Routes>
      <Footer />
    </div>
  )
}

export default App
