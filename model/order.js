const mongoose = require('mongoose')
const Schema = mongoose.Schema
const OrderSchema = new Schema({
    productName: {type:String},
    productDescription: {type:String},
    sellerId:{type:String},
    buyerId: {type:String},
    productPrice: {type:Number},
    amountpaidIn: {type:Number},
    hasBuyerReceivedDelivery: {type:Boolean},
    hasSellerDelivered: {type:Boolean},
    approved: {type:Boolean},
    productLocation: {type:String},
    paid: {type:Boolean},
    refund: {type:Boolean},
    spaid: {type:Boolean},
    timeOfOrder: {type:Date, default:Date.now()},
})


module.exports = mongoose.model("Order", OrderSchema)