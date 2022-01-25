const express = require('express');
const userController = require("./userController");

const router = express.Router();



router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route("/:id").get(userController.getUser);

module.exports = router;
