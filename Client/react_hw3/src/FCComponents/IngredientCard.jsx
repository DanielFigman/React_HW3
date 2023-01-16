import React, { useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import  { MyKitchenContext } from './MyKitchenContext';
import Carousel from 'react-bootstrap/Carousel';



const IngredientCard = () => {
   
    const {newIngredient, setNewIngredient} = useContext(MyKitchenContext)

    return (
        <div className='ingredientCard'>
            <Card style={{ width: '18rem', marginTop: "10px", border:"solid"}}>
                <h6>
                    <Badge bg="secondary" style={{ position: "absolute", right: "1%", marginTop: "1%" }}>New</Badge>
                </h6>
                <Card.Img style={{ width: '9rem', position:"relative", left:"25%" }}
                    variant="top"
                    src={newIngredient.img}
                    
                    // {"https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?w=2000"}
                />
                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>{newIngredient.name}</Card.Title>
                    <Card.Text style={{ textAlign: "center" }}>
                           {newIngredient.calories != "" ? "Calories: " : ""}<b>{newIngredient.calories}</b>
                    </Card.Text> 
                </Card.Body>
            </Card>
        </div>
    )
}

export default IngredientCard;