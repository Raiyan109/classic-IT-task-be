const mongoose = require('mongoose');

const Schema = mongoose.Schema

const itemsSchema = new Schema({
    image: String,
    title: String,
    colorVariation: String,
    sizeVariation: String,
})

module.exports = mongoose.model('Item', itemsSchema)