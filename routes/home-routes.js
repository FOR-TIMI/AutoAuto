const router = require('express').Router();
const homeController = require('../controllers/home-controller')


router.route('/')
      .get(homeController.renderHomePage)

router.route('/login')
      .get(homeController.renderLoginPage)

router.route('/register')
      .get(homeController.renderRegisterPage)

module.exports =  router