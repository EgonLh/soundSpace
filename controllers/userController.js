const userServices = require("../services/userServices");
const {config} = require('../config/config');
const jwt = require('jsonwebtoken');

/* ----- UTILITY --- */
const checkData = (data, res) => data ? (res.status(200).json(data)) : (res.status(400).json(data));

/* ----- GET ALL USERS ----- */
const getAllUsers = async function (req, res, next) {
    try {
        const users = await userServices.getAllUsers();
        checkData(users, res);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/* ----- REGISTER:CREATE USER ----- */
const registerUser = async function (req, res, next) {
    try {
        let userInfo = req.body;
        let user = await userServices.register(userInfo);
        let payload = {id: user._id};
        const token = jwt.sign(payload, config.TOKEN_SECRET, {expiresIn: '1d'});
        res.status(201).send({token});
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/* ----- LOGIN ----- */
const login = async function (req, res, next) {
    let username = req.body['username'];
    let password = req.body['password'];
    try {
        let user = await userServices.login(username, password);
        let payload = {id: user._id};
        const TOKEN = jwt.sign(payload, config.TOKEN_SECRET, {expiresIn: '1d'});
        res.status(200).send({TOKEN});
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

/* ----- UPDATE USER ----- */
const updateUser = async function (req, res, next) {
    try {
        let userId = req.params['userId'];
        let userInfo = req.body;
        const updateUser = await userServices.updateUser(userId, userInfo);
        checkData(updateUser, res);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/* ----- DELETE USER ----- */
const deleteUser = async function (req, res, next) {
    try {
        let userId = req.params['userId'];
        const deletedUser = await userServices.deleteUser(userId);
        checkData(deletedUser, res);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/* ----- Operations On USER ----- */
const getUserByID_Name = async function (req, res, next) {
    try {
        let filter = req.params['filter'];
        const selectedUser = await userServices.getUserByID(filter);
        checkData(selectedUser, res)
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    registerUser,
    login,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserByID_Name,
};