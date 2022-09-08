import express from 'express'
import fileUpload from 'express-fileupload'
import bodyParser from 'body-parser';
require('dotenv').config();

import {apiRoutes} from './routes/routes'
const app=express()

app.use(fileUpload({
  
 }));

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err:any) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(apiRoutes);
const PORT = process.env.PORT || 2890;
app.listen(PORT,() => {
   console.log(`Server is listening on port ${PORT}`)
})