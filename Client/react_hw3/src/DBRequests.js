
const ingredientApiUrl = "https://localhost:44362/api/ingredient";

const recipeApiUrl = "https://localhost:44362/api/recipe";

export const GetRecipesFromDB = () => {
    return fetch(recipeApiUrl, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
        })
    })
        .then(res => {
            return res.json()
        },
            (error) => {
                console.log("err post=", error);
                return [];
            });
}

export const GetIngredientsFromDB = () => {
    return fetch(ingredientApiUrl, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
        })
    }) 
        .then(res => {
            return res.json()
        },
            (error) => {
                console.log("err post=", error);
                return [];
            });
}

export const PostIngredientsToDB = (value) => {
    fetch(ingredientApiUrl, {
        method: 'POST',
        body: JSON.stringify(value),
        headers: new Headers({
            'Content-type': 'application/json; charset=UTF-8'
        })
    })
        .then(res => {
            console.log(res);
        });
 
}

export const PostRecipesToDB = (value) => {
    fetch(recipeApiUrl, {
        method: 'POST',
        body: JSON.stringify(value),
        headers: new Headers({
            'Content-type': 'application/json; charset=UTF-8'
        })
    })
        .then(res => {
            console.log(res);
        });
}