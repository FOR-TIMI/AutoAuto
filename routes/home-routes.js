const router = require('express').Router();
const homeController = require('../controllers/home-controller');
const userController = require('../controllers/user-controller');
const  {notLoggedIn, isLoggedIn} = require('../utils/middleware');
const filterController = require('../controllers/filter-controller')


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

router.route('/cars')
      .get(filterController.findVehicle)




module.exports =  router