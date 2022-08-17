const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')
const prod = require('./prod/prod')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.use('/prod',prod)

app.get('/prod',(req,res) => {
    res.render('home')
})
app.get('/',(req,res) => {
    res.redirect('/prod')
})
conn.sync().then(app.listen(3000)).catch(err => {console.log(err)})
