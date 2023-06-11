import React from 'react'
import './details.css'
// import UserDetail from './UserDetail'
import Avatar from '../assets/logo.jpg'

export default function Details(props) {
  return (
    <div className="container">
      <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
    <img className="me-3" src={Avatar} alt="" width="48" height="38"/>
    <div className="lh-1">
      <h1 className="h6 mb-2 text-white lh-1">Rainbow Homes Foundation</h1>
      <h2>Ward Details</h2>
    </div>
    </div>  
    {console.log(props.item)}
      {/* <h3>Email: ${item.email}</h3>
      <h3>DOB: ${item.dob}</h3>
      <h3>Aadhaar: ${item.aadhaar}</h3>
      <h3>Residence: ${item.Residence}</h3>
      <h3>Education: ${item.Education}</h3>
      <h3>Employment: ${item.Employment}</h3> */}
    </div>
  )
}
