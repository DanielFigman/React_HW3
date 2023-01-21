import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';


const NoRecipe = () => {

    const navigate = useNavigate();


    return (
        <Alert variant="danger" dismissible onClose={() => navigate('recipe')}
            style={{
                display: "block",
                justifyContent: "center",
                margin: "10%",
                textAlign: "center"

            }}>
            <Alert.Heading> No recipe have been added yet</Alert.Heading>
            <p>
                Please add a recipe to the kitchen
            </p>
            <hr />
            <p style={{ fontSize: "90%", marginBottom: "-15px", textAlign: "left", fontWeight: "lighter" }}>
                By closing this alert you will be transfered to the create recipe page
            </p>
        </Alert>
    );
}

export default NoRecipe