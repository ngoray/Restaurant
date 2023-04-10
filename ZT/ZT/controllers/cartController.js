"use strict"
const CartDB = require('../models/cartDB');
var cartDB = new CartDB();

function getAllInCart(request, respond) {
    cartDB.getAllInCart(function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        }
        else {
            respond.json(result);
        }
    });
}

function addToCart(request, respond) {
    var cartData = {
        "sessionToken": request.body.sessionToken,
        "productName": request.body.productName,
        "price": request.body.price
    };
    cartDB.addToCart(cartData, function(error, result) {
        if (error) {
            respond.json(error);
            console.log(error);
        }
        else {
            respond.json(result);
            console.log(cartData);
        }
    })

}

function deleteFromCart(request, respond){
    cartDB.deleteFromCart(request.params.cart_Id, function(error, result){
        if (error){
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = { getAllInCart, addToCart, deleteFromCart }