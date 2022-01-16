const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductSchema = new Schema({
            name: {type: String},
            images:{type:Array},
            description: {type: String},
            sellerId: {type:String},
            Price: {type:Number},
            quantity: {type:Number},
            brand: {type:String},
            shipping: {type:Boolean},
            birth:{type:Date, default:Date.now()}
})


module.exports = mongoose.model("Product", ProductSchema )