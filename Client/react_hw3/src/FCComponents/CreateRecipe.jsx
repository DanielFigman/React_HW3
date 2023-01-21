import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyKitchenContext } from './MyKitchenContext';
import IngredientCarousel from "./IngredientCarousel";
import NoIngredient from './NoIngredientAlert';


export const CreateRecipe = () => {
    const [validated, setValidated] = useState(false);

    const {
        addIngredientToList,
        addRecipeToList,
        currentRecipe,
        setCurrentRecipe,
        ingredientList,
        recipesCreated,
        addedIngredients } = useContext(MyKitchenContext)


    useEffect(() => {
        setValidated(false)

    }, [recipesCreated])



    const handleSubmit = (e) => {
        debugger
        e.preventDefault();
        const form = e.currentTarget;

      

        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        else
        {
            if (addedIngredients.length == 0) {
                e.stopPropagation();
                alert("You must pick at least 1 ingredient")
            }
            else
            addRecipeToList(currentRecipe);

        }
            


        setValidated(true);

    };

    const handleChange = (e) => {
        const data = e.target.value;
        debugger
        switch (e.target.id) {
            case "NAME":
                setCurrentRecipe({ name: data, img: currentRecipe.img, cTime: currentRecipe.cTime, cMethod: currentRecipe.cMethod })
                break;
            case "IMG":
                setCurrentRecipe({ name: currentRecipe.name, img: data, cTime: currentRecipe.cTime, cMethod: currentRecipe.cMethod })
                break;
            case "cTime":
                setCurrentRecipe({ name: currentRecipe.name, img: currentRecipe.img, cTime: data, cMethod: currentRecipe.cMethod })
                break;
            case "cMethod":
                setCurrentRecipe({ name: currentRecipe.name, img: currentRecipe.img, cTime: currentRecipe.cTime, cMethod: data })
                break;
        }
    }

    return (
        ingredientList.length == 0 ? <NoIngredient /> :
            <div>
                <h3 style={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>Select ingredients</h3>
                <IngredientCarousel />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <div style={{ justifyContent: "center", display: "flex" }}>
                            <Form.Group md="4">
                                <div style={{ justifyContent: "center", display: "flex", marginTop: "10px" }}>
                                    <Form.Label>Recipe name:</Form.Label>
                                </div>
                                <Form.Control
                                    required
                                    id="NAME"
                                    value={currentRecipe.name}
                                    type="text"
                                    placeholder="Recipe name"
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div style={{ justifyContent: "center", display: "flex" }}>
                            <Form.Group md="4">
                                <div style={{ justifyContent: "center", display: "flex", marginTop: "10px" }}>
                                    <Form.Label>Image URL:</Form.Label>
                                </div>
                                <Form.Control
                                    required
                                    id="IMG"
                                    value={currentRecipe.img}
                                    type="text"
                                    placeholder="Image URL"
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div style={{ justifyContent: "center", display: "flex" }}>
                            <Form.Group md="4">
                                <div style={{ justifyContent: "center", display: "flex", marginTop: "10px" }}>
                                    <Form.Label>Cooking time in minutes:</Form.Label>
                                </div>
                                <Form.Control
                                    required
                                    id="cTime"
                                    type="number"
                                    min={0}
                                    value={currentRecipe.cTime}
                                    placeholder="Cooking time"
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div style={{ justifyContent: "center", display: "flex" }}>
                            <Form.Group md="4">
                                <div style={{ justifyContent: "center", display: "flex", marginTop: "10px" }}>
                                    <Form.Label>Cooking method:</Form.Label>
                                </div>
                                <Form.Control as={"textarea"} style={{ height: "100px", display: "grid", width: "210px", whiteSpace: "pre-wrap" }}
                                    required
                                    id="cMethod"
                                    value={currentRecipe.cMethod}
                                    placeholder="Wrtie here the cooking method"
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </Row>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                        <Button type="submit">Add Recipe</Button>
                    </div>
                </Form>
            </div>
    )
}

export default CreateRecipe;