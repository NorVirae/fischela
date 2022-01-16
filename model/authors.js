const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Author = new Schema ({
    name:{type:String},
    age:{type:String},
    nick:{type:String},
})

module.exports = mongoose.model('Author', Author)