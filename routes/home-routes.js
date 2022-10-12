const router = require('express').Router();
const homeController = require('../controllers/home-controller')


router.route('/')
      .get(homeController.renderHomePage)

module.exports =  router