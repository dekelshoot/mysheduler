const validationResult = require('express-validator')
const bcrypt = require("bcryptjs")
const User = require('../models/user.model')
const command = require('nodemon/lib/config/command')

// exports.signup = async (req,res,next)=>{
//     console.log('debut')
//     const user = await User.find(req.body.email);
//     // if(user[0].length > 0){
//     //     return Promise.reject('Email adress is already exist !!!')
//     // }
//     const errors = validationResult(req)
//     if(!errors.isEmpty()) return
//     const email = req.body.email
//     const password = req.body.password
//     try{
//         const hashedPassword = await bcrypt.hash(password,12)
//         const userDetails = {
//             email:email,
//             password:password
//         }
//         console.log(userDetails)
//         const result = await User.save(userDetails)
//         res.status(201).json({message:'User registred!'})

//     }catch(err){
//         if(!err.statusCode){
//             err.statusCode = 500
//         }
//         next(err)
//     }
// }


exports.signin = async (req,res,next)=>{
     User.find(req.body.email).then(
         (data)=>{
            let user = data;
            if(user.length == 0){
                res.status(201).json(
                    {
                        isAuth:false,
                        message:"connexion impossible",
                        code:1,
                        err: "auccun compte ne correspond a cet email"
                    }
                )
            }
            else{
                password = req.body.password;
                bcrypt.compare(password,user[0].password).then(
                (response)=>{
                    if(response){
                        res.status(201).json(
                            {
                                isAuth:response,
                                message:"connexion réussit",
                                code:2,
                                err:"none"
                            }
                            )
                    }else{
                        res.status(201).json(
                            {
                                isAuth:response,
                                message:"connexion impossible",
                                code:3,
                                err: "le mot de passe ne correspond pas"
                            }
                        )
                    }
                }
            )
            }

         },
         (err)=>{
             console.log(err)
         }
     );
     
     
     
     
}
exports.signup = async (req,res,next)=>{
    const user =  User.find(req.body.email);
    console.log(User.find(req.body.email))
    if(user==""){
        console.log('pas bon')
        res.status(201).json({message:'Email adress is already exist!'})
        // return Promise.reject('Email adress is already exist !!!')
    }else{
        const email = req.body.email
        const password = req.body.password
        try{
            const hashedPassword = await bcrypt.hash(password,12)
            const userDetails = {
                email:email,
                password:hashedPassword
            }
            const result = User.save(userDetails)
            res.status(201).json({message:'User registred!'})
    
        }catch(err){
            if(!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        }
    }
        
}

exports.salut =  (req,res,next)=>{
    res.status(201).json({message:'User registred!'})
}


