"use strict"
var db = require('../dbconnection');
class productsDB {
    getAllProducts(callback) {
        var sql = "SELECT * FROM frenchburger_db.products";

        return db.query(sql, callback);
    }
}
module.exports = productsDB;