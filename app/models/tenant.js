const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
    name:{type:String, required:[true,"tenant name required"]},
    room_id : {type:mongoose.Schema.Types.ObjectId,required:[true,"room id for tenant required"]},
    address:{type:String,required:[true,"address is required"]},
    pan:{type:String,required:[true,"pan number is required"]},
    adhar:{type:Number, required:[true,"adhar is required"]}
})

const Tenants = mongoose.model("Tenants",tenantSchema);

module.exports = Tenants