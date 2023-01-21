import React, { useState, useContext } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { MyKitchenContext } from './MyKitchenContext';
import Carousel from 'react-bootstrap/Carousel';
import NoRecipe from './NoRecipeAlert';









export const RecipeCard = () => {

    const { recipesCreated } = useContext(MyKitchenContext);

    const ingredients = (recipe) => {
        if (recipe && recipe.ingredients)
            return (
                recipe.ingredients.map(ingredient =>
                    <li key={ingredient.id}>
                        {ingredient.name}
                    </li>)
            );
    }


    const recipes = recipesCreated.map(recipe =>
        <Carousel.Item key={recipe.id} >
            <Card style={{ width: '18rem', marginTop: "30px", border: "solid" }}>
                <h6>
                    {
                        recipesCreated.length == recipe.id ?
                            <Badge bg="secondary" style={{
                                position: "absolute", right: "1%", marginTop: "1%"
                            }}>
                                New
                            </Badge>
                            : ""
                    }
                </h6>
                <Card.Img style={{ width: "9rem", position: "relative", left: "25%" }}
                    variant="top"
                    src={recipe.image}
                />
                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>{recipe.name}</Card.Title>
                    <Card.Text style={{ textAlign: "center" }}>
                        {recipe.calories != "" ? "Calories: " : ""}<b>{recipe.calories}</b>
                    </Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>
                        Coocking time: <b>{recipe.time}</b> min
                    </Card.Text>
                </Card.Body>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ingredients</Accordion.Header>
                        <Accordion.Body>
                            {
                                <ul>
                                    {ingredients(recipe)}
                                </ul>
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Coocking method</Accordion.Header>
                        <Accordion.Body>
                            {recipe.cookingMethod}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </Carousel.Item>
    )


    return (
        recipesCreated.length == 0 ? <NoRecipe /> :
            <div className='ingredientCard'>
                {recipes.length > 0 ?
                    <Carousel variant="dark" style={{ padding: "0px 5px 20px 5px" }}>
                        {recipes}
                    </Carousel>
                    :
                    ""
                }


            </div>

    )
}

export default RecipeCard;
