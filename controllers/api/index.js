//Module 14 example
const router = require('express').Router();

const filterRoutes = require('./filter-routes');


router.use('/filtered-posts', filterRoutes);


module.exports = router;
