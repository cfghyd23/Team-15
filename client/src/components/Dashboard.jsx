import React from 'react'
import Data from './Data'
import Details from './Details'
import { Link, Navigate, Routes, useNavigate ,Route} from "react-router-dom";



export default function Dashboard() {

    const navigate=useNavigate()
    const handleclick = ()=>{
        navigate('/Details');
    }

  return (
    <div>
<div className="container my-5 align-items-center">
  <h2>Student Details</h2>
  <br/>
  <table className="table table-striped" style={{borderCollapse: "separate", borderSpacing: "10px"}}>
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
    {Data.map((item) => (
        <>
          <tr style={{marginBottom:"20px"}}>
            <td>{item.Name}</td>
            <td>{item.mobile}</td>
            <td>{item.email}</td>
            <button type="button" className="btn btn-success" onClick={handleclick}>View Details</button>
          </tr>
          </>
        ))}
    </tbody>
  </table>
  </div>
    </div>
  )
}

  