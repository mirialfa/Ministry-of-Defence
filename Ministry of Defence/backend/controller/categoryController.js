const Category = require('../models/category.js');
const { Item } = require('../models/index.js'); // Import the Item model correctly

async function getCategories(req, res) {
  try {
    const categories = await Category.findAll({
      include: Item, // Specify the association with the Item model
    });
    res.status(200).json(categories);

  
  } catch (error) {
    console.error('Error getting categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getCategories,
};
