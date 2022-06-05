const { matchedData } = require('express-validator');
const Sheduler = require('../models/sheduler.model')


exports.setNewCours = async (req,res,next)=>{
    data=req.body;
    data.annee=new Date().getFullYear(),
    console.log(data)
    Sheduler.setNewCours(data).then(
        (result)=>{
            res.status(201).json(
                {"message":"reussit","code":"200"}
            )
        
        },(rej)=>{
            console.log(rej)
            res.status(201).json(
                {"message":"already exist","code":"400"}
            )
        }
    )
}


exports.setCours = async (request,response,next)=>{
    data=request.body;
    let metaData = {
        id_enseignant:"",
        annee:new Date().getFullYear(),
        id_plage:"",
        plage:"",
        enseignant:""
    }
    console.log(data)

    Sheduler.Find(data.professeur,"enseignant","nom_enseignant").then(
        (res)=>{
            if(res.length==0){
                response.status(201).json({"message":"teacher no exist","code":"400"})
            }else{
                metaData.id_enseignant=res[0].id_enseignant
                Sheduler.Find(data.jour,"plage_horaire","jour").then(
                    (res)=>{
                        if(res.length==0){
                            response.status(201).json({"message":"time slots no exist","code":"400"})
                        }else{
                            console.log("plage",res)
                            for(let dat of res){
                                if(dat.heure_debut==data.heurDebut && dat.heure_fin==data.heurFin ){
                                    metaData.id_plage=dat.id_plage
                                    console.log(metaData.id_plage)
                                }
                            }
                            if(metaData.id_plage==''){
                                response.status(201).json(
                                    {"message":"this Time slot no exist","code":"400"}
                                )
                            }else{
                                Sheduler.Find(metaData.id_plage,"programme","id_plage").then(
                                    (res)=>{
                                        console.log(metaData)
                                        console.log("programme",res)
                                        if(res.length==0){
                                            Sheduler.setCours(metaData.id_enseignant,data.code_cours,metaData.id_plage,data.salle).then(
                                                (res)=>{
                                                    console.log(res)
                                                    response.status(201).json(
                                                        {"message":"add success","code":"200"}
                                                    )
                                                },(rej)=>{
                                                    console.log(rej)
                                                    response.status(201).json({"message":"add failed","code":"400"})
                                                }
                                            )
                                        }else{
                                            for(let dat of res){
                                                if(dat.id_plage==metaData.id_plage && data.salle==dat.code_salle){
                                                    metaData.plage="busy"
                                                }
                                                if(dat.id_plage==metaData.id_plage && dat.id_enseignant==metaData.id_enseignant){
                                                    metaData.enseignant="busy"
                                                }
                                            }
                                            if(metaData.plage==""){
                                                if(metaData.enseignant==""){
                                                    Sheduler.setCours(metaData.id_enseignant,data.code_cours,metaData.id_plage,data.salle).then(
                                                        (res)=>{
                                                            console.log(res)
                                                        
                                                            response.status(201).json(
                                                                {"message":"add success","code":"200"}
                                                            )
                                                        },(rej)=>{
                                                            console.log(rej)
                                                            response.status(201).json({"message":"already exist","code":"400"})
                                                        }
                                                    )
                                                }else{
                                                    response.status(201).json({"message":"this teacher is busy at this time","code":"400"})
                                                }
                                            }else{
                                                response.status(201).json({"message":"this Time slot is already occupied","code":"400"})
                                            }

                                        }
                                    
                                    },(rej)=>{
                                        console.log(rej)
                                        response.status(201).json({"message":rej})
                                    }
                                )
                            }
                        }
                        
                },(rej)=>{
                    console.log(rej);
                    response.status(201).json({"message":"time slots no exist","code":"400"})
                }
            )
            }
        },(rej)=>{console.log(rej); response.status(201).json({"message":"teacher no exist","code":"400"})}
    )

    
}

// exports.setCours = async (request,response,next)=>{
//     data=request.body;
//     let metaData = {
//         programme:false,
//         cours:false,
//         id_enseignant:"",
//         annee:new Date().getFullYear(),
//         id_plage:""
//     }
//     console.log(data)
//     Sheduler.Find(data.professeur,"enseignant","nom_enseignant").then(
//         (res)=>{
//             console.log("enseignant",res)
//             metaData.id_enseignant=res[0].id_enseignant
//             Sheduler.Find(data.jour,"plage_horaire","jour").then(
//                 (res)=>{
//                     console.log("plage",res)
//                      for(let dat of res){
//                          if(dat.heure_debut==data.heurDebut && dat.heure_fin==data.heurFin ){
//                              metaData.id_plage=dat.id_plage
//                              console.log(metaData.id_plage)
//                          }
//                      }
//                      Sheduler.Find(data.code_cours,"programme","code_cours").then(
//                         (res)=>{
//                             console.log("programme",res)
//                             if(res.length==0){
//                                 Sheduler.setCours(metaData.id_enseignant,data.code_cours,metaData.id_plage,data.salle).then(
//                                     (res)=>{
//                                         console.log(res)
//                                         response.status(201).json(
//                                             {"message":"reussit","code":"200"}
//                                         )
//                                     },(rej)=>{
//                                         response.status(201).json({"message":"already exist","code":"400"})
//                                     }
//                                 )
//                             }else{
//                                 for(let dat of res){
//                                     if(dat.id_plage==metaData.id_plage && data.salle==dat.code_salle){
//                                         response.status(201).json({"message":"already exist","code":"400"})
//                                     }
//                                 }
//                             }

//                         }
//                     ),(rej)=>{
//                         response.status(201).json({"message":rej})
//                     }
//                 }
//             ),(rej)=>{
//                 response.status(201).json({"message":rej})
//             }
//         }
//     )
   

// }

exports.getProfil = async (req,res,next)=>{
    Sheduler.Find(req.body.email,"enseignant","email").then(
        (data)=>{
            console.log(data)
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
                    console.log(data)
                    res.status(201).json({
                      "data":data,
                      "title":req.body.salle
                    })
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
            console.log(data)
            res.status(201).json({
              "data":data,
              "title":req.body.salle
            })
        },(err)=>{
            console.log(err)
        }
    )

}
exports.getShedulerSpecialite = async (req,res,next)=>{
    // console.log(req.body)
    Sheduler.FindShedulerSpecialite(req.body.specialite).then(
        (data)=>{
            console.log(data)
            res.status(201).json({
              "data":data,
              "title":req.body.specialite
            })
        },(err)=>{
            console.log(err)
        }
    )

}
exports.getShedulerNiveau = async (req,res,next)=>{
    console.log(req.body)
    Sheduler.FindShedulerNiveau(req.body.niveau).then(
        (data)=>{
            console.log(data)
            res.status(201).json({
              "data":data,
              "title":req.body.niveau
            })
        },(err)=>{
            console.log(err)
        }
    )

}

exports.getShedulerFiliere = async (req,res,next)=>{
    console.log(req.body,"filier")
    Sheduler.FindShedulerFiliere(req.body.filiere).then(
        (data)=>{
            console.log(data)
            res.status(201).json({
              "data":data,
              "title":req.body.filiere
            })
        },(err)=>{
            console.log(err)
        }
    )

}


exports.getShedulerFilierNiveau = async (req,res,next)=>{
    console.log(req.body)
    Sheduler.FindShedulerFilierNiveau(req.body.groupe,req.body.filiere,req.body.niveau).then(
        (data)=>{
            console.log(data)
            Sheduler.FindCodeCour(req.body.groupe).then(
                (result)=>{
                    res.status(201).json({
                        "data":data,
                        "title":req.body.filiere+" "+req.body.niveau,
                        "code":result
                      })
                }
            )
        },(err)=>{
            console.log(err)
        }
    )

}

// exports.getShedulerFilierSpecialite = async (req,res,next)=>{
//     // console.log(req.body)
//     Sheduler.FindShedulerFilier(req.body.filiere).then(
//         (data)=>{
//             res.status(201).json({
//               "data":data,
//               "title":req.body.salle
//             })
//         },(err)=>{
//             console.log(err)
//         }
//     )

// }


exports.getShedulerFilierNiveauSpecialite = async (req,res,next)=>{
    console.log(req.body,'end')
    Sheduler.FindShedulerFilierNiveauSpecialite(req.body.groupe,req.body.groupeset,req.body.filiere,req.body.niveau,req.body.specialite).then(
        (data)=>{
            console.log(data)
            Sheduler.FindCodeCours(req.body.groupe,req.body.groupeset).then(
                (result)=>{
                    res.status(201).json({
                        "data":data,
                        "title":req.body.filiere+" "+req.body.niveau+" "+req.body.specialite,
                        "code":result
                      })
                }
            )
        },(err)=>{
            console.log(err)
        }
    )

}


