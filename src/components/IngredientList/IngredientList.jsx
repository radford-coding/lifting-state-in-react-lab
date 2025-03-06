import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) => {
    return (
        <ul>
            {props.availableIngredients.map((ingredient, index) => (
                <Ingredient
                    key={`ingredient${index}`}
                    ingredient={ingredient}
                    index={index}
                    addToBurger={props.addToBurger}
                />
            ))}
        </ul>
    );
};

export default IngredientList;
