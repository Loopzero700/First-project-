const express = require('express')
const router = express.Router()

router.get('/home',(req,res)=>{res.render('user/home',{title: 'home',customCss: 'user-css/home'});})


module.exports = router