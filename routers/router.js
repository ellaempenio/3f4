const express = require('express');
const chester = express.Router();
const ella = require('../controller/EllaController');
chester.get('/', ella.main);
chester.get('/about', ella.about);
chester.get('/contact', ella.contact);
chester.get('/location', ella.location);
chester.get('/services', ella.services);


module.exports = chester;