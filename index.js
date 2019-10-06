const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/user');
//run pasport file
require('./services/pasport');


mongoose.connect(keys.mongoURI);

const app = express();

//output from modules (in file authRoutes) exported as a function
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);