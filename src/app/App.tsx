// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import HomePage from '../pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
