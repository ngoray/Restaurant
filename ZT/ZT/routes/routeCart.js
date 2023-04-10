"use strict"
const cartController = require('../controllers/cartController');

function routeCart(app) {
    app.route('/cart')
    .get(cartController.getAllInCart)
    .post(cartController.addToCart);

    app.route('/cart/:cart_Id')
    .delete(cartController.deleteFromCart);
}

module.exports = { routeCart };