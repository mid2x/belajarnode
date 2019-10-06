const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done)=> {
            //below are one of example of async process
            User.findOne({googleId: profile.id}).then((existingUser)=>{ //this is a smooth promise ES2017
                if (existingUser){
                    done(null,existingUser);
                } else {
                    new User({googleId: profile.id})
                    .save() //this is also async, we use promise to handle (.then())
                    .then(user => done(null, user));

                }
            });
            
        }
    )
);