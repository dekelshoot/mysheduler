const validationResult = require('express-validator')
const bcrypt = require("bcryptjs")
const User = require('../models/sheduler.model')
const Simple = require('../models/simple.model')

exports.getNomProfesseur = async (req,res,next)=>{
    Simple.Find("enseignant","nom_enseignant").then(
        (data)=>{
            console.log(data)
            res.status(201).json(data)
        },(err)=>{
            console.log(err)
        }
    )
    
}

exports.getCodeCours = async (req,res,next)=>{
    Simple.Find("cours","code_cours").then(
        (data)=>{
            console.log(data)
            res.status(201).json(data)
        },(err)=>{
            console.log(err)
        }
    )
    
}

exports.getPlage = async (req,res,next)=>{
    Simple.FindHeure().then(
        (data)=>{
            console.log(data)
            res.status(201).json(data)
        },(err)=>{
            console.log(err)
        }
    )
    
}