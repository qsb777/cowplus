const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const articles = require('./articles')
const statistics = require('./statistics')
const user = require('./user')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use(articles)
app.use(statistics)
app.use(user)

app.listen(4444, ()=> {
  console.log('Mock server is running on PORT 4444')
})