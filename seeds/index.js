const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedNews = require('./newsData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();

  await seedNews();

  process.exit(0);
};

seedAll();