const express = require('express')
const app = express()
const port = 8080
const fetch = require('node-fetch');
var cors = require('cors')
app.get('/', cors(), (req, res, next) => 
    fetch('https://labs.thetrainbrain.com/knockon/?minutes=30')
    .then (res => {
        return res.json()
    }).then(json => {
        res.send(json)
    })
)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))