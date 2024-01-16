const { Item } = require('../models/item')

const getTotalItems = async (req, res) => {
  try {
    const totalItems = await Item.all();
    res.status(200).json({ totalItems });
  } catch (error) {
    console.error('Error getting total items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to add a new item
const addItem = async (req, res) => {
  const { name, categoryId } = req.body;

  try {
    // Check if the item already exists
    const existingItem = await Item.findOne({ where: { name, categoryId } });

    if (existingItem) {
      // If the item already exists, update the quantity
      existingItem.quantity = (existingItem.quantity || 0) + 1;
      await existingItem.save();
    } else {
      // If the item does not exist, create a new item
      await Item.create({ name, categoryId});
    }

    // Update the total number of items
    const totalItems = await Item.count();

    // Respond with the updated total number of items
    res.status(201).json({ totalItems });
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Export the controller functions
module.exports = {
  getTotalItems,
  addItem,
};