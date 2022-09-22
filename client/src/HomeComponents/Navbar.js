import React from 'react'
import './Navbar.css'
import {MdAccountCircle, MdSpaceDashboard} from 'react-icons/md'
import {FaChartLine, FaQuestionCircle, FaUserCircle} from 'react-icons/fa'
import {HiCurrencyDollar} from 'react-icons/hi'

function Navbar() {
  return (
    <div className='navbar'>
      <h2 className="navHeading">Trading<span className="navHeading2">Bot</span></h2>
      <div className="navList">
        <li className="navItem" id="dashboard"><MdSpaceDashboard className='navLogo' id='logo1' /> Dashboard</li>
        <li className="navItem" id="profile"><FaUserCircle className='navLogo' id='logo2' /> Profile</li>
        <li className="navItem" id="invest"><FaChartLine className='navLogo' id='logo3' /> Invest</li>
        <li className="navItem" id="transactions"><HiCurrencyDollar className='navLogo' id='logo4' /> Transactions History</li>
        <li className="navItem" id="faq"><FaQuestionCircle className='navLogo' id='logo5' /> FAQ</li>
      </div>
    </div>
  )
}

export default Navbar