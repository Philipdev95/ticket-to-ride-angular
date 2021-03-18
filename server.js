var express = require('express')
var app = express()
app.use(express.static('dist/PROJECT-NAME'))
app.get('/', function (req, res, next) {
  res.redirect('/')
})
app.listen(8080)
