const mongoose = require("mongoose")

const Schema = mongoose.Schema

const HistorySchema = new Schema({
    name:{type:String},
    description:{type:String},
    sourceId:{type:String},
    targetId:{type:String},
    type:{type:String}, 
    date:{type:Date, default:Date.now()}
})


module.exports = mongoose.model("History", HistorySchema)