const db = require("../configs/database")
const mysql = require('mysql2');
const connect = require("../configs/database")
// create the connection to database
const connection = connect.connection

module.exports = class Sheduler{

    static setCours(id_enseignant,code_cours,id_plage,salle){
        return new Promise((resolve,reject)=>{   
            connection.query('INSERT INTO  programme (id_enseignant, code_cours, id_plage, code_salle) VALUES (?,?,?,?)', [id_enseignant,code_cours,id_plage,salle],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }
    static setNewCours(data){
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO cours (code_cours, intitule, code_semestre, code_filiere, code_niveau) VALUES (?,?,?,?,?)', [data.code_cours,data.intitule,data.semestre,data.filiere,data.niveau],
            function(err, results,fields) {
               if(err){
                   reject(err)
               }
               connection.query('INSERT INTO cours_groupe (code_cours,id_groupe) VALUES (?,?)', [data.code_cours,data.groupe],
               function(err, results,fields) {
                  if(err){
                      reject(err)
                  }
                  connection.query('INSERT INTO annee_cours (code_cours,id_annee) VALUES (?,?)', [data.code_cours,data.annee],
                  function(err, results,fields) {
                     if(err){
                         reject(err)
                     }
                      resolve(results)
                    })
                 }) 
              })       
        }
        )
    }
    static Find(condition,table,attribut){
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM ${table} WHERE ${attribut} = ?`, [condition],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }

    static FindCodeCour(condition){
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT DISTINCT cours_groupe.code_cours FROM groupe JOIN cours_groupe on groupe.id_groupe=cours_groupe.id_groupe WHERE groupe.id_classe=? `, [condition],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }
    static FindCodeCours(groupe,groupeset){
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT DISTINCT cours_groupe.code_cours FROM groupe JOIN cours_groupe on groupe.id_groupe=cours_groupe.id_groupe WHERE groupe.id_classe=? OR groupe.id_classe=? `, [groupe,groupeset],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }

    static FindDouble(condition1,condition2,table,attribut1,attribut2){
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM ${table} WHERE ${attribut1} = ? OR ${attribut2} = ?`, [condition1,condition2],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }
    static FindInfoProf(attribut){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM enseignant WHERE email = ?', [attribut],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }
    static FindShedulerProf(id){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT plage_horaire.jour, plage_horaire.heure_debut, plage_horaire.heure_fin, cours.code_cours, salle.code_salle, enseignant.nom_enseignant FROM programme JOIN plage_horaire ON plage_horaire.id_plage = programme.id_plage JOIN cours ON cours.code_cours = programme.code_cours JOIN salle ON salle.code_salle = programme.code_salle JOIN enseignant ON enseignant.id_enseignant = programme.id_enseignant WHERE enseignant.id_enseignant = ?', [id],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }

    static FindShedulerSalle(salle){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT plage_horaire.jour, plage_horaire.heure_debut, plage_horaire.heure_fin, cours.code_cours, salle.code_salle, enseignant.nom_enseignant FROM programme JOIN plage_horaire ON plage_horaire.id_plage = programme.id_plage JOIN cours ON cours.code_cours = programme.code_cours JOIN salle ON salle.code_salle = programme.code_salle JOIN enseignant ON enseignant.id_enseignant = programme.id_enseignant WHERE salle.code_salle = ?', [salle],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }
    static FindShedulerNiveau(niveau){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT plage_horaire.jour, plage_horaire.heure_debut, plage_horaire.heure_fin, cours.code_cours, salle.code_salle, enseignant.nom_enseignant FROM programme JOIN plage_horaire ON plage_horaire.id_plage = programme.id_plage JOIN cours ON cours.code_cours = programme.code_cours JOIN salle ON salle.code_salle = programme.code_salle JOIN enseignant ON enseignant.id_enseignant = programme.id_enseignant WHERE cours.code_niveau = ?', [niveau],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }
    
    static FindShedulerFilierNiveauSpecialite(groupe,groupeset,filiere,niveau,specialite){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT plage_horaire.jour, plage_horaire.heure_debut, plage_horaire.heure_fin, cours.code_cours, cours.intitule,enseignant.nom_enseignant,salle.code_salle, groupe.id_groupe FROM programme JOIN plage_horaire ON plage_horaire.id_plage = programme.id_plage JOIN salle ON salle.code_salle = programme.code_salle JOIN enseignant ON enseignant.id_enseignant = programme.id_enseignant JOIN cours_groupe ON cours_groupe.code_cours = programme.code_cours JOIN groupe ON groupe.id_groupe = cours_groupe.id_groupe JOIN cours ON cours.code_cours = programme.code_cours WHERE groupe.id_classe = ?  OR groupe.id_classe = ? AND cours.code_filiere = ? AND cours.code_niveau = ?', [groupe,groupeset,filiere,niveau],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }

    static FindShedulerFilierNiveau(groupe,filiere,niveau){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT plage_horaire.jour, plage_horaire.heure_debut, plage_horaire.heure_fin, cours.code_cours, cours.intitule,enseignant.nom_enseignant,salle.code_salle, groupe.id_groupe FROM programme JOIN plage_horaire ON plage_horaire.id_plage = programme.id_plage JOIN salle ON salle.code_salle = programme.code_salle JOIN enseignant ON enseignant.id_enseignant = programme.id_enseignant JOIN cours_groupe ON cours_groupe.code_cours = programme.code_cours JOIN groupe ON groupe.id_groupe = cours_groupe.id_groupe JOIN cours ON cours.code_cours = programme.code_cours WHERE groupe.id_classe = ? AND cours.code_filiere = ? AND cours.code_niveau = ?', [groupe,filiere,niveau],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }



    static FindShedulerSpecialite(specialite){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT DISTINCT cours.code_salle, cours.code_cours, plage_horaire.jour, enseignant.nom_enseignant , plage_horaire.heure_debut, plage_horaire.heure_fin FROM cours JOIN classe ON cours.id_classe = classe.id_classe JOIN plage_horaire ON cours.id_plage = plage_horaire.id_plage JOIN enseignant_cours ON enseignant_cours.code_cours = cours.code_cours JOIN enseignant ON enseignant.id_enseignant = enseignant_cours.id_enseignant WHERE cours.id_classe = ?', [specialite],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }


    static FindShedulerFiliere(filiere){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT plage_horaire.jour, plage_horaire.heure_debut, plage_horaire.heure_fin,cours.code_cours,cours.code_niveau,cours.code_filiere, salle.code_salle, enseignant.nom_enseignant FROM programme JOIN plage_horaire ON plage_horaire.id_plage = programme.id_plage JOIN cours ON cours.code_cours = programme.code_cours JOIN salle ON salle.code_salle = programme.code_salle JOIN enseignant ON enseignant.id_enseignant = programme.id_enseignant WHERE cours.code_filiere = ? ', [filiere],
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

