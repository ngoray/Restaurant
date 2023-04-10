"use strict"

const memberController = require('../controllers/memberController.js');

function routeMember(app) {
    app.route('/register')
    .post(memberController.register)

    app.route('/login')
    .post(memberController.login)

    app.route('/user')
    .get(memberController.getAllUsers)

    // app.route('/user')
    // .put(memberController.updateUser)
    // .delete(memberController.deleteUser);
}

module.exports =  {routeMember} ;
