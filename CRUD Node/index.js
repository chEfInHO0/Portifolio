const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')
const prod = require('./prod/prod')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

app.use('/prod',prod)

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/',(req,res) => {
    res.render('home')
})

app.listen(3000)
