const mongoose = require('mongoose');


const configureDb = ()=>{
    mongoose.connect('mongodb://localhost:27017/pgmanagement').then(()=>{
        console.log("connected to db")
    }).catch(err=>{
        console.log("error in connecting to db",err)
    })
}

module.exports = configureDb;