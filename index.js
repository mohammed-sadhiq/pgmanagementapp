const express = require('express');
const port = 3075;
const app = express();
const configureDb = require("../pgmanagementapp/config/database");
const routes = require('./config/routes');


configureDb();
app.use(express.json());
app.use(routes)

app.listen(port,()=>{
    console.log("app running in port",port)
})