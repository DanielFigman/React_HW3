import React, { createContext, useState } from "react";
import  Ingredient  from "../Class/Ingredient";



export const MyKitchenContext = createContext();

export default function MyKitchenConextProvider(props){
    const [ingredientList, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState({name: "", img: "", calories:""})



    const addIngredientToList = (ingredient) => {
        const newIngredient = new Ingredient(ingredientList.length + 1, ingredient.name,  ingredient.img, ingredient.calories )
        setIngredients([...ingredientList, newIngredient]);
        setNewIngredient({name:"", img: "", calories: ""})
    }


    return (
        <MyKitchenContext.Provider value={{ingredientList, addIngredientToList,newIngredient, setNewIngredient}}>
            {props.children},
        </MyKitchenContext.Provider>
    )
}