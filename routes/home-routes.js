const router = require('express').Router();
const homeController = require('../controllers/home-controller');
const userController = require('../controllers/user-controller');
const  {notLoggedIn, isLoggedIn} = require('../utils/middleware')


router.route('/')
      .get(homeController.renderHomePage)

router.route('/login')
      .get(notLoggedIn,homeController.renderLoginPage)
      .post(notLoggedIn,userController.login)

router.route('/register')
      .get(notLoggedIn,homeController.renderRegisterPage)
      .post(notLoggedIn,userController.createUser);

router.route('/logout')
      .get(isLoggedIn,userController.logout)

router.route('/profile')
      .get()




module.exports =  router