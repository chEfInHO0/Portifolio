const express = require('express')
const router = express.Router()
const Prod = require('../models/Prod')

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.use(express.static('public'))

router.get('/create',(req,res) => {
    res.render('createProd',{title:'Create'})
})

router.post('/create',async (req,res)=>{
    const name = req.body.name
    const serial = req.body.serial
    const category = req.body.category
    await Prod.create({name,category,serial})
    const query = await Prod.findAll({raw:true})
    console.log(query)
    res.redirect('/') 
})

router.get('/read',async (req,res) => {
    const prod = await Prod.findAll({raw:true})
    console.log(prod)
    res.render('readProd',{prod,title:'Read'})
})

router.get('/update',async (req,res) => {
    const prod = await Prod.findAll({raw:true})
    res.render('updateProd',{prod,title:'Update'})
})

router.post('/update',async (req,res) => {
    console.log(req.body)
    const id = req.body.id
    const updatedProd = {
        name:req.body.name,
        serial:req.body.serial,
        category:req.body.category
    }
    Prod.update(updatedProd,{where:{id:id}})
    res.redirect('update')
})


router.post('/updating',async (req,res) => {
    const id = req.body.id
    console.log(id)
    const prod = await Prod.findOne({where:{id:id},raw:true})
    console.log(prod)
    res.render('updateForm',{prod,title:'Updating'})
})

router.get('/delete',async (req,res) => {
    const prod = await Prod.findAll({raw:true})
    res.render('deleteProd',{prod,title:'Delete'})
})

router.post('/deleting',async (req,res) => {
    const id = req.body.id
    console.log(id)
    const delProd = await Prod.destroy({where:{id:id}})
    console.log(delProd)
    res.redirect('read')
})
module.exports = router
