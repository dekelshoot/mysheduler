const db = require("../configs/database")
const mysql = require('mysql2');
const connect = require("../configs/database")
// create the connection to database
const connection = connect.connection

module.exports = class Sheduler{

    // static FindNomProfesseur(){
    //     return new Promise((resolve,reject)=>{
    //         connection.query('SELECT nom_enseignant FROM enseignant ORDER BY nom_enseignant ASC',
    //              function(err, results,fields) {
    //                 if(err){
    //                     reject(err)
    //                 }
    //                  resolve(results)
    //                })
                      
    //     }
    //     )
    // }
    static Find(table,attribut){
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT ${attribut}  FROM ${table} ORDER BY ${attribut} ASC`,
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }

    static FindHeure(){
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT DISTINCT heure_debut , heure_fin FROM plage_horaire ORDER BY heure_debut ASC`,
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }
}