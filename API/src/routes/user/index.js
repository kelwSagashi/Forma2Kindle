const UserController = require("../../controllers/user");

const router = require("express").Router();

const route = '/users';

router.route(route).post((req, res) => UserController.createUser(req, res));

router.route(route).get((req, res) => UserController.getUsers(req, res));

router.route(`${route}/:id`).get((req, res) => UserController.getUser(req, res));

router.route(`${route}/:id`).put((req, res) => UserController.updatetUser(req, res));

router.route(`${route}/:id`).delete((req, res) => UserController.deletetUser(req, res));

module.exports = {
    UserRouter: router
}