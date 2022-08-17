const express = require('express')
const exphbs = require('express-handlebars')
const router = express.Router()
const pool = require('../db/conn')
const Prod = require('../models/Prod')

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.use(express.static('public'))

router.get('/create',(req,res) => {
    res.render('createProd')
})
router.post('/create',async (req,res)=>{
    console.log('test')
    const name = req.body.name
    const serial = req.body.serial
    const category = req.body.category
    await Prod.create({name,category,serial})
    const query = await Prod.findAll({raw:true})
    console.log(query)
    res.redirect('/')
    
    
})
module.exports = router
