const { News } = require('../models');


const newsdata = [
    
   {
    title: 'Sample News1',
    content: 'This is the content of the sample news 1',
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    title: 'Sample News1',
    content: 'This is the content of the sample news 1',
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    title: 'Sample News2',
    content: 'This is the content of the sample news 2',
    createdAt: new Date(),
    updatedAt: new Date(),
   }

];

const seedNews = () => News.bulkCreate(newsdata);

module.exports = seedNews;