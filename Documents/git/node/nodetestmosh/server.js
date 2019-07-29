require('dotenv').config()

const mongoose = require("mongoose")
const express = require ('express')
const app = express()

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.error('connected to Database'))

// create route to accept json
app.use(express.json());

const subscribersRouter = require ('./routes/subscribers');
app.use('/subscribers',subscribersRouter);

app.listen(2000,() => console.log('server Started!'))
