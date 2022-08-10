import { useState} from 'react';
import styled from 'styled-components';
import CoffeeSelector from './components/CoffeeSelector';
import CoffeeBasket from './components/CoffeeBasket';
import Coffee from './components/Coffee';
import CoffeeDisplay from './CoffeeDisplay';

const CoffeeContainer = () => {



const [coffees, setCoffees] = useState([
    {
        image: <img src= "static.images.IMG_2007.jpg"></img>, 
        coffeeName: "Hawaiian Kona", 
        coffeeChar: "This is smooth with a slightly syrupy and creamy body"
    },
    {
        image: "", 
        coffeeName: "Columbia Roast", 
        coffeeChar: "This is smooth with a slightly syrupy and creamy body"
    },
    {
        image: "", 
        coffeeName: "Costa Rica Red", 
        coffeeChar: "This is smooth with a slightly syrupy and creamy body"
    },
    {
        image: "", 
        coffeeName: "Kopi Luwak", 
        coffeeChar: "This is smooth with a slightly syrupy and creamy body"
    }
]);

const handleCoffeeSelected = (coffeeName) => {
    // setSelectedCoffeeName(coffeeName)
}
  
  const handleBasketToggle = (coffeeName) => {
    const updatedCoffees =coffees.map((coffee) => {
      return coffee.coffeeName === coffeeName
      ? {...coffee, isBasket: !coffee.isBasket}
      :coffee
    })
    setCoffees(updatedCoffees)
  }

  const displayCoffees = coffees.map( (coffeeObj, i) => {
    return (
        <CoffeeDisplay key={i}
        image={coffeeObj.image}
        coffeeName={coffeeObj.coffeeName}
        coffeeChar={coffeeObj.coffeeChar} >
        {/* {coffeeObj.coffeeChar} */}
        </CoffeeDisplay>
    )
  })
//   const selectedCoffee = coffees.find(coffee => coffee.name === selectedCoffeeName)

  return (
    <>
    <h2 id="title"> Coffee Shop </h2>
    <CoffeeSelector coffees={coffees} onCoffeeSelected={handleCoffeeSelected}/>
    <ul>{displayCoffees}</ul>
    {/* <Coffee coffee={selectedCoffee} onCoffeeSelected={handleBasketToggle}/> */}
     {/*  <CoffeeBasket coffees={coffees} onCoffeeSelected={handleCoffeeSelected}/> */}
    </>
)

}

export default CoffeeContainer



