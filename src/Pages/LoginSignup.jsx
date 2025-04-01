import React from 'react'
import './CSS/loginsignup.css'


const loginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
<h1>Sign Up</h1>
<div className="loginsignup-fields">

  <input type="text" placeholder='Your Name' />
  <input type="email" placeholder='Email Address' />
  <input type="password" placeholder='Password' />
</div>

<button>Continue</button>

<p className="loginsignup-login">
Already Have an Account <span>Login</span>
</p>


<div className="loginsignup-agree">
  <input type="Checkbox" name=' '  id=''/>
  <p>By Continuing, i Agree to the of use & privacy Policy.</p>
</div>

      </div>
    </div>
  )
}

export default loginSignup
