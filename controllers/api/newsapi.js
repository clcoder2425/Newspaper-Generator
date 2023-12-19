require('dotenv').config();
const NewsApi= require('newsapi');
const newsapi = new NewsApi(process.env.API_KEY);

const getCategory = async () => {
    
      // Fetch data from the News API (replace 'your_api_key' and 'your_api_endpoint' with the actual API key and endpoint)
      const response = await newsapi.v2.sources({
        language: 'en',
      });

      // Extract relevant data from the API response
      const categoryData = response.sources.map((source) => {
       return{
        categoryName: source.category,
       }
      
        
        // Add other relevant fields
        
      });

console.log(categoryData);
      // Insert the data into the 'News' table
   
    };
    module.exports= {getCategory};