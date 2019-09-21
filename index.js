const express = require('express');

//run pasport file
require('./services/pasport');

const app = express();

//output from modules (in file authRoutes) exported as a function
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);