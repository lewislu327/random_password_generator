const express = require('express')
const app = require('express')(express)
const port = 3000
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)

  res.render('index', { password, options })
})

app.listen(port, () => {
  console.log(`this Express server is running on http://localhost:${port}`)
})
