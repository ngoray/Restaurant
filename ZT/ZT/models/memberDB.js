var db = require('../dbconnection');

class MemberDB{

    registerUser(user, callback){
        console.log("Name: " + user.name);      
        console.log("Username: "+ user.username);
        console.log("Password: "+user.password);
        console.log("Email: " + user.email);
        console.log("Address: " + user.address);
        console.log("Date Created: " + user.dateCreated);
        var sql = "INSERT INTO user(name, username, password, email, address, dateCreate) VALUES (?, ?, ?, ?, ?,?)";
     
        db.query(sql, [user.name,user.username,user.password, user.email, user.address, user.dateCreated], callback);
    }
    loginUser(user, callback){
        var sql = "SELECT * FROM user WHERE username = ? AND password = ?"

        db.query(sql, [user.username, user.password], callback);
    }
    getAllUsers(callback) {
        var sql = "SELECT * FROM frenchburger_db.user";
        return db.query(sql, callback);
    }
    updateUser(callback){
        var sql = "UPDATE user SET name = ?, username = ?, password = ?, email = ?, address = ? WHERE user_Id = ?";
        return db.query(sql, [user.name, user.username, user.password, user.email, user.address, user.user_Id], callback);
    }
    deleteUser(callback){
        var sql = "DELETE FROM user WHERE user_Id = ?";
        return db.query(sql, user_Id, callback);
    }
}
module.exports = MemberDB;