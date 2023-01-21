import React, { useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import  { MyKitchenContext } from './MyKitchenContext';



const IngredientCard = () => {
   
    const {newIngredient} = useContext(MyKitchenContext)

    return (
        <div className='ingredientCard'>
            <Card style={{ width: '18rem', marginTop: "10px", border:"solid"}}>
                <h6>
                    <Badge bg="secondary" style={{ position: "absolute", right: "1%", marginTop: "1%" }}>New</Badge>
                </h6>
                <Card.Img style={{ width: '9rem', position:"relative", left:"25%" }}
                    variant="top"
                    src={newIngredient.image}
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