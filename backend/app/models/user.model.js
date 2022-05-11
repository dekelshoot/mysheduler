const db = require("../configs/database")
const mysql = require('mysql2');
const connect = require("../configs/database")
// create the connection to database
const connection = connect.connection
module.exports = class User{
    constructor(email,password){
        this.email = email
        this.password = password
        
    }

    static find(user){
        let data;
        return new Promise((resolve,reject)=>{
            connection.query('SELECT *  FROM users WHERE email = ?', [user],
                 function(err, results,fields) {
                    //  console.log(results)
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })   
        }
        )
    }

    static save(user){
        return connection.query('INSERT INTO users SET email = ?,password = ? ',
            [user.email,user.password])
        
    }
}