import React, { createContext, useEffect, useState } from "react";
import Ingredient from "../Class/Ingredient";
import { GetRecipesFromDB, GetIngredientsFromDB, PostIngredientsToDB, PostRecipesToDB } from "../DBRequests"



export const MyKitchenContext = createContext();

export default function MyKitchenConextProvider(props) {
    const [ingredientList, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState({ name: "", image: "", calories: "" })
    const [addedIngredients, setaddedIngredients] = useState([])
    const [recipesCreated, setrecipesCreated] = useState([])
    const [currentRecipe, setCurrentRecipe] = useState({ name: "", image: "", time: "", cookingMethod: "" })

    const [ingredient2DB, setIngredient2DB] = useState(null)
    const [recipe2DB, setRecipe2DB] = useState(null)



    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        try {
            if (ingredient2DB) {
                const value = ingredient2DB
                if (value != null)
                    PostIngredientsToDB(value);
                setIngredient2DB(null)
            }

            if (recipe2DB) {
                const value = recipe2DB
                if (value !=null)
                    PostRecipesToDB(value);
                setRecipe2DB(null)
            }
        } catch (err) {
            console.log(err)
        }
    }, [ingredient2DB, recipe2DB])



    const addRecipeToList = (recipe) => {
        const recipeIngredients = ingredientList.filter(x => addedIngredients.includes(x.id));
        let recipeCalories = 0;
        recipeIngredients.forEach(x => recipeCalories += parseInt(x.calories));

        const newRecipe = {
            id: recipesCreated.length + 1,
            name: recipe.name,
            image: recipe.image,
            time: recipe.time,
            cookingMethod: recipe.cookingMethod,
            calories: recipeCalories,
            ingredients: recipeIngredients
        }
        setrecipesCreated([...recipesCreated, newRecipe])
        setRecipe2DB(newRecipe)
        setaddedIngredients([])
        setCurrentRecipe({ name: "", image: "", time: "", cookingMethod: "" })
    }

    const addIngredientToList = (ingredient) => {
        const newIngredient = new Ingredient(ingredientList.length + 1, ingredient.name, ingredient.image, ingredient.calories)
        setIngredients([...ingredientList, newIngredient]);
        setIngredient2DB(newIngredient)
        setNewIngredient({ name: "", image: "", calories: "" })
    }

    const addedIngredientsSetter = (ingredientID) => {
        setaddedIngredients([...addedIngredients, ingredientID]);
    }

    const removeAddedIngredient = (ingredientID) => {
        const updatedAddedIngredients = addedIngredients.filter(x => x != ingredientID)
        setaddedIngredients(updatedAddedIngredients)
    }

    async function fetchData() {
        try {
            const recipes = await GetRecipesFromDB();
            const ingredients = await GetIngredientsFromDB();
            if (recipes.length > 0) {
                let newRecipes = [];
                recipes.forEach(recipe => {
                    const isExist = recipesCreated.some(rec => rec.id === recipe.id);
                    const recipeIngs = recipe.ingredients;

                    if (!isExist) {
                        const recipeIngredients = ingredients.filter(x => recipeIngs.some(ing => ing.id === x.id));
                        let recipeCalories = 0;
                        recipeIngredients.forEach(x => recipeCalories += parseInt(x.calories));

                        const newRecipe = {
                            id: recipe.id,
                            name: recipe.name,
                            image: recipe.image,
                            time: recipe.time,
                            cookingMethod: recipe.cookingMethod,
                            calories: recipeCalories,
                            ingredients: recipeIngredients
                        }

                        newRecipes.push(newRecipe)
                    }
                });
                setrecipesCreated(newRecipes)


            }
            if (ingredients.length > 0) {
                let newIngs = [];
                ingredients.forEach(ingredient => {
                    const newIngredient = new Ingredient(ingredient.id, ingredient.name, ingredient.image, ingredient.calories)
                    const isExist = ingredientList.some(ing => ing.id === newIngredient.id);
                    if (!isExist)
                        newIngs.push(newIngredient)

                });
                setIngredients(newIngs);

            }
        } catch (err) {
            console.log(err)
        }
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