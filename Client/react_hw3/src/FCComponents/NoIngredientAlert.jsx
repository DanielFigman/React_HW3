import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';


const NoIngredient = () => {

    const navigate = useNavigate();


    return (
        <Alert variant="danger" dismissible onClose={() => navigate('../ingredient')}
            style={{
                display: "block",
                justifyContent: "center",
                margin: "10%",
                textAlign: "center"

            }}>
            <Alert.Heading> No ingredients have been added yet</Alert.Heading>
            <p>
                Please add ingredient before craeting a recipe
            </p>
            <hr />
            <p style={{ fontSize: "90%", marginBottom: "-15px", textAlign: "left", fontWeight: "lighter" }}>
                By closing this alert you will be transfered to the create ingredient page
            </p>
        </Alert>
    );
}

export default NoIngredient