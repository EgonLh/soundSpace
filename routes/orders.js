var express = require('express');
var router = express.Router();
const orderController = require("../controllers/orderController");

/* ----- GET ALL ORDERS ----- */
router.get('/', orderController.getAllOrders);

/* ----- CREATE A ORDER ----- */
router.post('/', orderController.createOrder);

/* ----- UPDATE A ORDER ----- */
router.put('/:orderId', orderController.updateOrder);

/* ----- DELETE A ORDER ----- */
router.delete('/:orderId', orderController.deleteOrder);

// ----- OPERATION ON ORDERS ----- //
router.get('/:filter', orderController.getOrderById);

router.get('/albums/:albumId', orderController.getOrderItemLists);

router.get('/user/:userId', orderController.getOrderByUsers);

module.exports = router;
