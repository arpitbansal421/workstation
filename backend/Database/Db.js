const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.DB_URL);
    console.log('Mongoose connection established successfully')
    
} catch (error) {
    console.log('Some Error while DB connection')
    
}