const { Vehicle } = require('../models');

module.exports.findVehicle = async (req,res) => {

    /**
     * Expect http://localhost:3001/api/cars?make=something,model...
     */

    const { car_model, car_make, year} = req.query;

    if(car_make || car_model || year){
          try{
      const values = {}
        if(year){
            values.year = year            
        }

        if(car_make){
            values.car_make = car_make
        }

        if(car_model){
            values.car_model = car_model
        }


        const cars = await Vehicle.findAll({
            where : values,
        })
    
        if(!cars.length){
          return res
            .status(404)
            .json({message: 'There are no vehicles with this specification'})
        }
    
         res.render('cars/cars', {...req.session, cars})
        }

          catch(err){
            return res 
            .status(500)
            .json({message: "Something went wrong with the server", err})
          }
        }
    
    else{
       await this.getAllCars(req,res)
    }
          
    
}


/*
*Expect "2003": {
		"car_year": 2003,
		"quantity": 3
	}
response from the api
*/
module.exports.getYears = async(req,res) => {
 try{
    const cars = await Vehicle.findAll({
        attributes: ['year','vehicle_id'],
        raw: true
    });

    const carFormat = {}


    cars.forEach(car => {
        if(car.year in carFormat){
            carFormat[car.year].quantity += 1
        }
        else{
            carFormat[car.year] = {
                car_year: car.year,
                quantity : 1,
                id : car.vehicle_id
            }
        }
    })

    res.json(carFormat)
 }
 catch(err){
    return res
    .status(500)
    .json({message: "Something went wrong with our server"})
 }
 


}

module.exports.getMakes = async(req,res) => {
    try{
       const cars = await Vehicle.findAll({
           attributes: ['car_make'],
           raw: true
       });
   
       const carFormat = {}
   
   
       cars.forEach(car => {
           if(car.car_make in carFormat){
               carFormat[car.car_make].quantity += 1
           }
           else{
               carFormat[car.car_make] = {
                   car_make: car.car_make,
                   quantity : 1
               }
           }
       })
   
       res.json(carFormat)
    }
    catch(err){
       return res
       .status(500)
       .json({message: "Something went wrong with our server"})
    }
    
   
   
}

module.exports.getModels = async(req,res) => {
    try{
       const cars = await Vehicle.findAll({
           attributes: ['car_model'],
           raw: true
       });
   
       const carFormat = {}
   
   
       cars.forEach(car => {
           if(car.car_model in carFormat){
               carFormat[car.car_model].quantity += 1
           }
           else{
               carFormat[car.car_model] = {
                   car_model: car.car_model,
                   quantity : 1
               }
           }
       })
   
       res.json(carFormat)
    }
    catch(err){
       return res
       .status(500)
       .json({message: "Something went wrong with our server"})
    }
}
module.exports.getAllCars = async(req,res) => {
    try{
       const cars = await Vehicle.findAll({raw: true });


       res.render('cars/cars', {...req.session, cars })
    }
    catch(err){
       return res
       .status(500)
       .json({message: "Something went wrong with our server"})
    }
   }




