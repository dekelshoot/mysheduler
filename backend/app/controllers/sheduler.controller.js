const validationResult = require('express-validator')
const bcrypt = require("bcryptjs")
const User = require('../models/sheduler.model')
const Sheduler = require('../models/sheduler.model')



exports.getProfil = async (req,res,next)=>{
    Sheduler.FindInfoProf(req.body.email).then(
        (data)=>{
            res.status(201).json(data[0])
        },(err)=>{
            console.log(err)
        }
    )

}

exports.getShedulerProf = async (req,res,next)=>{
    console.log(req.body)
    Sheduler.FindInfoProf(req.body.email).then(
        (data)=>{
            console.log(data)
            id=data[0].id_enseignant
            Sheduler.FindShedulerProf(id).then(
                (data)=>{
                    res.status(201).json(data)
                }
            ),(err)=>{
                 console.log(err)
                }
        },(err)=>{
            console.log(err)
        }
    )

}

exports.getShedulerSalle = async (req,res,next)=>{
    // console.log(req.body)
    Sheduler.FindShedulerSalle(req.body.salle).then(
        (data)=>{
            res.status(201).json(data)
        },(err)=>{
            console.log(err)
        }
    )

}
exports.getShedulerSpecialite = async (req,res,next)=>{
    // console.log(req.body)
    Sheduler.FindShedulerSpecialite(req.body.specialite).then(
        (data)=>{
            res.status(201).json(data)
        },(err)=>{
            console.log(err)
        }
    )

}
exports.getShedulerNiveau = async (req,res,next)=>{
    // console.log(req.body)
    Sheduler.FindShedulerNiveau(req.body.salle).then(
        (data)=>{
            res.status(201).json(data)
        },(err)=>{
            console.log(err)
        }
    )

}

exports.getShedulerFiliere = async (req,res,next)=>{
    // console.log(req.body)
    Sheduler.FindShedulerFiliere(req.body.filiere).then(
        (data)=>{
            res.status(201).json(data)
        },(err)=>{
            console.log(err)
        }
    )

}


exports.getShedulerFilierNiveau = async (req,res,next)=>{
    // console.log(req.body)
    Sheduler.FindShedulerFilierNiveau(req.body.filiere).then(
        (data)=>{
            res.status(201).json(data)
        },(err)=>{
            console.log(err)
        }
    )

}

exports.getShedulerFilierSpecialite = async (req,res,next)=>{
    // console.log(req.body)
    Sheduler.FindShedulerFilier(req.body.filiere).then(
        (data)=>{
            res.status(201).json(data)
        },(err)=>{
            console.log(err)
        }
    )

}


exports.getShedulerFilierNiveauSpecialite = async (req,res,next)=>{
    // console.log(req.body)
    Sheduler.FindShedulerFilier(req.body.filiere).then(
        (data)=>{
            res.status(201).json(data)
        },(err)=>{
            console.log(err)
        }
    )

}


