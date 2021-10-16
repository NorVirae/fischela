const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const Order = new mongoose.Schema({
    name:{
        type:String,
        index:true,
        trim:true,
        max:32,
        required: true,
    },
    SellerEmail:{
        type:String,
        default:"norbertmbafrank@gmail.com"

    },

    BuyerEmail:{
        type:String,
        default:"norbertmbafrank@gmail.com"
    },
    

    ProductId:{
        type:ObjectId,
        ref:"Product",
    },
    // BuyerId:
    //     {
    //         type:String,
    //         required:true,
    //         ref:"User"
    //     },
    
    description:{
        type:String,
        max:1100,
    },
    price:{
        type:Number,
    },

    amountpaid:{
        type:Number,
        default:0,
    },
    approved:{
        type:Boolean,
        default:false,
    },
    paid:{
        type:Boolean,
        default:false,
    },

    refund:{
        type:Boolean,
        default:false,
    },

    spaid:{
        type:Boolean,
        default:false,
    },

    color:{
        type:String
    },
    brand:{
        type:String
    },
    qty:{
        type:Number,
    },

    BDelivery:{
        type:String,
        enum:["pending", "delivered", "not delivered"],
        default:"pending"
    },
    SDelivery:{
        type:String,
        enum:["pending", "delivered", "not delivered"],
        default:"pending"
    },
    
    location:{
        type:String,
    },
    
    expiry:{
        type:Date,
        default:Date.now()
    },
    timeOfOrder:{
        type:Date,
        default:Date.now()
    }

}, {timestamp:true})


module.exports = mongoose.model("Order", Order)
