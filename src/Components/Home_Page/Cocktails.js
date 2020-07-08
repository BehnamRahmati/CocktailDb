import React from 'react'
import CocktailCard from "./CocktailCard"
function Cocktails({ cocktails, loading }) {
  if (loading) { return <h2 className="text-capitalize text-center py-5">loading ...</h2> }
  if (cocktails.length < 0) { return <h2 className="text-capitalize text-center py-5"> no result matched your search!!!</h2> }
  return (
    <>
      <h1 className="text-capitalize py-5 text-center">cocktails</h1>
      <div className="row py-5">
        {cocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail} />)}
      </div>
    </>

  )
}

export default Cocktails
