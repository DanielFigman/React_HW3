import React, { createContext, useState } from "react";
import Ingredient from "../Class/Ingredient";



export const MyKitchenContext = createContext();

export default function MyKitchenConextProvider(props) {
    const [ingredientList, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState({ name: "", img: "", calories: "" })
    const [addedIngredients, setaddedIngredients] = useState([])
    const [recipesCreated, setrecipesCreated] = useState([])
    const [currentRecipe, setCurrentRecipe] = useState({name:"", img:"", cTime:"", cMethod:""})



    const addRecipeToList = (recipe) => {
        const recipeIngredients = ingredientList.filter(x => addedIngredients.includes(x.id));
        let recipeCalories = 0;
        recipeIngredients.forEach(x => recipeCalories += parseInt(x.calories));

        const newRecipe = {
            id: recipesCreated.length + 1,
            name: recipe.name,
            img: recipe.img,
            cTime: recipe.cTime,
            cMethod: recipe.cMethod,
            calories: recipeCalories,
            ingredients: recipeIngredients
        }
        setrecipesCreated([...recipesCreated, newRecipe])
        setaddedIngredients([])
        setCurrentRecipe({name:"", img:"", cTime:"", cMethod:""})
    }

    const addIngredientToList = (ingredient) => {
        const newIngredient = new Ingredient(ingredientList.length + 1, ingredient.name, ingredient.img, ingredient.calories)
        setIngredients([...ingredientList, newIngredient]);
        setNewIngredient({ name: "", img: "", calories: "" })
    }

    const addedIngredientsSetter = (ingredientID) => {
        setaddedIngredients([...addedIngredients, ingredientID]);
    }

    const removeAddedIngredient = (ingredientID) => {
        const updatedAddedIngredients = addedIngredients.filter(x => x != ingredientID)
        setaddedIngredients(updatedAddedIngredients)
    }


    return (
        <MyKitchenContext.Provider
            value={{
                ingredientList,
                addIngredientToList,
                newIngredient,
                setNewIngredient,
                addedIngredients,
                addedIngredientsSetter,
                removeAddedIngredient,
                recipesCreated,
                addRecipeToList,
                currentRecipe, 
                setCurrentRecipe
            }}>
            {props.children},
        </MyKitchenContext.Provider>
    )
}