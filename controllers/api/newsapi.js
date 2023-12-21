require('dotenv').config();
const NewsApi = require('newsapi');
const newsapi = new NewsApi(process.env.API_KEY);

const getNews = async (userCategory) => {

    const response = await newsapi.v2.topHeadlines({
        language: 'en',
        category: userCategory,
    });
    const newsData = response.articles.filter((article) => {
        //test if title and content are null
        if (article.title == null || article.content == null) {
            return false
        }
        if (article.source.name && article.source.name.includes("Removed")
            || article.author && article.author.includes("Removed")
            || article.title && article.title.includes("Removed")
            || article.urlToImage && article.urlToImage.includes("Removed")
            || article.publishedAt && article.publishedAt.includes("Removed")
            || article.content && article.content.includes("Removed")
        ) {
            return false
        }

        return true//test if any field contain removed
    }).map((article) => {

        return {
            source: article.source.name,
            author: article.author,
            title: article.title,
            image: article.urlToImage,
            date: article.publishedAt,
            content: article.content,
        }

    });
    console.log(newsData)
    return newsData;



};


module.exports = { getNews };