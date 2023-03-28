const express = require('express')
const Product = require('../models/Product')

const router = express.Router()
// CREATE POST
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

// DELETE POST
// router.delete('/:id',async(req,res)=>{
//     try {
//         const post = await Post.findById(req.params.id)
//         if(post.username === req.body.username){
//             try {
//                 await post.delete()
//                 res.status(200).json("Post has been deleted")   
//             } catch (error) {
//                 res.status(500).send("some error occured")
//             }
//         }
//         else{
//             res.status(401).json("You can delete only your post")
//         }
//     } catch (error) {
//         res.status(500).send("some error occured")
//     }
// })

module.exports = router