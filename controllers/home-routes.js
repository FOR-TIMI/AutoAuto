//Main Page that displays the data 

const sequelize = require('../config/connection');
const {User, Vehicle, CarMake, CarModel } = require('../models');
const withAuth = require('../utils/middleware');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  CarMake.findAll({
      attributes: [
        'id',
        'name',
        'created_at'
      ],
      include: [
        {
          model: CarModel,
          attributes: ['id', 'name', 'car_make_id']
        },
        {
          model: Vehicle, 
            attributes: ['id', 'car_make_id', 'car_model_id', 'vin', 'year', 'price', 'user_id']
        }
      ]
    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
        res.render('homepage', dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });