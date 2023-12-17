const { Category } = require('../models');

const categorydata = [
  {

    category_name:'Technology',
  },
  {

    category_name:'Sport',
  },
  {
    
    category_name:'Health',
  },
  {
    
    category_name:'Travel',
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;