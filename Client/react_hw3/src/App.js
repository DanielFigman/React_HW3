import React from 'react'
import CreateIngredient from './FCComponents/CreateIngredient'
import CreateRecipe from './FCComponents/CreateRecipe'
import MyKitchenConextProvider from './FCComponents/MyKitchenContext'
import { RecipeCard } from './FCComponents/RecipeCard'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';



export default function App() {
  return (
    <div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <header style={{ backgroundColor: "black", color:"black"}}>
          <Link style={{color:"beige", fontWeight:"bold"}} to="/">My Kitchen</Link> |
          <Link style={{color:"beige",  fontWeight:"bold"}} to="/ingredient">Create Ingredient</Link> |
          <Link style={{color:"beige",  fontWeight:"bold"}} to="/recipe">Create Recipe</Link>
        </header>
      </div>

      <MyKitchenConextProvider>
        <Routes>
          <Route path="/" element={<RecipeCard />} />
          <Route path="/ingredient" element={<CreateIngredient />} />
          <Route path="/recipe" element={<CreateRecipe />} />
        </Routes >
      </MyKitchenConextProvider >
    </div>
  )
}
