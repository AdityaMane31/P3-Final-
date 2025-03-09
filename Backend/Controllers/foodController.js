const Food = require('../Models/Food');

// Get all food items
exports.getFoodItems = async (req, res) => {
  try {
    const foodItems = await Food.find();
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new food item
exports.addFoodItem = async (req, res) => {
  const { name, description, price, image } = req.body;
  try {
    const newFoodItem = new Food({ name, description, price, image });
    await newFoodItem.save();
    res.status(201).json(newFoodItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};