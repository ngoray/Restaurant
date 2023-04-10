"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const routeAuth = require('./routes/routeLogin');
const jwt = require('jsonwebtoken');
const routeProducts = require('./routes/routeProducts');
const routeComments = require('./routes/routeComments');
const routeCart = require('./routes/routeCart');
//const routes = require('./routes/routeComments');
// const routeUsers = require('./routes/routeUsers');

var app = express();
var host = "127.0.0.1";
var port = 8080;
var home_file = "/index.html";

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes.routeComments(app);
// routeUsers.routeUsers(app);
routeProducts.routeProducts(app);
routeComments.routeComments(app);
routeCart.routeCart(app);

function gotoIndex(f, request, respond) {
    respond.sendFile(__dirname + f);
}

routeAuth.routeMember(app);

app.use((req,res,next) =>{
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token ,"supersecret", (err,decode)=>{
            if(err){
                res.status(403).json({
                    message : "Wrong Token"
                })
            }
            else{
                req.decode = decode;
                console.log("valid token");
                next();
            }
        })
    }
})

app.get(home_file, gotoIndex);

// Starts the Web Server
var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});