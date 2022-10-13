const {Vehicle} = require('../models');

module.exports.renderHomePage = async(req,res) => {
    res.render('cars/index',{...req.session})
}

module.exports.renderLoginPage = async(req,res) => {
    res.render('user/login')
}

module.exports.renderRegisterPage = async(req,res) => {
    res.render('user/register')
}


module.exports.renderCarsPage = async(req,res) => {
    res.render('cars/cars', {...req.session, })
}
