const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const mockDelays = require('./mockDelays')
const app = express()
const port = 8000

app.get('/knock-on', cors(), (req, res, next) =>
  fetchAndSend('https://labs.thetrainbrain.com/knockon/?minutes=30', res)
)

app.get('/prognosis', cors(), (req, res, next) =>
  fetchAndSend('https://labs.thetrainbrain.com/prognosis/', res)
)

app.get('/delays', cors(), (req, res, next) => {
  res.send(mockDelays.getDelays())
})

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
