require('dotenv').config();
const NewsApi = require('newsapi');
const newsapi = new NewsApi(process.env.API_KEY);

const getNews = async (userCategory) => {

    const response = await newsapi.v2.topHeadlines({
        language: 'en',
        category: userCategory,
    });

    const newsData = response.articles.map((article) => {
        return {
            source: article.source.name,
            author: article.author,
            title: article.title,
            image: article.urlToImage,
            date: article.publishedAt,
            content: article.content,
        }

    });

    console.log(newsData);

return newsData;
};
module.exports = { getNews };