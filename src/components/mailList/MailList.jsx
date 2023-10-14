import './mailList.css'
import React from 'react'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save Money, save Time $$$</h1>
        <span className="mailDesc">Sign up and get amazing deals </span>
        <div className="mailContainer">
           <input type="text" placeholder='enter your email'/>
           <button>Submit</button>
        </div>
    </div>
  )
}

export default MailList