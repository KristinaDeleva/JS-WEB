const Car = require('../models/Car');
const Rent = require('../models/Rent');

module.exports = {
    addGet: (req, res) => {
        res.render('car/add');
    },
    addPost: (req, res) => {
        //Get info from req.body
        //validate entity
        //insert into db -> redirect
        const carBody = req.body;
        carBody.pricePerDay = +carBody.pricePerDay;
        if(!carBody.model || !carBody.image || !carBody.pricePerDay) {
            carBody.error = 'Please fill all fields';
            res.render('car/add', carBody);
            return;
        }

        Car.create(carBody)
            .then(() => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
    },
    allCars: (req, res) => {
        Car.find({ isRented: false })
            .then((cars) => {
                res.render('car/all', {cars});
            }).catch((err) => {
                console.log(err);
            })
    },
    rentGet: (req, res) => {
        const carId = req.params.id;

        Car.findById(carId)
            .then((car) => {
                res.render('car/rent', car);
            }).catch((err) => {
                console.log(err);
            });
        
    },
    rentPost: async (req, res) => {
        const car = req.params.id;
        const owner = req.user._id;
        const days = Number(req.body.days);

        try {
            const rent = await Rent.create({ days, car, owner });
            const carById = await Car.findById(car);
            carById.isRented = true;
            await carById.save();
            res.redirect('/car/all');
        }catch(err) {
            console.log(err);
        }

        // Rent.create({ days, car, owner }) 2 variant
        //     .then(() => {
        //         Car.findById(car)
        //             .then((c) => {
        //                 c.isRented = true;
        //                 return c.save();
        //             })
        //             .then(() => {
        //                 res.redirect('/car/all');
        //             })
        //     }).catch((err) => {
        //         console.log(err);
        //     });
    },
    editGet: (req, res) => {
        let id = req.params.id;
        
        Car.findById(id) 
            .then((car) => {
                if (!car) {
                    res.redirect('/car/all');
                    return;
                }
                res.render('car/edit', car);
                return;
            })
    },
    editPost: (req, res) => {
        let id = req.params.id;
        let carBody = req.body;

        Car.findById(id) 
        .then((car) => {
            if (!car) {
                res.redirect('/car/all');
                return;
            }
            if (!carBody.model || !carBody.image || !carBody.pricePerDay) {
                carBody.error = 'Please fill all fields';
                res.render(`car/edit/${req.params.id}`, carBody);
                return;
            }
    
            car.model = carBody.model;
            car.image = carBody.image;
            car.pricePerDay = carBody.pricePerDay;
            car.save()
                .then(() => {
                    res.redirect('/car/all');
                    return;
                }).catch((err) => {console.log(err)});
        })
    }
}