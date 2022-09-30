import React from 'react'
import './Content.css'
import Dashboard from './Dashboard'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Refer from './Refer'
import Authentication from './Authentication'
import License from './License'
import FAQ from './FAQ'
import Transactions from './Transactions'

function Content() {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard/refer' element={<Refer />} />
        <Route path='refer' element={<Refer />} />
        <Route path='dashboard/authentication' element={<Authentication />} />
        <Route path='authentication' element={<Authentication />} />
        <Route path='dashborad/license' element={<License />} />
        <Route path='license' element={<License />} />
        <Route path='dashboard/transactions' element={<Transactions />} />
        <Route path='transactions' element={<Transactions />} />
        <Route path='dashboard/faq' element={<FAQ />} />
        <Route path='faq' element={<FAQ />} />

      </Routes>
      {/* <Dashboard /> */}
    </div>
  )
}

export default Content