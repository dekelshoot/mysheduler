module.exports = app =>{
    const router = require('express').Router();
    const sheduler = require('../controllers/sheduler.controller');
    
    router.post('/profil' , sheduler.getProfil)
    router.post('/prof' , sheduler.getShedulerProf)
    router.post('/salle' , sheduler.getShedulerSalle)
    router.post('/niveau' , sheduler.getShedulerNiveau)
    router.post('/specialite' , sheduler.getShedulerSpecialite)
    router.post('/filiere' , sheduler.getShedulerFiliere)
    router.post('/filiere/niveau' , sheduler.getShedulerFilierNiveau)
    router.post('/filiere/niveau/specialité' , sheduler.getShedulerFiliere)
    app.use('/api/sheduler',router)
}