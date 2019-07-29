const express = require('express');
const router = express.Router();
const Subscriber = require ('../models/subscriber');


//Getting all
router.get('/',async(req,res) => {
    
    try{
        const subscribers = await Subscriber.find();
        // find get all the subscribers 
        res.json(subscribers);
    }
    catch(err){
        res.status(500).json({message:erro.message});

        // 500 : error on Server 
    }
    
})
//Getting One
router.get('/:id',getSubscriber,(req,res) => {
    res.json(res.subscriber)
})
// Creating One
router.post('/',async (req,res) => {
    const subscriber = new Subscriber({
        name : req.body.name,
        subscribedToChannel : req.body.subscribedToChannel
    });

    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
        // 201 means sth is created sucessfully
    } catch (error) {
        res.status(400).json({message : error.message});
        // 400 mean sth bad happend

    }
})
//Updating One
router.patch('/:id',getSubscriber,async (req,res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;        
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;        
    }
    
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.status(200).json({message :"Recored Updated"});
      
  } catch (error) {
      return res.status(500).json({message :error.message});
  }
})
//Deleting One
router.delete('/:id',getSubscriber,async (req,res) => {
    try {
          await res.subscriber.remove();
          res.status(200).json({message :"Recored Deleted"});
        
    } catch (error) {
        return res.status(500).json({message :error.message});
    }

})

async function getSubscriber(req,res,next){
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if (subscriber == null) {
            return res.status(404).json({message:'Cannot find subscriber'});
        }
    } catch (error) {
        return res.status(500).json({message :error.message});
    }

    res.subscriber = subscriber;
    next()
}

module.exports=router;