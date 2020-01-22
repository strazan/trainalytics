const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const util = require('./prognosis')
const app = express()
const port = 8000

app.get('/delay', cors(), async (req, res, next) => {
  fetch('https://labs.thetrainbrain.com/prognosis/')
    .then(res => {
      return res.json()
    })
    .then(async json => {
      const prog = await util.getPrognosis(json)
      res.send(prog)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
