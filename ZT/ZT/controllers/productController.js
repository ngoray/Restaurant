"use strict"
const ProductsDB = require('../models/productDB');
var productsDB = new ProductsDB();
function getAllProducts (request, respond){
    productsDB.getAllProducts(function(error, result){

        if (error){
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}
module.exports = { getAllProducts };