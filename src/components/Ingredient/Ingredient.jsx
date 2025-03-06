const Ingredient = (props) => {
    return (
        <li style={{ backgroundColor: props.ingredient.color }}>
            {props.ingredient.name}
            {props.removeFromBurger
            ? <button onClick={() => props.removeFromBurger(props.index)}>X</button>
            : <button onClick={() => props.addToBurger(props.ingredient)}>+</button>
            }
        </li>
    );
};

export default Ingredient;