import React from 'react'
import './FAQ.css'
import {RiQuestionnaireFill} from 'react-icons/ri'
import {IoIosSend} from 'react-icons/io'

function FAQ() {

  function onQueryBtnClicked(){
    const queryBox=document.getElementById('query-chat-box')
    if (queryBox.style.display=='flex'){
      queryBox.style.display='none'
    }else{
      queryBox.style.display='flex'
    }
  }

  function onQuerySend(){

  }

  return (
    <div className='faq'>
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div className="faqs">
      <h2 className="faq-ques">What is this Trading Bot?</h2>
      <div className="faq-ans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor fuga aperiam maiores explicabo pariatur corrupti enim nesciunt quasi tempore tempora, sunt ratione facere magni consequatur. Et veniam, delectus impedit, eveniet amet reprehenderit, labore rem tenetur exercitationem quae fugiat facere. Aliquid!</div>
      <br />
      <h2 className="faq-ques">What is this Trading Bot?</h2>
      <div className="faq-ans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor fuga aperiam maiores explicabo pariatur corrupti enim nesciunt quasi tempore tempora, sunt ratione facere magni consequatur. Et veniam, delectus impedit, eveniet amet reprehenderit, labore rem tenetur exercitationem quae fugiat facere. Aliquid!</div>
      <br />
      <h2 className="faq-ques">What is this Trading Bot?</h2>
      <div className="faq-ans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor fuga aperiam maiores explicabo pariatur corrupti enim nesciunt quasi tempore tempora, sunt ratione facere magni consequatur. Et veniam, delectus impedit, eveniet amet reprehenderit, labore rem tenetur exercitationem quae fugiat facere. Aliquid!</div>
      <br />
      <h2 className="faq-ques">What is this Trading Bot?</h2>
      <div className="faq-ans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor fuga aperiam maiores explicabo pariatur corrupti enim nesciunt quasi tempore tempora, sunt ratione facere magni consequatur. Et veniam, delectus impedit, eveniet amet reprehenderit, labore rem tenetur exercitationem quae fugiat facere. Aliquid!</div>
      <br />
      <h2 className="faq-ques">What is this Trading Bot?</h2>
      <div className="faq-ans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor fuga aperiam maiores explicabo pariatur corrupti enim nesciunt quasi tempore tempora, sunt ratione facere magni consequatur. Et veniam, delectus impedit, eveniet amet reprehenderit, labore rem tenetur exercitationem quae fugiat facere. Aliquid!</div>
      </div>
      <div className="query-chat-box" id='query-chat-box'>
        <h5 className="query-box-header">Chat</h5>
        <div className="query-chat-area"></div>
        <div className="query-input-div"><input type="text" placeholder='Ask Question' className='query-input' /><IoIosSend className='send-btn' onClick={onQuerySend} /></div>
      </div>
      <div className="query" onClick={onQueryBtnClicked}>
        <RiQuestionnaireFill />&nbsp;Query
      </div>

    </div>
  )
}

export default FAQ