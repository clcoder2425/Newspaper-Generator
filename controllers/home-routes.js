//routes/newsRoutes

const router = require('express').Router();
const {Category, News} = require('../models');

//Get news for homepage
router.get('/', async (req, res)=>{
    try {
        const dbCategoryData = await Category.findAll({
            include:[
                {
                model: News, attributes:['title', 'content' ],
            },
        ],
        });
        const categories= dbCategoryData.map((category)=> category.get({plain: true}));
        res.render('homepage', {
            categories,
            loggedIn: req.session.loggedIn,
          });

    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// GET one category
router.get('/category/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the gallery
      try {
        const dbCategoryData = await Category.findByPk(req.params.id, {
          include: [
            {
              model: News,
              attributes: [
                'id',
                'title',
                'content',
                'createdAt',
                'updatedAt',
              ],
            },
          ],
        });
        const category = dbCategoryData.get({ plain: true });
        res.render('category', { category, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });
  
  // GET one news
  router.get('/news/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the painting
      try {
        const dbNewsData = await News.findByPk(req.params.id);
  
        const news = dbNewsData.get({ plain: true });
  
        res.render('news', { news, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
 
   
module.exports= router;