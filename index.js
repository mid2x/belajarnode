const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const pasport = require('passport');
const keys = require('./config/keys');

require('./models/user');
//run pasport file
require('./services/pasport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);
app.use(pasport.initialize());
app.use(pasport.session());

//output from modules (in file authRoutes) exported as a function
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);