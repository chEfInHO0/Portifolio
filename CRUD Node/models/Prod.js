const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Prod = db.define('Prod',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
    },
    serial:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
    }
})
module.exports = Prod