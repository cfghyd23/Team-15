import React from 'react'
import './details.css';
import viewDetail from './viewDetail';
import Avatar from '../assets/logo.jpg'

export default function Details() {
  return (
    <div className="container">
      <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
    <img className="me-3" src={Avatar} alt="" width="48" height="38"/>
    <div className="lh-1">
      <h1 className="h6 mb-2 text-white lh-1">Rainbow Homes Foundation</h1>
      <h2>Ward Details</h2>
    </div>
    </div>
      <h3>Name: <span style={{color: 'purple'}}>Laxmi</span></h3>
      <h3>Email: <span style={{color: 'purple'}}>laxmi@gmail.com</span></h3>
      <h3>DOB: <span style={{color: 'purple'}}>10-12-1998</span></h3>
      <h3>Aadhaar: <span style={{color: 'purple'}}>655642423156</span></h3>
      <h3>Residence: <span style={{color: 'purple'}}>Kukatpally</span></h3>
      <h3>Education: <span style={{color: 'purple'}}>GMC</span></h3>
      <h3>Employment: <span style={{color: 'purple'}}>Medicover Hospitals</span></h3>
    </div>
  )
}
