const express = require('express')
const Product = require('../models/Product')


const router = express.Router()
// CREATE PRODUCT
router.post('/',async(req,res)=>{
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {

        // res.status(500).send("some error occured")
        res.status(500).send(error)
    }
})

// DELETE PRODUCT
router.delete('/:id',async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        await product.deleteOne()
        res.status(200).json("Product has been deleted")
     
    } catch (error) {
        res.status(500).send("some error occured")
    }
})

//GET POST
router.get('/:id',async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).send("some error occured")
    }
})

//GET ALL PRODUCT
router.get('/',async(req,res)=>{
    const catName = req.query.cat
    try {
        let posts
        if(catName){
            posts = await Product.find({
                categories:{
                    $in:[catName]
                }
            })
        }
        else{
            posts = await Product.find()
        }

        res.status(200).json(posts)
    } catch (error) {
        res.status(500).send("some error occured")
    }
})

module.exports = router
