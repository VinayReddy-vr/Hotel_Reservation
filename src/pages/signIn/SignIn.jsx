import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './signIn.css';
import React from 'react'
import { faCircleQuestion, faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faApple, faFacebook, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons'

const SignIn = () => {
  return (
    <div className='siContainer'>
        <div className='siNavContainer'>
            <div className="siNavbar">
                <h2>TravelPedia</h2>
                <div className="siNavIcons">
                    <FontAwesomeIcon icon={faGlobe} className='icons'/>
                    <FontAwesomeIcon icon={faCircleQuestion} className='icons'/>
                </div>
            </div>
        </div>
        <div className="siContentContainer">
          <div className="siTextContainer">
            <div className="siText">
               <h2>Sign in or create an account </h2>
               <div className="siTextInput">
                 <div className="siInputdiv">
                 <label>Email address</label>
                 <input type='text' placeholder='Enter your email address' className='siTInput'/>
                 </div>
                 <button className='siBtn'>Continue with email</button>
                 <div className="siOther">
                    <div className='siline'>
                        <div className="line"></div>
                        <p>or use one of these options</p>
                        <div className="line"></div>
                    </div>
                    <div className="slineIcons">
                        <div className="sli">
                           <FontAwesomeIcon icon={faFacebook} className='slIcons'/>
                        </div>
                       <div className="sli">
                         <FontAwesomeIcon icon={faGoogle} className='slIcons'/>
                       </div>
                        <div className="sli">
                        <FontAwesomeIcon icon={faApple} className='slIcons'/>
                        </div>
                    </div>
                    <div className="custom-line"></div>
                 </div>
                 <div className="siFooter">
                    <p>By signing in or creating an account, you agree with our <span>Terms & <br/>Conditions </span>and <span>Privacy Statement</span></p>
                    <div className="custom-line"></div>
                    <span>Do not sell my personal information – California residents only</span>
                    <div className="custom-line"></div>
                    <p>All rights reserved.</p>
                    <p>Copyright (2023) – TravelPedia</p>
            </div>
               </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default SignIn