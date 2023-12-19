
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const {getNews}= require('./api/newsapi');
/** HOME **/

/**  CAT */
router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      
    });

    const user = userData.get({ plain: true });

    res.render('categories', {
      logged_in: true,
      categoryList: [
        { categoryName: 'general' },
        { categoryName: 'technology' },
        { categoryName: 'business' },
        { categoryName: 'entertainment' },
        { categoryName: 'sports' },
        { categoryName: 'health' },
        { categoryName: 'science' },
        {categoryName: 'crypto'},
      ]
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

/**  NEWS */
router.get('/news/:userCategory', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const newsData = await getNews(req.params.userCategory)


    res.render('news', {
      logged_in: true,
      newsData: newsData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/** LOGIN */
router.get('/login',async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/categories');
    return;
  }
  const categories= await getNews();
console.log(categories)
  res.render('login');
});

module.exports = router;
