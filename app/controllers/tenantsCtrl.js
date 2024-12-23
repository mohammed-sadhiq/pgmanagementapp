const Tenants = require("../models/tenant");
const tenantsCtrl = {};

tenantsCtrl.create = (req,res)=>{
    const tenant = new Tenants(req.body);
    tenant.save().then((newTenant)=>{
        res.send(newTenant)
    }).catch((err)=>{
        res.status(500).send(err)
    })
}


tenantsCtrl.list = (req,res)=>{
    Tenants.find().then((tenant)=>{
        res.send(tenant)
    }).catch(err=>{
        res.status(500).send(err)
    })
}


tenantsCtrl.show = (req,res)=>{
    const id = req.params.id;
    Tenants.findById(id).then((tenant)=>{
        res.send(tenant)
    }).catch(err=>{
        res.status(500).send(err)
    })
}


tenantsCtrl.update = (req,res)=>{
    const id = req.params.id;
    const body = req.body;
    Tenants.findByIdAndUpdate(id,body,{new:true}).then((updatedTenant)=>{
        res.send(updatedTenant)
    }).catch((err)=>{
        res.status(500).send(err)
    })
}

tenantsCtrl.delete=(req,res)=>{
    const id = req.params.id;
    Tenants.findByIdAndDelete(id).then((removedRecord)=>{
        res.send(removedRecord)
    }).catch((err)=>{
        res.status(500).send(err)
    })
}

module.exports = tenantsCtrl;