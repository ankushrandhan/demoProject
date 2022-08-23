import express from 'express'
import json from 'body-parser'

require('dotenv').config();
import './utils/db/postgresql';

import { apiRoutes } from './routes/routes'
const app=express()

app.use(json());

app.use(apiRoutes);


const PORT = process.env.PORT || 2890;
app.listen(PORT,() => {
   console.log(`Server is listening on port ${PORT}`)
})