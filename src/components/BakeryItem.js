// TODO: create a component that displays a single bakery item
import React from "react"

function displayBakeryItem({item, addToCart}) {
    return(
        <div className="bakeryItem">
            <img className="img" src={item.image} alt={item.name}/>
            <div className="itemDetails">
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
        </div>
    );
}

export default displayBakeryItem; 