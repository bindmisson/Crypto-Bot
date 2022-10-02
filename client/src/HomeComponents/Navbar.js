import React from 'react'
import './Navbar.css'
import {MdAccountCircle, MdSpaceDashboard} from 'react-icons/md'
import {FaChartLine, FaQuestionCircle, FaUserCircle, FaDollarSign, FaKey, FaMoneyBillWaveAlt} from 'react-icons/fa'
import {BsGearFill} from 'react-icons/bs'
import {HiCurrencyDollar, HiMenu} from 'react-icons/hi'
import { GrLicense } from 'react-icons/gr'
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
      document.getElementById('menuTxt2').style.display='none'
      document.getElementById('menuTxt3').style.display='none'
      document.getElementById('menuTxt4').style.display='none'
      document.getElementById('menuTxt5').style.display='none'
      // document.getElementById('dahboardItem').style.padding='20px 20px'
      // document.getElementById('logo1').style.marginRight='0'
      // document.getElementById('logo2').style.marginTop='0'
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
        <Link to='dashboard' className='referLink'><li className="navItem" id="dashboardItem"><MdSpaceDashboard className='navLogo' id='logo1' /><span id="menuTxt1"> Dashboard</span></li></Link>
        <Link to='license' className='referLink'><li className="navItem" id="licenseItem"><FaKey className='navLogo' id='logo3' /><span id="menuTxt3"> License Tier</span></li></Link>
        <Link to='transactions' className='referLink'><li className="navItem" id="transactionsItem"><FaMoneyBillWaveAlt className='navLogo' id='logo4' /><span id="menuTxt4"> Transactions</span></li></Link>
        <Link to='settings' className='referLink'><li className="navItem" id="settingsItem"><BsGearFill className='navLogo' id='logo2' /><span id="menuTxt2"> Settings</span></li></Link>
        <Link to='faq' className='referLink'><li className="navItem" id="faqItem"><FaQuestionCircle className='navLogo' id='logo5' /><span id="menuTxt5"> FAQ</span></li></Link>
      </div>
    </div>
  )
}

export default Navbar