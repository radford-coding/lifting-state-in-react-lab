import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
    return <ul>
        {props.stack.length > 0 ?
            props.stack.map((ingredient, index) => (
                <Ingredient
                    key={`burger${index}`}
                    ingredient={ingredient}
                    index={index}
                    removeFromBurger={props.removeFromBurger}
                />
            ))
            : 'No ingredients'}
    </ul>;
};

export default BurgerStack;