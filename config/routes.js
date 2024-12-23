const express = require('express');
const routes = express.Router();
const buildingCtrl = require("../app/controllers/buildingCtrl");
const roomsCtrl = require("../app/controllers/roomsCtrl")
const tenantsCtrl = require("../app/controllers/tenantsCtrl")

//builing
routes.get("/api/building",buildingCtrl.list);
routes.post("/api/building",buildingCtrl.create);
routes.get("/api/building/:id",buildingCtrl.show)
routes.put("/api/building/:id",buildingCtrl.update)
routes.delete("/api/building/:id",buildingCtrl.remove);

//rooms
routes.post("/api/rooms",roomsCtrl.create);
routes.get("/api/rooms",roomsCtrl.list);
routes.get("/api/rooms/:id",roomsCtrl.show);
routes.put("/api/rooms/:id",roomsCtrl.update);
routes.delete("/api/rooms/:id",roomsCtrl.remove)

//tenants
routes.post("/api/tenants",tenantsCtrl.create);
routes.get("/api/tenants",tenantsCtrl.list)
routes.get("/api/tenants/:id",tenantsCtrl.show)
routes.put("/api/tenants/:id",tenantsCtrl.update)
routes.delete("/api/tenants/:id",tenantsCtrl.delete)

module.exports = routes;