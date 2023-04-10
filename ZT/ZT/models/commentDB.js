"use strict"
var db = require('../dbconnection');
class CommentsDB {
    getAllComments(callback) {
        var sql = "SELECT * FROM frenchburger_db.comments";

        return db.query(sql, callback);
    }
    //************addComment **********************//
    addComment(comment, callback) {
        console.log("Product ID: " + comment.product_Id);      
        console.log("Username: "+ comment.username);
        console.log("Product: "+ comment.productName);
        console.log("Rating: " + comment.ratings);
        console.log("Review: " + comment.review);
        console.log("Date Posted: " + comment.datePosted);
        var sql = "INSERT INTO comments(product_Id, username, productName, ratings, review, datePosted) VALUES (?, ?, ?, ?, ?, ?)";

        db.query(sql, [comment.product_Id, comment.username, comment.productName, comment.ratings, comment.review, comment.datePosted], callback);
    }
    //************updateComment **********************//
    updateComment(comment, callback) {
        var sql = "UPDATE comments SET ratings = ?, review = ?, datePosted = ? WHERE comments_Id = ?";

        return db.query(sql, [comment.ratings, comment.review, comment.datePosted, comment.comments_Id], callback);
        console.log(comment);
    }
    //************deleteComment **********************//
    deleteComment(comments_Id, callback) {
        var sql = "DELETE FROM comments WHERE comments_id = ?";

        return db.query(sql, comments_Id, callback);
    }
}

module.exports = CommentsDB;