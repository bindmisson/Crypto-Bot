import React from 'react'
import './Content.css'
import Dashboard from './Dashboard'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Refer from './Refer'

function Content() {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard/refer' element={<Refer />} />
        <Route path='refer' element={<Refer />} />
      </Routes>
      {/* <Dashboard /> */}
    </div>
  )
}

export default Content