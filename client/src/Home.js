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
    window.location.href='http://192.168.211.189:3001/'
  if (document.cookie.charAt(0).toString()!='k'){
    document.location.href='http://192.168.211.189:3001'
  }
}

const [chat, setchat] = useState('')
const [chatLoaded, setchatLoaded] = useState(false)

async function getChats(){
  console.log('Getting Chats')
  const response = await fetch(`http://192.168.211.189:8080/getChats?key=${document.cookie.slice(4)}`)
  const data = await response.json()
  setchat(JSON.stringify(data))
  setchatLoaded(true)
  console.log(data)
}
getChats()

function onQueryBtnClicked(){
  const queryBox=document.getElementById('query-chat-box')
  if (queryBox.style.display=='flex'){
    queryBox.style.display='none'
  }else{
    queryBox.style.display='flex'
  }
}

async function onQuerySend(){
  const msg=document.getElementById('query-input').value
  await fetch(`http://192.168.211.189:8080/sendQuery?key=${document.cookie}&msg=${msg}`)
  setreload(true)
  msg=''
}

  const [reload, setreload] = useState(false)

  return (
    <div className='home'>
        <Navbar />
        <Content />
        <div className="query-chat-box" id='query-chat-box'>
        <h5 className="query-box-header">Chat</h5>
        <div className="query-chat-area chatsarea">
        {chatLoaded ? JSON.parse(chat).map((msg)=>{
          console.log('msg=>',msg)
          // {/* return <Message key={msg+Math.random()} sender={Object.keys(msg)[0]} msg={msg[Object.keys(msg)[0]]} /> */}
          return <Message sender={Object.keys(msg)[0]} msg={msg[Object.keys(msg)[0]]} key={msg[Object.keys(msg)[0]]+Math.random()} />
        }):''}
        </div>
        <div className="query-input-div"><input type="text" placeholder='Ask Question' id='query-input' className='query-input' /><IoIosSend className='send-btn' onClick={onQuerySend} /></div>
      </div>
      <div className="query" onClick={onQueryBtnClicked}>
        <RiQuestionnaireFill />&nbsp;Query
      </div>
    </div>
  )
}

export default Home