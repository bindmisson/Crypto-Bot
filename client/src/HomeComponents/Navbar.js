import React from 'react'
import './Navbar.css'
import {MdAccountCircle, MdSpaceDashboard} from 'react-icons/md'
import {FaChartLine, FaQuestionCircle, FaUserCircle, FaDollarSign} from 'react-icons/fa'
import {HiCurrencyDollar, HiMenu} from 'react-icons/hi'
import { Link } from 'react-router-dom'

function Navbar() {

  function onMenuBtnClick(){
    const navbar=document.getElementById('navbar')
    const navHeading=document.getElementById('navHeading')
    const navList=document.getElementById('navList')

    if (navbar.offsetWidth.toString()=='320'){
      navbar.style.width='140px'
      navHeading.style.visibility='hidden'
      document.getElementById('menuTxt1').style.display='none'
      document.getElementById('logo1').style.padding='0'
      document.getElementById('menuTxt2').style.display='none'
      document.getElementById('menuTxt3').style.display='none'
      document.getElementById('menuTxt4').style.display='none'
      document.getElementById('menuTxt5').style.display='none'
    }else{
      navbar.style.width='320px'
      navHeading.style.visibility='visible'
      document.getElementById('menuTxt1').style.display='inline'
      document.getElementById('menuTxt2').style.display='inline'
      document.getElementById('menuTxt3').style.display='inline'
      document.getElementById('menuTxt4').style.display='inline'
      document.getElementById('menuTxt5').style.display='inline'
      
    }

  }

  return (
    <div className='navbar' id='navbar'>
      <HiMenu className='menuBtn' id='menuBtn' onClick={onMenuBtnClick} />
      <h2 className="navHeading" id='navHeading'>Your<span className="navHeading2">Logo</span></h2>
      <div className="navList" id='navList'>
        <Link to='dashboard' className='referLink'><li className="navItem" id="dashboard"><MdSpaceDashboard className='navLogo' id='logo1' /><span id="menuTxt1"> Dashboard</span></li></Link>
        <Link to='' className='referLink'><li className="navItem" id="profile"><FaUserCircle className='navLogo' id='logo2' /><span id="menuTxt2"> Authorization</span></li></Link>
        <Link to='' className='referLink'><li className="navItem" id="invest"><FaChartLine className='navLogo' id='logo3' /><span id="menuTxt3"> License Tier</span></li></Link>
        <Link to='' className='referLink'><li className="navItem" id="transactions"><FaDollarSign className='navLogo' id='logo4' /><span id="menuTxt4"> Transactions</span></li></Link>
        <Link to='' className='referLink'><li className="navItem" id="faq"><FaQuestionCircle className='navLogo' id='logo5' /><span id="menuTxt5"> FAQ</span></li></Link>
      </div>
    </div>
  )
}

export default Navbar