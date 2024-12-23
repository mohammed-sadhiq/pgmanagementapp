const Rooms = require('../models/rooms');
const roomsCtrl = {};

roomsCtrl.create = (req,res)=>{
    const body = req.body;
    const rooms = new Rooms(body)
    rooms.save().then(room=>{
        res.send(room)
    }).catch((err)=>{
        res.status(500).send(err)
    })
}

roomsCtrl.list=(req,res)=>{
    Rooms.find().then(rooms=>{
        res.send(rooms)
    }).catch((err)=>{
        res.status(500).send(err)
    })
}

roomsCtrl.show=(req,res)=>{
    const id = req.params.id;
    Rooms.findById(id).then(room=>{
        res.send(room)
    }).catch(err=>{
        res.status(500).send(err)
        })
}


roomsCtrl.update = (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    Rooms.findByIdAndUpdate(id,body).then((updatedroom)=>{
        res.send(updatedroom)
    }).catch((err)=>{
        res.status(500).send(err)
    })
}

roomsCtrl.remove = (req,res)=>{
    const id = req.params.id;
    Rooms.findByIdAndDelete(id).then((removedRoom)=>{
        res.send(removedRoom)
    }).catch((err)=>{
        res.status(500).send(err)
    })
}

module.exports = roomsCtrl