import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientCard from './IngredientCard';
import  { MyKitchenContext } from './MyKitchenContext';
import { getValue } from '@testing-library/user-event/dist/utils';




const CreateIngredient = () => {
  const [validated, setValidated] = useState(false);

  const {addIngredientToList,newIngredient, setNewIngredient} = useContext(MyKitchenContext)




  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }


    setValidated(true);
    addIngredientToList(newIngredient);

  };

  const handleChange = (e) => {
    const data = e.target.value;

    switch (e.target.id) {
      case "NAME":
        setNewIngredient({ name: data, img: newIngredient.img, calories: newIngredient.calories })
        break;
      case "IMG":
        setNewIngredient({ name: newIngredient.name, img: data, calories: newIngredient.calories })
        break;
      case "CAL":
        setNewIngredient({ name: newIngredient.name, img: newIngredient.img, calories: data })
        break;
    }
  }

  return (
    <div>
      <IngredientCard />
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
                  type="text"
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