import React from 'react'
import { FaTwitter, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
const today = new Date().getFullYear();
function Footer() {
  return (
    <footer className="footer p-3">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="text-capitalize text-light m-0" >this website's copyright &copy; belongs to behnam rahmati: {today}</p>
          </div>
          <div className="col-6 text-right">
            <FaTwitter className="text-light h3 mx-2" />
            <FaFacebookSquare className="text-light h3 mx-2" />
            <FaInstagramSquare className="text-light h3 mx-2" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
