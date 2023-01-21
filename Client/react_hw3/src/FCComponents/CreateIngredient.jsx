import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientCard from './IngredientCard';
import { MyKitchenContext } from './MyKitchenContext';
import { getValue } from '@testing-library/user-event/dist/utils';




const CreateIngredient = () => {

  const [validated, setValidated] = useState(false);
  const { addIngredientToList, newIngredient, setNewIngredient,ingredientList} = useContext(MyKitchenContext)


  useEffect(() => {
    setValidated(false)

  }, [ingredientList])


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    else
      addIngredientToList(newIngredient);



    setValidated(true);

  };

  const handleChange = (e) => {
    const data = e.target.value;

    switch (e.target.id) {
      case "NAME":
        setNewIngredient({ name: data, image: newIngredient.image, calories: newIngredient.calories })
        break;
      case "IMG":
        setNewIngredient({ name: newIngredient.name, image: data, calories: newIngredient.calories })
        break;
      case "CAL":
        setNewIngredient({ name: newIngredient.name, image: newIngredient.image, calories: data })
        break;
    }
  }

  return (
    <div>
      <h3 style={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>New ingredient</h3>
      {
        (newIngredient.name != "" || newIngredient.image != "" || newIngredient.calories != "") ?
          <IngredientCard /> : ""
      }
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Form.Group md="4">
                <div style={{ justifyContent: "center", display: "flex", marginTop: "10px" }}>
                  <Form.Label>Ingredient name:</Form.Label>
                </div>
                <Form.Control
                  required
                  id="NAME"
                  value={newIngredient.name}
                  type="text"
                  placeholder="Ingredient name"
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
                  value={newIngredient.image}
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
                  <Form.Label>Calories:</Form.Label>
                </div>
                <Form.Control
                  required
                  id="CAL"
                  value={newIngredient.calories}
                  type="number"
                  min={0}
                  placeholder="Calories"
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>
          </Row>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Button type="submit">Add Ingredient</Button>
          </div>
        </Form>
      </ThemeProvider >
    </div>
  )
}

export default CreateIngredient