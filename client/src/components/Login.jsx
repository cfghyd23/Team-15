import './login.css'
import React, { useState } from 'react'
import Avatar from '../assets/logo.jpg'
import { Link, Navigate, Routes, useNavigate ,Route} from "react-router-dom";


export default function Login() {

    const navigate=useNavigate();

    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleChange = event => {
        console.log(isSubscribed);
        setIsSubscribed(current => !current);
      };

  return (
    <div className='container'>
     <div className="wrapper">
        <div className="top">
            <img src={Avatar}/>
            <h4>Login</h4>
        </div>
        <input placeholder='abc@gmail.com'style={{padding:"18px",borderRadius:"10px"}}/>
        <br/>
        <input type="password" placeholder='Password' style={{padding:"18px",borderRadius:"10px"}}/>
        <br/>
        <span><input type="checkbox" style={{paddingBottom:"5px"}} value={isSubscribed}
          onChange={handleChange}/> Tick if Admin</span>
         <br/>
        <button type="button"  onClick={()=>{

            if(isSubscribed)
            {
              navigate('/Dashboard');
            
            }
            else
            {
              navigate('/userDashboard');            
            }
        }}>Login</button>        
     </div>
    
    </div>
  )
}
