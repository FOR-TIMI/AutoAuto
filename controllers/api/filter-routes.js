const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Vehicle, CarMake, CarModel } = require('../../models');
const withAuth = require('../utils/auth');

// get the element
const carMakeClickEvent = document.getElementById('filter-btn-car-make');
const carYearClickEvent = document.getElementById('filter-btn-car-year');
const carPriceClickEvent = document.getElementById('filter-btn-car-make');
const carModelClickEvent = document.getElementById('filter-btn-car-make');
var carMakeBool;
var carYearBool;
var carPriceBool;
var carModelBool;
// always checking if the element is clicked, if so, do alert('hello')
carMakeClickEvent.addEventListener("click", () => {
	carMakeBool = true; 
  carYearBool = false; 
  carPriceBool = false; 
  carModelBool = false; 
});

carYearClickEvent.addEventListener("click", () => {
	carMakeBool = false; 
  carYearBool = true; 
  carPriceBool = false; 
  carModelBool = false; 
});

carPriceClickEvent.addEventListener("click", () => {
	carMakeBool = false; 
  carYearBool = false; 
  carPriceBool = true; 
  carModelBool = false; 
});

carPriceClickEvent.addEventListener("click", () => {
	carMakeBool = false; 
  carYearBool = false; 
  carPriceBool = false; 
  carModelBool = true; 
});
//Create 4 buttons to filter by

if (carYearBool === true)
{
// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  
  Vehicle.findAll({
    order: [['year']
      //bools that determine the sequelize data filters 
    ],
      attributes: [
        'id',
        'name',
        'created_at'
      ],
      include: [
        {
          model: CarMake,
          attributes: ['id', 'name', 'created_at']
        }, 
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
}
else if (carPriceBool === true)
{
// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  
  Vehicle.findAll({
    order: [['price']
      //bools that determine the sequelize data filters 
    ],
      attributes: [
        'id',
        'name',
        'created_at'
      ],
      include: [
        {
          model: CarMake,
          attributes: ['id', 'name', 'created_at']
        }, 
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
}
else if (carMakeBool === true)
{
// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  
  CarMake.findAll({
    order: [['name']
      //bools that determine the sequelize data filters 
    ],
      attributes: [
        'id',
        'name',
        'created_at'
      ],
      include: [
        {
          model: CarMake,
          attributes: ['id', 'name', 'created_at']
        }, 
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
}
else if (carModelBool === true)
{
// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  
  CarModel.findAll({
    order: [['name']
      //bools that determine the sequelize data filters 
    ],
      attributes: [
        'id',
        'name',
        'created_at'
      ],
      include: [
        {
          model: CarMake,
          attributes: ['id', 'name', 'created_at']
        }, 
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
}

 