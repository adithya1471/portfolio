import React from 'react'
 import './SignUp.css'
import NavBar from './NavBar'

const SignUp=()=>{
    
    return(
        <>  
        <NavBar />
        <section>
        <div className='main-head'>
            <form action="">
                    <h1>Login Form</h1>
                    <div className="input-box">
                        <input type="text" required/>
                        <label htmlFor="">
                            Email
                        </label>
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className="input-psw">
                        <input type="password" required/>
                        <label htmlFor="">
                            Password
                        </label>
                        <i class="fa-regular fa-eye"></i>
                    </div>
                    <div className="forget">
                        <label htmlFor="">
                            <input type="checkbox" />
                            Remember me &nbsp;
                            <a href="">
                                Forgot Passoword
                            </a>
                        </label>
                        </div>
                        <button className='login-button'>Login</button>
                        <div className="register">
                            <label htmlFor="">
                                Don't have an account?&nbsp;
                                <a href="">Register</a>&nbsp;
                                Here
                            </label>
                        </div>   
                </form>
        </div>
        </section>
         </> 
    )
}
export default SignUp