const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const router = express.Router()
const JWT_SECRET = 'ThisisClothify'

//RESISTER
router.post('/resister',async(req,res)=>{
    try {

        let check = await User.findOne({ email: req.body.email })
        if (check) {
        return res.status(400).json({error: "Sorry user with this email already exist" })
        }

        const salt = await bcrypt.genSalt(10)
        const secretPass = await bcrypt.hash(req.body.password,salt)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:secretPass
        })

        const data ={
            newUser:{
              id : newUser.id
            }
          }
        const authToken = jwt.sign(data,JWT_SECRET)
        const user = await newUser.save()
        res.status(200).json({authToken})
    } catch (error) {
        // console.error(error)
        res.status(500).send("some error occured")
    }
})

// LOGIN
router.post('/login',async(req,res)=>{
    try {
        const user = await User.findOne({username:req.body.username})
        !user && res.status(200).json("Wrong credentials")
        
        const validated = await bcrypt.compare(req.body.password,user.password)
        !validated && res.status(200).json("Wrong credentials")

        const data ={
            user:{
              id : user.id
            }
          }
          const authToken = jwt.sign(data,JWT_SECRET)
        res.status(200).json({authToken})

    } catch (error) {
        // console.error(error)
        res.status(500).send("some error occured")
    }
})


module.exports = router