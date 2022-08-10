const Coffee = ({ coffee, onBasketToggle }) => {

    if (!coffee) {
        return null
    }

    const handleClick = () => {
        onBasketToggle(coffee.coffeeName)
    }

    const BasketButtonText = coffee.isBasket ? 'Remove from basket' : 'Add to basket'

    return (
        <>
        <div className= "Coffee_Detail">
        <h3> Name: {coffee.coffeeName}</h3>
        <button onClick={handleClick}>Add to basket</button>
        </div>
        </>
    )
}

export default Coffee