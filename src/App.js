import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// ================================  pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import Error from "./Pages/Error"
import SingleCocktail from "./Pages/SingleCocktail"
// ================================= components
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
// ============================= functions
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cocktail/:id" component={SingleCocktail} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
