import React from 'react'
import './details.css'
import UserDetail from './UserDetail'
import Avatar from '../assets/logo.jpg'

export default function Details() {
  return (
    <div className="container">
      <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
    <img className="me-3" src={Avatar} alt="" width="48" height="38"/>
    <div className="lh-1">
      <h1 className="h6 mb-2 text-white lh-1">Rainbow homes</h1>
      <p>UserDetail</p>
    </div>
  </div>
  {Object.entries(UserDetail).map(([key, value]) => {
        return (
          <div key={key}>
            <h4>
              {key}: {UserDetail[key]}
            </h4>
            <hr />
          </div>
        );
      })}
    
    </div>
  )
}
