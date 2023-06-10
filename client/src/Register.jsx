import React, {useState} from "react";
export const Register =(props) =>{
    const [email, setEmail] =useState('');
    const [pass,setPass]=useState('');
    const [name, setName]=useState('');
    const[names,setNames]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
          <h1 className="title">REGISTER HERE AS ADMIN!!!</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} name="name" id="name" placeholder="full Name"/>
          
          <label htmlFor="names">Homeward Name</label>
            <input value={names} onChange={(e)=>setNames(e.target.value)} name="name" id="name" placeholder="full Name"/>
            <label htmlFor="email">email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="email@gmail.com" id="email" name="email"  />
          <label htmlFor="password">password</label>
          <input value={pass} onChange={(e)=>setPass(e.target.value)}type="password" placeholder="**********" id="password" name="password"  />
          <button type="submit">Log In</button>
        </form> 
        <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account?Login Here.</button>
      </div>
    )
}