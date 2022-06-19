const express = require('express')
const router = express.Router()

// @desc    Login/Landing page
// @route   GET /

router.get('/',(req, res)=>{
    res.render('login', {
        layouts : 'login'
    })
})

// @desc    Dashboard
// @route   GET /dashboard

router.get('/dashboard',(req, res)=>{
    res.render('Dashboard')
})


module.exports = router

// In order to use this file we need to go to app.js there we link our routing files