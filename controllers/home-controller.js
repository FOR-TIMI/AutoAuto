const {Vehicle} = require('../models');

module.exports.renderHomePage = async(req,res) => {
    res.render('cars/index')
}

module.exports.renderLoginPage = async(req,res) => {
    res.render('user/login')
}

module.exports.renderRegisterPage = async(req,res) => {
    res.render('user/register')
}