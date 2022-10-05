import React from 'react'
import './Home.css'
import Content from './HomeComponents/Content'
import Navbar from './HomeComponents/Navbar'


function Home() {

  if (document.cookie.charAt(0)!='k'){
    window.location.href='http://127.0.0.1:3000/'
  if (document.cookie.charAt(0).toString()!='k'){
    document.location.href='http://127.0.0.1:3000'
  }
}

  return (
    <div className='home'>
        <Navbar />
        <Content />
    </div>
  )
}

export default Home