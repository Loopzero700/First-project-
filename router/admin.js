const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {res.render('admin/admin-login',
{title: 'adminLogin',customCss: 'admin-css/login', layout:'layouts/admin'});})

module.exports = router;
