const CoffeeSelector = ({coffees, onCoffeeSelected}) => {

    const handleChange = event => {
        onCoffeeSelected(event.target.value)
    }

    const allCoffees = coffees.map(coffee => {
        return (<
            option key = { coffee.name }
            value = { coffee.name }> { coffee.coffeeName}</option>
        )
    })

    return (
    <>
    <div className="Selector">
        <label id= "select_coffee"></label>
        <p></p>
        <select defaultValue="" onChange={ handleChange}>
            <option value="" disabled> Choose a coffee </option> 
            {allCoffees}
        </select>
    </div>
    </>
    )
}

export default CoffeeSelector;