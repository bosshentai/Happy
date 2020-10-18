// import dependencies
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
// init o expresss
const server = express()

server
// utilzar bdy do require
.use(express.urlencoded({ extended: true }))

// using the statics files
.use(express.static('public'))

//configure themeplate engine
.set('views',path.join(__dirname, "views"))
.set('view engine', 'hbs')

//create route
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)



// connecto to server
server.listen(5500)