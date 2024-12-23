const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({
    name:{type:String,required:[true,"name is required"]},
    building_id : {type:mongoose.Schema.Types.ObjectId,required:[true,"building id is required"]},
    floor:{type:Number},
    tenantsLimit :{type:Number, required:[true,"tenantsLimit is required"]},
    tenantsPresent : {type:Number, required:[true,"tenants present is required"],default:0}

})

const Rooms = mongoose.model("Rooms",roomsSchema)

module.exports = Rooms