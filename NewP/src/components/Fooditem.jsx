import React from 'react';
import './Fooditem.css'; // Create a CSS file for styling

const FoodItem = ({ item }) => {
    const handleOrder = () => {
        alert(`Added ${item.name} to cart!`);
    };

    return (
        <div className="food-item">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={handleOrder}>Add to Cart</button>
        </div>
    );
};

export default FoodItem;
