const IngredientList = (props) => {
    return (
        <ul>
            {props.availableIngredients.map((ingredient, index) => (
                <li key={index} style={{ backgroundColor: ingredient.color }}>{ingredient.name}
                    <button>+</button>
                </li>
            ))}
        </ul>
    );
};

export default IngredientList;
