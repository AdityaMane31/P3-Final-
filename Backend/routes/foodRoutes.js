const express = require('express');
const router = express.Router();
const foodController = require('../Controllers/foodController');

// Get all food items
router.get('/', foodController.getFoodItems);

// Add a new food item
router.post('/', foodController.addFoodItem);

module.exports = router;