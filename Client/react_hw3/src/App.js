import React from 'react'
import CreateIngredient from './FCComponents/CreateIngredient'
import CreateRecipe from './FCComponents/CreateRecipe'
import MyKitchenConextProvider from './FCComponents/MyKitchenContext'
import { RecipeCard } from './FCComponents/RecipeCard'

export default function App() {
  return (
    <MyKitchenConextProvider>
      <CreateIngredient />
      <CreateRecipe/>
      <RecipeCard/>
    </MyKitchenConextProvider>
  )
}
