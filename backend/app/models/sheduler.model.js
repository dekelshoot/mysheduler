const db = require("../configs/database")
const mysql = require('mysql2');
const connect = require("../configs/database")
// create the connection to database
const connection = connect.connection

module.exports = class Sheduler{

    static FindInfoProf(email){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM enseignant WHERE email = ?', [email],
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
            connection.query('SELECT cours.code_cours, plage_horaire.jour, plage_horaire.heure_debut, plage_horaire.heure_fin FROM cours JOIN enseignant_cours ON cours.code_cours = enseignant_cours.code_cours JOIN plage_horaire ON plage_horaire.id_plage = cours.id_plage WHERE id_enseignant = ?', [id],
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
            connection.query('SELECT cours.code_salle, cours.code_cours, plage_horaire.jour, plage_horaire.heure_debut, plage_horaire.heure_fin FROM cours JOIN plage_horaire ON cours.id_plage = plage_horaire.id_plage WHERE cours.code_salle = ?', [salle],
                 function(err, results,fields) {
                    if(err){
                        reject(err)
                    }
                     resolve(results)
                   })
                      
        }
        )
    }
    static FindShedulerNiveau(salle){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT cours.code_salle, cours.code_cours, plage_horaire.jour, plage_horaire.heure_debut, plage_horaire.heure_fin FROM cours JOIN plage_horaire ON cours.id_plage = plage_horaire.id_plage WHERE cours.code_salle = ?', [salle],
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
            connection.query('SELECT DISTINCT cours.code_salle, cours.code_cours, plage_horaire.jour, plage_horaire.heure_debut, plage_horaire.heure_fin FROM cours JOIN classe ON cours.id_classe = classe.id_classe JOIN plage_horaire ON cours.id_plage = plage_horaire.id_plage WHERE cours.id_classe = ?', [specialite],
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
            connection.query('SELECT DISTINCT cours.code_salle, cours.code_cours, plage_horaire.jour, plage_horaire.heure_debut,plage_horaire.heure_fin, enseignant_cours.id_enseignant, enseignant.nom, classe_specialite.code_specialite FROM filiere_niveau JOIN cours ON filiere_niveau.code_niveau = cours.code_niveau JOIN plage_horaire ON plage_horaire.id_plage = cours.id_plage JOIN enseignant_cours ON enseignant_cours.code_cours = cours.code_cours JOIN enseignant ON enseignant_cours.id_enseignant = enseignant.id_enseignant JOIN classe_specialite ON classe_specialite.id_classe = cours.id_classe WHERE filiere_niveau.code_filiere = ?', [filiere],
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
    static FindShedulerFiliereNiveau(filiere){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT DISTINCT cours.code_salle, cours.code_cours, plage_horaire.jour, plage_horaire.heure_debut,plage_horaire.heure_fin, enseignant_cours.id_enseignant, enseignant.nom, classe_specialite.code_specialite FROM filiere_niveau JOIN cours ON filiere_niveau.code_niveau = cours.code_niveau JOIN plage_horaire ON plage_horaire.id_plage = cours.id_plage JOIN enseignant_cours ON enseignant_cours.code_cours = cours.code_cours JOIN enseignant ON enseignant_cours.id_enseignant = enseignant.id_enseignant JOIN classe_specialite ON classe_specialite.id_classe = cours.id_classe WHERE filiere_niveau.code_filiere = ?', [filiere],
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
    


}

