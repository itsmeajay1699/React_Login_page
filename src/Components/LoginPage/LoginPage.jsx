import React from 'react'
import './login.css'
 function LoginPage() {
  return (
    <div className='main'>
       <div className="main-container">
        <div className="login-text">
            <button className='btn'>LOG IN</button>
            <button className='btn'>SIGN UP</button>
        </div>
        <div className="login-form">
            <h1>Log In</h1>
            <form action="">
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
            </form>
            <button className='btn'>Submit</button>
        </div>
       </div>
    </div>
  )
}
export default LoginPage