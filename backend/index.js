const express = require('express');
const seedRoutes = require("./API/workstationroute");
const dotenv = require('dotenv');
const cors =require('cors')
dotenv.config({ path: './config/.env' });

const app = express();
const Port = process.env.PORT || 8000;
require('./Database/Db');
app.use(cors());
app.use(express.json());
app.use('/v1/api',seedRoutes);

app.listen(Port, () => {
    console.log(`listening at Port no ${Port}`);
});