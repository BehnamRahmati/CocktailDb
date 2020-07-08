import React, { useState, useEffect } from 'react'
import SearchForm from "../Components/Home_Page/SearchForm"
import Cocktails from '../Components/Home_Page/Cocktails'
// =============================
function Home() {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [cocktails, setCocktails] = useState([])
  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await response.json();
        const { drinks } = data
        if (drinks) {
          const newCocktails = drinks.map(item => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
            return ({ id: idDrink, title: strDrink, alcoholic: strAlcoholic, glass: strGlass, img: strDrinkThumb })
          })
          setCocktails(newCocktails)
        } else {
          setCocktails([])
        }

        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    }

    getDrinks();
  }, [search])
  return (
    <main className="container">
      <SearchForm setSearch={setSearch} />
      <Cocktails loading={loading} cocktails={cocktails} />
    </main>
  )
}

export default Home
