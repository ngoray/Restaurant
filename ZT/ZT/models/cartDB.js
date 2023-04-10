"use strict"
var db = require('../dbconnection');

class CartDB {
    getAllInCart(callback) {
        var sql = "SELECT * FROM frenchburger_db.cart";
        return db.query(sql, callback);
    }

    addToCart(cartData, callback) {
        var sql = "INSERT INTO cart(sessionToken, productName, price) VALUES (?, ?, ?)";
        db.query(sql, [cartData.sessionToken, cartData.productName, cartData.price], callback);
    }

    deleteFromCart(cart_Id, callback) {
        var sql = "DELETE FROM cart WHERE cart_Id = ?";
        return db.query(sql, cart_Id, callback);
    }
}

module.exports = CartDB;