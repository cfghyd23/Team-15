import React from 'react'

export default function Navbar() {
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
    </div>
  )
}