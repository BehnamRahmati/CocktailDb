import React from 'react'

import { FaAngleRight } from "react-icons/fa"

// =====================================

// =====================================
function SearchForm() {
  return (
    <form className="row py-5 ">
      <div className="col-8 mx-auto border rounded p-0">
        <div className="d-flex align-items-center justify-content-center ">
          <FaAngleRight className="h3 m-0" />
          <input className="form-control border-0 outline-0" type="text" name="search" value={""} onChange={() => console.log("hello")} placeholder=" Search for your favorite cocktail" />
        </div>
      </div>
    </form>
  )
}

export default SearchForm
