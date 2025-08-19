const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {res.render('admin/admin-login',
{title: 'adminLogin',customCss: 'admin-css/login', layout:'layouts/admin'});})
router.get('/dashboard',(req,res)=>{res.render('admin/admin-dashboard', 
    {customCss:'admin-css/admin-deshboard',layout:'layouts/admin-layout'})})
router.get('/producet',(req,res)=>{res.render('admin/admin-produect', 
    {customCss:'admin-css/admin-produect',layout:'layouts/admin-layout'})})

module.exports = router;
