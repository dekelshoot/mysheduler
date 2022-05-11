module.exports = app =>{
    const router = require('express').Router();
    const auth = require('../controllers/auth.controller');
    
    router.post('/', auth.signin)
    router.get('/' , auth.salut)
    app.use('/api/signup',router)
}