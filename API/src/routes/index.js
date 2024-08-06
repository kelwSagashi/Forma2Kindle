const { UserRouter } = require("./user");

const router = require("express").Router();

router.use('/', UserRouter);

module.exports = {AllRoutes: router};