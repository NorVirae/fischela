const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Book = new Schema ({
    name:{type:String},
    genre:{type:String},
    authorId:{type: String}

})

module.exports = mongoose.model('Book', Book)