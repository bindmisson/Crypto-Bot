import React from 'react'
import './Home.css'
import Content from './HomeComponents/Content'
import Navbar from './HomeComponents/Navbar'
import Message from './HomeComponents/QueryComponents/Message'
import { useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import { RiQuestionnaireFill } from 'react-icons/ri'


function Home() {

  if (document.cookie.charAt(0)!='k'){
    window.location.href='http://localhost:3000/'
  if (document.cookie.charAt(0).toString()!='k'){
    document.location.href='http://localhost:3000'
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