import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { MyKitchenContext } from './MyKitchenContext';
import Carousel from 'react-bootstrap/Carousel';


const IngredientCarousel = () => {

    const { ingredientList, addedIngredients, addedIngredientsSetter, removeAddedIngredient } = useContext(MyKitchenContext)


    const handleSelect = (id) => {
        if (addedIngredients.includes(id))
            removeAddedIngredient(id)
        else
            addedIngredientsSetter(id)
    }

    let ingrediens = "";

    if (ingredientList.length > 0) {
        ingrediens = ingredientList.map(ingredient =>
            <Carousel.Item key={ingredient.id} onClick={() => handleSelect(ingredient.id)}>
                <Card style={{ width: '18rem', marginTop: "10px", border: "solid" }}>
                    <h6>
                        {
                            ingredientList.length == ingredient.id ?
                                <Badge bg="secondary" style={{
                                    position: "absolute", right: "1%", marginTop: "1%"
                                }}>
                                    New
                                </Badge>
                                : ""
                        }
                    </h6>

                    {addedIngredients.includes(ingredient.id) ? <Badge bg="light" style={{ textAlign: "center", color: 'green', position: "absolute", fontSize: "15px", fontFamily: " Georgia, serif" }}>Added</Badge> : ""}


                    <Card.Img style={{ width: '9rem', position: "relative", left: "25%" }}
                        variant="top"
                        src={ingredient.image}

                    // {"https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?w=2000"}
                    />
                    <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>{ingredient.name}</Card.Title>
                        <Card.Text style={{ textAlign: "center" }}>
                            {ingredient.calories != "" ? "Calories: " : ""}<b>{ingredient.calories}</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>)
    }




    return (




        <div className='ingredientCard'>
            <Carousel variant="dark" style={{ padding: "0px 5px 20px 5px" }}>
                {ingredientList.length > 0 ? ingrediens : ""}
            </Carousel>
        </div>
    )
}

export default IngredientCarousel;