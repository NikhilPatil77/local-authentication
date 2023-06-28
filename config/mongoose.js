const mongoose =require('mongoose');
//CONNECTING TO SERVER
require('dotenv').config();
mongoose.set('strictQuery', false);

exports.connectMongoose =() =>{
    mongoose.connect(process.env.DATABASE)
    .then(()=>{
        console.log(`Connected Succesfully To Database.`);
    })
    .catch((err)=>{
        console.log(`error connecting to database` , err);
    })
}
