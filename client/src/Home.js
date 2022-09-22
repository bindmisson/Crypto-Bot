import React from 'react'
import './Home.css'
import Content from './HomeComponents/Content'
import Navbar from './HomeComponents/Navbar'


function Home() {
  return (
    <div className='home'>
        <Navbar />
        <Content />
    </div>
  )
}

export default Home