module.exports = app =>{
    const router = require('express').Router();
    const sheduler = require('../controllers/sheduler.controller');
    
    router.post('/cours' , sheduler.setCours)
    router.post('/newcours' , sheduler.setNewCours)
    router.post('/profil' , sheduler.getProfil)
    router.post('/prof' , sheduler.getShedulerProf)
    router.post('/professeur' , sheduler.getShedulerProf)
    router.post('/salle' , sheduler.getShedulerSalle)
    router.post('/niveau' , sheduler.getShedulerNiveau)
    router.post('/specialite' , sheduler.getShedulerSpecialite)
    router.post('/filiere' , sheduler.getShedulerFiliere)
    router.post('/filiere/niveau' , sheduler.getShedulerFilierNiveau)
    router.post('/filiere/niveau/specialite' , sheduler.getShedulerFilierNiveauSpecialite)
    app.use('/api/sheduler',router)
}