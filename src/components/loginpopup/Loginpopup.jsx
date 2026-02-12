import './loginpopup.css';
import React from 'react';
import {useForm} from 'react-hook-form';

import { assets } from '../../assets/assets.js';
const LoginPopup = ({setShowlogin, setUser , user}) => { 
    const [currState, setCurrState] = React.useState('Sign Up');
    const {register, handleSubmit,reset} = useForm();
    const formSubmit = (data) => {
        console.log(data);
        setUser(data);
        setShowlogin(false);
        reset();
    }
    return(
       
        <div className='loginpopup'>
            <form onSubmit={handleSubmit(formSubmit)} className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>{setShowlogin(false)}} className="cross-icon" src={assets.cross_iconn} alt="" />
                </div>
                
                <div className="login-popup-inputs">
                    {currState === "Log In" ? <></> :<input {...register("name")} type="text" placeholder='Your name' required />}
                    <input {...register("email")} type="email" placeholder='Email address' required />
                    <input {...register("password")} type="password" placeholder='Password' required />
                </div>
                <button type="submit">{currState==="Sign Up" ? "Create Account" : "Log In"}</button>
                <div className="login-popup-condition">
                <input {...register("terms")} type="checkbox" required/>
                <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
                </div>
                {currState==="Log In" ?  <p>Create new account? <span onClick={()=>{setCurrState('Sign Up')}}>Click Here</span></p> :
                <p>Already have an account? <span onClick={()=>{setCurrState('Log In')}}>Login Here</span></p>}
       </form>
        </div>
    )
}
export default LoginPopup;