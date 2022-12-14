import { useState} from 'react';
import CoffeeContainer from './CoffeeContainer';
import CoffeeDisplay from './CoffeeDisplay';

function App() {

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

  return (
    // <CoffeeContainer/>
    <ul>{displayCoffees}</ul>

  );
}

export default App;
