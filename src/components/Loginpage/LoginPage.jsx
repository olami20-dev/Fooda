import React, { useState } from 'react'
import './LoginPage.css'
import { assets } from '../../assets/assets';

const LoginPage = ({setLogin}) => {
    const [current ,setCurrent] = useState("Login");
  return (
    <div className='login-popup'>
      <form className='login-popup-conatiner'>
        <div className="login-popup-title">
            <h2>{current}</h2>
            <img  onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {current === "Login"? <></>: <input type="text" placeholder='Your name' required /> }
           
             <input type="email" placeholder='Your email' required />
              <input type="password" placeholder='Your password' required />
        </div>
        <button>{current === "Sign Up"? "Create account": "login"}</button>
        <div className="login-popup-condition">
            <input type="checkBox" required />
            <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {current === "Login"?
        <p>Create a new account? <span onClick={() => setCurrent("Sign Up")}>Click here</span></p>:
          <p>Already have an account? <span  onClick={() => setCurrent("Login")}>Login here</span></p>
          }
      </form>
    </div>
  )
}

export default LoginPage
