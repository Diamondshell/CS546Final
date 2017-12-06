// Cleans and Seeds the database
let data = require ( "./data" );
const comments = data.comments;
const favorites = data.favorites;
const ratings = data.ratings;
const recipes = data.recipes;
const users = data.users;
const bcrypt = require('bcrypt');

async function main() {

    let users = [];
    user.push({username:"Bobby", password:"Coolio", email:"bobby@dank.me", description:"I'm a cool dude I guess"});
    user.push({username:"DankMeister", password:"memelord278", email:"dank@meist.er", description:"Memes are the greatest of all of God's creations. Hail Memes."});
    user.push({username:"supergenius", password:"myintelligenceisbeyondhumanunderstanding", email:"patrickstar@bottom.net", description:"The inner machinations of my mind are an engima"});
    user.push({username:"thedarklord", password:"Iwillhavetheonering", email:"sauron@kitty.us", description:"The Powers of the Ring are MINE for the taking - these recipes will be the implements of my revenge!"});

    let us = [];
    user.forEach(function(user) {
        //bcrypt.hash(user.password, saltRounds, function(err, hash) {
            //us.push(await users.createUser(hash, user.username, user.email, user.description));
        //});
    });
    console.log(us);
}

main();