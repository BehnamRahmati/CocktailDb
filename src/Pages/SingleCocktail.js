import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();

        console.log(data.drinks[0]);

        if (data.drinks) {
          const { strDrink: name, strDrinkThumb: image, strCategory: category, strGlass: glass, strInstructions: info, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = data.drinks[0]
          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
          const newCocktail = { name, image, category, glass, info, ingredients }
          setCocktail(newCocktail);
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
    getCocktail();
  }, [id])
  console.log(cocktail);
  if (loading) { return <h1 className="py-5 text-center">loading ...</h1> }
  if (!cocktail) {
    return (
      <h1 className="py-5 text-center">no cocktail to display</h1>
    )
  } else {
    const { name, image, category, glass, info, ingredients } = cocktail
    return (
      <main>
        <h1 className="text-center py-5">{name}</h1>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6">
              <img src={image} alt={name} className="img-thumbnail" />
            </div>
            <div className="col-10 mx-auto col-md-6 py-5">
              <p className="text-capitalize"> name : {name}</p>
              <p className="text-capitalize"> category : {category}</p>
              <p className="text-capitalize"> glass : {glass}</p>
              <p className="text-capitalize"> info : {info}</p>
              {ingredients.map((item, index) => item ? <p key={index} className="text-capitaliz"> {item}</p> : null)}
            </div>
          </div>
        </div>
      </main>
    )
  }

}
