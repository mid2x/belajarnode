const passport = require('passport');

//linking app object here
module.exports = (app) => {

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile','email']
})  
);
app.get('/auth/google/callback', passport.authenticate('google'))
};