const router = require('express').Router();
const userRoutes = require('./user-routes');
const filterRoutes = require('./filter-routes')


router.use('/', userRoutes);
router.use('/cars',filterRoutes);


module.exports = router

