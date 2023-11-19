const express = require('express');
const app = express();
const mongoose=require('./database/mongoose')

// app.listen(3000,function(){console.log('Server up and running');})


app.listen(3000,()=>{console.log('Server up and running at 3000');})