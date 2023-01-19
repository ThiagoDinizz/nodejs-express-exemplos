const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/teste', function (req, res) {
  res.send('Hello World teste')
})

app.listen(3000, ()=>console.log(`ONLINE  htpp://localhost:3000`))