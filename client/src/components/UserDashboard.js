import React from 'react'
import Avatar from '../assets/logo.jpg'
import { Link, Navigate, Routes, useNavigate ,Route} from "react-router-dom";


export default function UserDashboard() {

    const navigate=useNavigate();


  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-primary-subtle">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Edit profile</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
     
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>
<div class="px-4 text-center">
    <img class="d-block mx-auto" src={Avatar} alt="" width="200" height="150"/>
    <h3>We rise by Lifting others!</h3>
  </div>
  <div class="row align-items-md-stretch mt-5">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Your Guide</h2>
          <p>FirstName: <span>V Reddy</span></p>
          <p>LastName: <span>Sainath</span></p>
          <p>Email: <span>nath23927@gmail.com</span></p>
          <p>Email: <span>9440397327</span></p>
          </div>

      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h3>We are there throughout your thick and thin! Share your grievances here!</h3>
          <button class="btn btn-outline-secondary mt-3" type="button" onClick={()=>{
            navigate('/UserForm')
          }}>Contact Form</button>
        </div>
      </div>
    </div>
    </div>
  )
}
