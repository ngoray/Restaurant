"use strict"
// const Comment = require('../models/Comment');
const CommentsDB = require('../models/commentDB');
var commentsDB = new CommentsDB();

function getAllComments(request, respond) {
    commentsDB.getAllComments(function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}
//**********Comment Controller - AddComment *******//
function addComment(request, respond) {
    var comment = { 
        "product_Id":request.body.product_Id, 
        "username": request.body.username, 
        "productName": request.body.productName,  
        "ratings": request.body.ratings, 
        "review": request.body.review, 
        "datePosted": request.body.datePosted
}
    commentsDB.addComment(comment, function (error, result) {
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
        }
    });
}
//**********Comment Controller - UpdateComment *******//
function updateComment(request, respond) {
    var comment = { 
        "comments_Id":request.params.comments_Id,
        "product_Id":request.body.product_Id, 
        "username": request.body.username, 
        "productName": request.body.productName,  
        "ratings": request.body.ratings, 
        "review": request.body.review, 
        "datePosted":request.body.datePosted
}
    commentsDB.updateComment(comment, function (error, result) {

        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(comment);
        }

    });
}

//**********Comment Controller - DeleteComment *******//
function deleteComment(request, respond) {
    commentsDB.deleteComment(request.params.comments_Id, function (error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}
module.exports = { getAllComments, addComment, updateComment, deleteComment };