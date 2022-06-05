module.exports = app =>{
    const router = require('express').Router();
    const auth = require('../controllers/auth.controller');
    
    router.post('/signup', auth.signin)
    router.get('/signup',auth.hello)
    router.post('/update', auth.updateProfil)
    app.use('/api/auth',router)
}