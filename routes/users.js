// >  For User Routing
const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

// ----- GET ALL USERS ----- //
router.get('/', userController.getAllUsers);

// ----- CREATE A USER ----- //
router.post('/',userController.registerUser);

router.post("/login",userController.login);

// ----- UPDATE A USER ----- //
router.put('/:userId',userController.updateUser);

// ----- DELETE A USER ----- //
router.delete('/:userId',userController.deleteUser);

// ----- OPERATION ON USER ----- //
router.get('/:filter',userController.getUserByID_Name);

module.exports = router;
