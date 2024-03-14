import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"
import displayBakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart,item]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  }

  return (
    <div className="App">
      <h1>Panaderia</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        <BakeryItem key={index} item={item} addToCart={addToCart}/>
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
             {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <p>Total: ${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
