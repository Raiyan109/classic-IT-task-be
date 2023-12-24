const mongoose = require('mongoose');

const Schema = mongoose.Schema

const itemsSchema = new Schema({
    image: String,
    title: String,
    colors: [String],
    imgClicked: {
        black: Boolean,
        green: Boolean,
        yellow: Boolean
    },
    imgLinked: {
        black: String,
        green: String,
        yellow: String
    },
})

module.exports = mongoose.model('Item', itemsSchema)