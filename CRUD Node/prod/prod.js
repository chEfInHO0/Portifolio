const express = require('express')
const exphbs = require('express-handlebars')
const router = express.Router()

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.use(express.static('public'))

router.get('/create',(req,res) => {
    res.render('createProd')
})
router.post('/create',(req,res)=>{
    const reqKeys = Object.keys(req.body)
    let val = []
    reqKeys.forEach(key => {
        let currKey = req.body[key]
        let currVal = currKey
        val.push(currVal)
    })
    let prodCreate = {}
    for (let c = 0;c < reqKeys.length;c++){
        prodCreate[reqKeys[c]] = val[c]
    }
    console.log(prodCreate)
    res.redirect('/')
})
module.exports = router
