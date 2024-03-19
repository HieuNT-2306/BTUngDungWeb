const Product = require("../Schemas/product.js");
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router()

router.post('/add', async (req, res) => {
    const { name, price, description } = req.body;
    const product = new Product({ name, price, description });
    try {
        await product.save();
        res.status(201).json({product: product});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/get', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        const { name, price, description, id } = req.body;
        const product = await Product.findById(id); 
        if (name) product.name = name;
        if (price) product.price = price;
        if (description) product.description = description;
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;