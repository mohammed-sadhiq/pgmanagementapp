const building  = require('../models/building');
const buildingCtrl = {}

buildingCtrl.list = (req,res)=>{
    building.find().then((buildings)=>{
        res.send(buildings)
    }).catch(err=>{
        res.status(500).send(err)
    })
}

buildingCtrl.create = (req,res)=>{
    const body = req.body;
    const new_building = new building(body)
    new_building.save().then((savedBuilding)=>{
        res.send(savedBuilding)
    }).catch((err)=>{
        res.status(500).send(err)
    })
}

buildingCtrl.show = (req,res)=>{
    const id = req.params.id;
    building.findById(id).then((building)=>{
        res.send(building)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}

buildingCtrl.update = (req,res)=>{
    const id = req.params.id;
    const body = req.body;
    building.findByIdAndUpdate(id,body,{new:true}).then((updatedBuilding)=>{
        res.send(updatedBuilding)
    }).catch(err=>{
        res.status(500).send(err)
    })
}

buildingCtrl.remove = (req,res)=>{
    const id = req.params.id;
    building.findByIdAndDelete(id).then((removedBuilding)=>{
        res.send(removedBuilding)
    }).catch((err)=>{
        res.status(500).send(err)
    })
}


module.exports = buildingCtrl
