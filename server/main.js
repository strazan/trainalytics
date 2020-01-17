const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const app = express()
const port = 8000

app.get('/knock-on', cors(), (req, res, next) =>
  fetchAndSend('https://labs.thetrainbrain.com/knockon/?minutes=30', res)
)

function fetchAndSend(api, res) {
  fetch(api)
    .then(res => {
      return res.json()
    })
    .then(json => {
      res.send(json)
    })
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
