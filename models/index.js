//Import models
const User = require('./User');
const Category = require('./Category');
const News = require('./News');
//Defining relationships between models
//Category has many new
Category.hasMany(News, {
    foreignKey: 'category_id', // This is the foreignKey in the News model
});

News.belongsTo(Category, {
    foreignKey:'category_id', //This is the foreignKey in the Category model
})


// Export Models
module.exports ={
    User,
    News,
    Category,
};