const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')


router.post('/login' , (req,res)=>{
    //Mock User
    const user={
        id:1,
        username:"Hamid",
        email: "Hshoja@live.com"
    }

    jwt.sign({user},'secretkey',{expiresIn:'30s'},(err,token)=>{
        res.json({token});
    });
});

module.exports= router;