const mongoose = require('mongoose')
const Schema = mongoose.Schema
const FarmSchema = new Schema({
    name: {type:String},
    description: {type:String},
    farmOwnerId: {type:String},
})


module.exports = mongoose.model("Farm", FarmSchema)