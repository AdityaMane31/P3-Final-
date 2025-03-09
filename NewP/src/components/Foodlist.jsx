import React from 'react';
import FoodItem from './Fooditem';
import './FoodList.css'; // Create a CSS file for styling

const FoodList = () => {
    const foodItems = [
        {
            id: 1,
            name: 'Margherita Pizza',
            description: 'Classic pizza with mozzarella cheese and tomato sauce.',
            price: 12.99,
            imageUrl: 'https://via.placeholder.com/200x150',
        },
        {
            id: 2,
            name: 'Pasta Carbonara',
            description: 'Creamy pasta with pancetta and parmesan cheese.',
            price: 10.99,
            imageUrl: 'https://via.placeholder.com/200x150',
        },
        {
            id: 3,
            name: 'Caesar Salad',
            description: 'Fresh romaine lettuce with Caesar dressing and croutons.',
            price: 8.99,
            imageUrl: 'https://via.placeholder.com/200x150',
        },
        {
            id: 4,
            name: 'Chicken Tikka Masala',
            description: 'Spicy chicken curry with rice.',
            price: 14.99,
            imageUrl: 'https://via.placeholder.com/200x150',
        },
        {
            id: 5,
            name: 'Sushi Platter',
            description: 'Assorted sushi rolls with wasabi and soy sauce.',
            price: 16.99,
            imageUrl: 'https://via.placeholder.com/200x150',
        },
        {
            id: 6,
            name: 'Beef Tacos',
            description: 'Soft tacos filled with seasoned beef and fresh toppings.',
            price: 9.99,
            imageUrl: 'https://via.placeholder.com/200x150',
        },
        {
            id: 7,
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with a gooey center, served with ice cream.',
            price: 6.99,
            imageUrl: 'https://via.placeholder.com/200x150',
        },
        {
            id: 8,
            name: 'Lemonade',
            description: 'Refreshing homemade lemonade.',
            price: 3.99,
            imageUrl: 'https://via.placeholder.com/200x150',
        },
    ];

    return (
        <div className="food-list">
            <h2>Available Food Items</h2>
            <div className="food-items">
                {foodItems.map((item) => (
                    <FoodItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default FoodList;
