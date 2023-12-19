require('dotenv').config();
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

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
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/**  NEWS */
router.get('/news', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('news', {
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/** LOGIN */
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/categories');
    return;
  }

  res.render('login');
});

module.exports = router;
