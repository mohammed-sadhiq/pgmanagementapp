const mongoose = require("mongoose");

const buildingSchema = {
   name:{type:String,required:[true,"name is required"]},
   address:{type:String,required:[true,"address is required"]},
   noofFloors:{type:Number},
   noOfRooms:{type:Number,required:[true, "no of rooms is mandatory"]}
}

const building = mongoose.model("building",buildingSchema);

module.exports = building;