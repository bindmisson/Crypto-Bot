import './AdminPanel.css'
import AdminSignup from './AdminSignup'
import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Users from './Users'
import Referrals from './Referrals'
import LicenseHistory from './LicenseHistory'
import BinanceSettings from './BinanceSettings'
import Queries from './Queries'

function AdminPanel() {
  return (
    <div className='admin-panel'>
      <h1 className="admin-heading">Admin Panel</h1>
      <div className="admin-navbar">
        <Link to='/' className="admin-nav-item">Users</Link>|
        <Link to='referrals' className="admin-nav-item">Referrals</Link>|
        <Link to='license-history' className="admin-nav-item">License Purchasing History</Link>|
        <a href='#' className="admin-nav-item">Queries</a>|
        <Link to='/settings' className="admin-nav-item">Binance Settings</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<Users />} />
        <Route path='/users' element={<Users />} />
        <Route path='/referrals' element={<Referrals />} />
        <Route path='/license-history' element={<LicenseHistory />} />
        <Route path='/queries' element={<Queries />} />
        <Route path='/settings' element={<BinanceSettings />} />
      </Routes>
    </div>
  )
}

export default AdminPanel