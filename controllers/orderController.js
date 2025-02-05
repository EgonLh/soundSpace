const orderServices = require("../services/orderServices");
/* ----- UTILITY ----- */
const checkData = (data, res, HttpStatus = 200) => data ? (res.status(HttpStatus).json(data)) : (res.status(400).send("Error Occured!"));

/*----- GET ALL ORDERS -----*/
const getAllOrders = async function (req, res, next) {
    try {
        const order = await orderServices.getAllOrders();
        checkData(order, res);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/*----- Create A Order -----*/
const createOrder = async function (req, res, next) {
    try {
        let orderInfo = req.body;
        let order = await orderServices.createOrder(orderInfo);
        checkData(order, res, 201)
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }

};

/*----- Update A Order -----*/
const updateOrder = async function (req, res, next) {
    try {
        let orderId = req.params['orderId'];
        let orderInfo = req.body;
        const updatedOrder = orderServices.updateOrder(orderId, orderInfo);
        checkData(updatedOrder, res);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/*----- Delete A Order -----*/
const deleteOrder = async function (req, res, next) {
    try {
        let orderId = req.params['orderId'];
        const order = await orderServices.deleteOrder(orderId);
        checkData(order, res);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

/*----- Operation On Orders -----*/
const getOrderById = async function (req, res, next) {
    try {
        let filter = req.params['filter'];
        const orders = await orderServices.getOrderById(filter);
        checkData(orders, res);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

const getOrderItemLists = async function (req, res, next) {
    try {
        let albumId = req.params['albumId'];
        const orders = await orderServices.getOrderByAlbumList(albumId);
        checkData(orders, res);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

const getOrderByUsers = async function (req, res, next) {
    try {
        let userId = req.params['userId'];
        const orders = await orderServices.getOrderByUser(userId);
        checkData(orders, res);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getAllOrders,
    createOrder,
    deleteOrder,
    updateOrder,
    getOrderById,
    getOrderItemLists,
    getOrderByUsers

};