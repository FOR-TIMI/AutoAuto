const {Vehicle} = require('../models');

module.exports.renderHomePage = async(req,res) => {
    res.render('cars/index')
}