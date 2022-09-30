import React from 'react'
import './Home.css'
import Content from './HomeComponents/Content'
import Navbar from './HomeComponents/Navbar'


function Home() {

<<<<<<< HEAD
  if (document.cookie.charAt(0)!='k'){
    window.location.href='http://192.168.162.189:3000/'
=======
  if (document.cookie.charAt(0).toString()!='k'){
    document.location.href='http://192.168.43.57:3000'
>>>>>>> c81a1e8b4515f0ef6ed61a746c44b0130bb785d3
  }

  return (
    <div className='home'>
        <Navbar />
        <Content />
    </div>
  )
}

export default Home