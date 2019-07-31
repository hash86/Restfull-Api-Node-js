const Mongoose =require( "mongoose");

const subscriberSchema = new Mongoose.Schema ({
    name : {
        type : String,
        required: true
    },
    subscribedToChannel : {
        type : String,
        required: true
    },
    subscriberDate : {
        type : Date,
        default: Date.now,  
        required: true
    },
});

 module.exports = Mongoose.model('Subscriber',subscriberSchema);