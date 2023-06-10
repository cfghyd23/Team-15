import React from 'react'
import Data from './Data'

export default function Dashboard() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Admin Profile</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
      </ul>
      <form className="d-flex" role="search">
       <button className="btn btn-outline-success" type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>
<div class="container my-5 align-items-center">
  <h2>Student Details</h2>
  <br/>
  <table class="table table-striped" style={{borderCollapse: "separate", borderSpacing: "10px"}}>
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
            <button type="button" class="btn btn-success">View Details</button>
          </tr>
     
          </>
          
        ))}

      
    </tbody>
  </table>
  </div>
    </div>
  )
}

  