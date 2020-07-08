import React from 'react'
import logo from "../logo.svg"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="p-3 border-bottom">
      <div className="row">
        <div className="col-6">
          <img height="55" src={logo} alt="logo" />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <Link className="text-capitalize py-2 px-4 h5 m-0 navbar__links" to="/about">about</Link>
          <Link className="text-capitalize py-2 px-4 h5 m-0 navbar__links" to="/">home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
