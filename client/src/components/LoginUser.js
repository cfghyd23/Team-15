import React, {useState} from "react";
import '../App.css';

export const LoginUser =() =>{
    const [email, setEmail] =useState('');
    const [pass,setPass]=useState('');
    const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(email);

    }
    return(
      <div className="auth-form-container container-fluid" style={{width: '400px'}}>
        <h1 className="title">LOGIN as  Rainbow Homes User</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label for="email">email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" id="email" name="email"  />
          <label for="password">password</label>
          <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" id="password" name="password"  />
          <button type="submit">Log In</button>
        </form> 
        <button className="link-btn">Don't have an account?Register Here.</button>
      </div>
    )}