import React from 'react'
import './Home.css'
import Content from './HomeComponents/Content'
import Navbar from './HomeComponents/Navbar'


function Home() {

  if (document.cookie.charAt(0).toString()!='k'){
    document.location.href='http://192.168.43.57:3000'
  }

  return (
    <div className='home'>
        <Navbar />
        <Content />
    </div>
  )
}

export default Home