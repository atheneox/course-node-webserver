const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home', {
        _nombre: 'Athen Mint',
        _title: 'Course | Home',
        _where: 'Home'
    });

});

app.get('/about', function(req, res) {

    res.render('about', {
        _nombre: 'Athen Mint',
        _title: 'Course | About',
        _where: 'About'
    });

});

app.listen(port, () => console.log(`listen ${ port }`));