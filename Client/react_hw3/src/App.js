import React from 'react'
import CreateIngredient from './FCComponents/CreateIngredient'
import IngredientCard from './FCComponents/IngredientCard'
import MyKitchenConextProvider from './FCComponents/MyKitchenContext'

export default function App() {
  return (
    <MyKitchenConextProvider>
      <CreateIngredient />
    </MyKitchenConextProvider>
  )
}
