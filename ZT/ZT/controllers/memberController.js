"use strict"

const LoginDB = require('../models/MemberDB');
const jwt = require('jsonwebtoken');

var loginDB = new LoginDB();

function register(request, respond) {
    var now = new Date();

    var userReg = {
        "name": request.body.Name,
        "email": request.body.email,
        "username": request.body.username,
        "password": request.body.password,
        "address": request.body.address,
        "dateCreated": request.body.dateCreated
    };

    loginDB.registerUser(userReg, function (error, result) {
        console.log(result)
        if (error || result.length == 0) {
            respond.status(200).json({
                "message": "There seems to be another account with that username or email. Please try again with a different username or email account.",
                error
            });
        }
        else {
            var token = jwt.sign({ "username": result.Username }, "supersecret", { expiresIn: 3000 })
            respond.status(200).json({
                token,
                "username": result.Username,
                "message": "Success"
            });
        }
    });
}

function login(request, respond) {
    // var now = new Date();

    var user = {
        "username": request.body.username,
        "password": request.body.password
    };
    // user.username=request.body.username;
    // user.password = request.body.password;

    loginDB.loginUser(user, function (error, result) {

        if (error || result.length == 0) {
            respond.status(200).json({
                "message": "Invalid sign in details. Please re-enter."
            });
        }
        else {
            var token = jwt.sign({ "username": result[0].username }, "supersecret", { expiresIn: 3000 })
            respond.status(200).json({
                token,
                "username": result[0].username,
                "message": "Success"
            });
        }
    });
}

function getAllUsers(request, respond) {
    loginDB.getAllUsers(function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

function updateUser(request, respond) {
    var userDetails = {
        "user_Id": request.params.user_Id,
        "name": request.body.name,
        "username": request.body.username,
        "password": request.body.password,
        "email": request.body.email,
        "address": request.body.address,
        "dateCreate": request.body.dateCreate
    }
    loginDB.updateUser(userDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(userDetails);
        }
    });
}

function deleteUser(request, respond) {
    loginDB.deleteUser(request.params.user_Id, function (error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

module.exports = { register, login, getAllUsers, updateUser };