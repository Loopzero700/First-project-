const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const routerAdmin = require('./router/admin')
const routerUser = require('./router/user')
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(expressLayouts);
app.set('layout', 'layouts/main');  

app.use(express.static('public'));

app.use('/user',routerUser)
app.use('/admin',routerAdmin)

app.listen(3000, () => console.log('Server running on port 3000'));
