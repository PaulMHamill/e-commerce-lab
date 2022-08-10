const CoffeeBasket = ({ coffee, onCoffeeSelected}) => {

    const CoffeeBasket = coffee.filter(coffee => coffee.isBasket)

    return (
        <>
        <div className="basket">
            <h3> In my basket </h3>
            <ul>
                {CoffeeBasket.map(coffee => {
                    return (
                        <li id="coffee_basket" key={coffee.name}>
                            <button id="Add" onClick={() => onCoffeeSelected(coffee.name)}>{coffee.name}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default CoffeeBasket;