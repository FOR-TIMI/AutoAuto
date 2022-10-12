const { Vehicle } = require('../models');

module.exports.findVehicle = async (req,res) => {

    /**
     * Expect http://localhost:3001/api/cars?make=something,model...
     */

    const { car_model, car_make, year,price} = req.query;

    if(car_make || car_model || year || price){
        try{
            const filter = {}
    
            if(car_model){
                filter.car_model = car_model
            }
            if(car_make){
                filter.car_make = car_make
            }
            if(year){
                filter.year = year
            }
            if(price){
                filter.price = price
            }

    

    const cars = await Vehicle.findAll({
        where : filter,
    })

    if(!cars.length){
      return res
        .status(404)
        .json({message: 'There are no vehicles with this specification'})
    }

     return res.json(cars)
          }
        catch(err){
          return res
            .status(500)
            .json({message: "Something went wrong with your server",err})
        }
    }
    else{
        findAllVehicles(req,res);
    }
}

const findAllVehicles = async(req,res) => {
try{
    const cars = await Vehicle.findAll();
    res.json(cars)
}
catch(err){
    return res
    .status(500)
    .json({message : "Something went wrong with our server"})
 }
}





