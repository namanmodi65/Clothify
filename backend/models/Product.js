const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
    price: {
        type: String,
        required: true,
      },
    photo: {
        type: String,
        required: false,
      },
    categories: {
        type: Array,
        required: false,
      },
},{timestamps:true});

module.exports = mongoose.model('Product',ProductSchema)