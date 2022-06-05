module.exports = app =>{
    const router = require('express').Router();
    const simple = require('../controllers/simple.controller');
    
    router.get('/professeur' , simple.getNomProfesseur)
    router.get('/codecours' , simple.getCodeCours)
    router.get('/plage' , simple.getPlage)
    app.use('/api/simple',router)
}