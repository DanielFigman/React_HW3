import React, { useState, useContext } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { MyKitchenContext } from './MyKitchenContext';
import Carousel from 'react-bootstrap/Carousel';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Image from 'react-bootstrap/Image'









export const RecipeCard = () => {

    const { recipesCreated } = useContext(MyKitchenContext)

    const recipes = recipesCreated.map(recipe =>
        <Carousel.Item key={recipe.id} >
            <Card style={{ width: '18rem', marginTop: "10px", border: "solid" }}>
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
                <Card.Img style={{width:"9rem", position: "relative", left: "25%" }}
                    variant="top"
                    src={recipe.img}
                // {"https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?w=2000"}
                />
                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>{recipe.name}</Card.Title>
                    <Card.Text tyle={{ textAlign: "center" }}>
                        {recipe.calories != "" ? "Calories: " : ""}<b>{recipe.calories}</b>
                    </Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>
                        Coocking time: <b>{recipe.cTime}</b> min
                    </Card.Text>
                </Card.Body>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>Coocking method</Accordion.Header>
                        <Accordion.Body>
                            {recipe.cMethod}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </Carousel.Item>
    )


    return (
    
            <div className='ingredientCard'>
                {recipes.length > 0 ?
                    <Carousel  variant="dark" style={{ padding: "0px 5px 20px 5px" }}>
                        {recipes}
                    </Carousel>
                    :
                    ""
                }


            </div>
      
    )
}

export default RecipeCard;
