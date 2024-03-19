const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : String,
    price: Number,
    description: String,
});

const Product = mongoose.model('ProductNTH', productSchema);

module.exports = Product;