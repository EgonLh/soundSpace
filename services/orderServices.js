let Orders = require("../models/Order");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

/* ----- GET ALL Orders ----- */
const getAllOrders = async () => Orders.find().populate("userId").populate("albumId");

/* ----- Create A Order ----- */
const createOrder = async (orderInfo) => {
    // > when create a order album.metadata.count will increase
    const salt = await bcrypt.genSalt(10);
    const hashpin = await bcrypt.hash(orderInfo.payment.pin, salt);
    let order = new Orders({
        userId: orderInfo.userId,
        albumId: orderInfo.albumId,
        ordered_date: orderInfo.ordered_date,
        amount: orderInfo.amount,
        fees: orderInfo.fees,
        payment: {
            method: orderInfo.payment.method,
            pin: hashpin
        }
    });
    return order.save();
};

/* ----- Create A Order ----- */
const updateOrder = async (orderId, orderInfo) => {
    const updatedOrder = await Orders.findByIdAndUpdate(orderId, orderInfo, {new: true});
    return updatedOrder;
};

/* ----- DELETE A Order ----- */
const deleteOrder = async (orderId) => {
        const deletedOrder = await Orders.findByIdAndDelete(orderId);
        return deletedOrder;
};

/* ----- OPERATIONS ON Order ----- */
const getOrderById = async (filter) => {
    let orders = await Orders.findById(filter);
    return orders;
};

const getOrderByAlbumList = async (albumId) => {
    let orders = await Orders.find({albumId: new mongoose.Types.ObjectId(albumId)});
    return orders;
};

const getOrderByUser = async (userId) => {
    let orders = await Orders.find({userId: new mongoose.Types.ObjectId(userId)});
    return orders;
};

module.exports = {
    getAllOrders,
    updateOrder,
    createOrder,
    deleteOrder,
    getOrderById,
    getOrderByAlbumList,
    getOrderByUser
};