const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://rajmohannileswar:rajmohannileswar@cluster0.lqyeiqj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
    .then(() => {
        console.log('db connected');
    })
    .catch((e) => {
        console.log('db error',e);

    });

module.exports = mongoose;