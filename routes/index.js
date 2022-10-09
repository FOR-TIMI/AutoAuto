const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api',apiRoutes)



router.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh no, Something went wrong!";
    res.status(statusCode).render("error", { err });
});

module.exports = router