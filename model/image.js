const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ImageList = Schema({
    public_id:{type:String},
    timeOfCreation:{type:Date, default:Date.now()},
    url:{type:String},
    inUse:{type:Boolean, default:false}
})


module.exports = mongoose.model("ImageList", ImageList)