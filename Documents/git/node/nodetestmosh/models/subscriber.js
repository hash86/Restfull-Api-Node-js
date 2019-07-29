const Mongoose =require( "mongoose");

const subcriberSchema = new Mongoose.Schema ({
    name : {
        type : String,
        required: true
    },
    subscribedToChannel : {
        type : String,
        required: true
    },
    subsscriberDate : {
        type : Date,
        default: Date.now,  
        required: true
    },
});

 module.exports = Mongoose.model('Subscriber',subcriberSchema);