import React from 'react'
import './Home.css'
import Content from './HomeComponents/Content'
import Navbar from './HomeComponents/Navbar'


function Home() {

  if (document.cookie.charAt(0)!='k'){
    window.location.href='http://192.168.162.189:3000/'
  }

  return (
    <div className='home'>
        <Navbar />
        <Content />
    </div>
  )
}

export default Home