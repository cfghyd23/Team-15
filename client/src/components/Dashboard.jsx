import React from 'react'
import Data from './Data'
import Details from './Details'
import { Link, Navigate, Routes, useNavigate ,Route} from "react-router-dom";

export default function Dashboard() {


    const navigate= useNavigate()
    const handleclick = () => {
        navigate('/Details');
    }

  return (
    <div>
      
<div className="container my-5 align-items-center">
  <h2>My Rainbow Home Wards</h2>
  <br/>
  <table className="table table-striped" style={{borderCollapse: "separate", borderSpacing: "10px"}}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Education</th>
        <th>Employment</th>
      </tr>
    </thead>
    <tbody>
    {Data.map((item) => (
      
          <tr key={item.email} style={{marginBottom:"20px"}}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.Education}</td>
            <td>{item.Employment}</td>
            <button type="button" className="btn btn-success" onClick={(item) => handleclick(item)}>View Details</button>
          </tr>
          
        ))}
    </tbody>
  </table>
  </div>
    </div>
  )
}

  