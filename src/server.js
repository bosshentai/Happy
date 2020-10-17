// import dependencies
const express = require('express');
const path = require('path');
// init o expresss
const server = express()

server
// using the statics files
.use(express.static('public'))
//create route
.get('/', (request,response) => {
    return response.sendFile(path.join(__dirname,'views', 'index.html'))
})

// connecto to server
server.listen(5500)