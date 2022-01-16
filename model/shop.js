const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ShopSchema = new Schema({
    name: {type:String},
    description: {type:String},
    shopOwnerId: {type:String},
})


module.exports = mongoose.model("Shop", ShopSchema)