import React from 'react'
import { Link } from "react-router-dom"
function CocktailCard({ cocktail }) {
  return (
    <div className="col-10 mx-auto col-sm-6 col-md-4 py-3">
      <div className="card">
        <img src={cocktail.img} alt={cocktail.title} className="card-img-top" />
        <h3 className="mx-2">{cocktail.title}</h3>
        <h5 className="mx-2">{cocktail.glass}</h5>
        <p className="text-muted mx-2">{cocktail.alcoholic}</p>
        <Link className="text-capitalize btn btn-primary btn-details" to={`/cocktail/${cocktail.id}`}> details </Link>
      </div>
    </div>
  )
}

export default CocktailCard
