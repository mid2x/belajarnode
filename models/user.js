const mongoose = require('mongoose');
//destructuring const Schema = mongoose.Schema; we can use below
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);