const express = require('express');
const config = require("./config");
const router = require('./routes/api.js');
const bodyParser = require('body-parser')
const app = express()

// db
require('./db/mongoose')

// parser
// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//routes
app.use('/api/', router)
router.get('/', (req, res)=>{
    res.send('hello world')
})





app.listen(config.port, ()=>{
    console.log('Server running on port 3001')
})