// Cleans and Seeds the database
let data = require ( "./data" );
const comments = data.comments;
const favorites = data.favorites;
const ratings = data.ratings;
const recipes = data.recipes;
const users = data.users;
const bcrypt = require('bcrypt');
const saltRounds = 16;
const mongoCollections = require("./config/mongoCollections");
const closeDB = mongoCollections.end;

async function main() {

    //Clear DB
    console.log("Emptying all Collections")
    await users.empty();
    await recipes.empty();
    await ratings.empty();
    await favorites.empty();
    await comments.empty();

    //Create Users
    let user = [];
    user.push({username:"Bobby", password:"Coolio", email:"bobby@dank.me", description:"I'm a cool dude I guess"});
    user.push({username:"DankMeister", password:"memelord278", email:"dank@meist.er", description:"Memes are the greatest of all of God's creations. Hail Memes."});
    user.push({username:"supergenius", password:"myintelligenceisbeyondhumanunderstanding", email:"patrickstar@bikinibottom.net", description:"The inner machinations of my mind are an engima"});
    user.push({username:"thedarklord", password:"Iwillhavetheonering", email:"sauron@kitty.us", description:"The Powers of the Ring are MINE for the taking - these recipes will be the implements of my revenge!"});

    console.log("Pushing Users to DB");
    let us = [];
    for ( let i = 0; i < user.length; i++ ) {
        let user2 = user[i];
        let hash = bcrypt.hashSync(user2.password,saltRounds);
        let data = await users.createUser(hash, user2.username, user2.email, user2.description);
        us.push(data);
    }

    //Create Recipes
    let recipe = [];
    recipe.push({name:"Ketchup Fudge", price: 0.67, cookTime: 25, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[0]._id});
    recipe.push({name:"Turger", price: 6, cookTime: 70, appliances: ["Oven", "Grill"], popularity: 100, ingredients:["Turkey", "Ground Beef", "Cheese", "Tomato", "Lettuce", "BBQ Sauce"], tags:["Burger","Fun", "Independence Day"],steps: ["Cook Turkey", "Cook Beef", "Stack in Buns", "Burger is Made!"], userid: us[1]._id});
    recipe.push({name:"Sacriligious Goo", price: 15, cookTime: 240, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[2]._id});
    recipe.push({name:"The Taste of Asgard", price: 2.54, cookTime: 30, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[3]._id});
    recipe.push({name:"Heavy Sauce", price: 2546, cookTime: 7, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[0]._id});
    recipe.push({name:"Bacon Turducken", price: 5.46, cookTime: 200, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[1]._id});
    recipe.push({name:"Chicken Fried Bacon", price: 8.6, cookTime: 50, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[2]._id});
    recipe.push({name:"Bacon Fried Chicken", price: 8.2, cookTime: 40, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[3]._id});
    recipe.push({name:"Fried Bacon Chicken", price: 8.6, cookTime: 50, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[0]._id});
    recipe.push({name:"Fried Chicken Bacon", price: 8.2, cookTime: 40, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[1]._id});
    recipe.push({name:"Foolish Mortal Juice", price: 1234, cookTime: 42048000, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[2]._id});
    recipe.push({name:"The One Ring", price: 1337.34, cookTime: 180, appliances: ["Mount Doom","Forge"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[3]._id});
    recipe.push({name:"Sauteed Hobbit", price: 526.12, cookTime: 267840, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[0]._id});
    recipe.push({name:"The Angry Trooper", price: 21.87, cookTime: 20, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[1]._id});
    recipe.push({name:"Nostalgia in a Bottle", price: 8.77, cookTime: 2628000, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[2]._id});
    recipe.push({name:"Pie That I Like", price: 31.41, cookTime: 592, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[3]._id});
    recipe.push({name:"Grandma Perry's Old Fashioned Vodka", price: 0.25, cookTime: 120, appliances: ["Still", "Tubing", "Fire Pit"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[0]._id});
    recipe.push({name:"Unusual Chicken Sauce", price: 12.23, cookTime: 30, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[1]._id});
    recipe.push({name:"Sour Dwarf Ale", price: 2.56, cookTime: 128, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[2]._id});
    recipe.push({name:"The Empire Supreme", price: 24.56, cookTime: 54, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[3]._id});
    
    console.log("Pushing Recipes to DB");
    let rs = [];
    for ( let i = 0; i < recipe.length; i++ ) {
        let r = recipe[i];
        let data = await recipes.createRecipe(r.userid, r.name, r.price, r.cookTime, r.appliances, r.popularity, r.tags, r.ingredients, r.steps);
        rs.push(data);
    }

    //Create Ratings
    let rating = [];
    rating.push({userID: us[0]._id, recipeId: rs[0]._id, rating: 10});
    rating.push({userID: us[0]._id, recipeId: rs[1]._id, rating: 9});
    rating.push({userID: us[0]._id, recipeId: rs[2]._id, rating: 8});
    rating.push({userID: us[0]._id, recipeId: rs[3]._id, rating: 7});
    rating.push({userID: us[0]._id, recipeId: rs[4]._id, rating: 6});
    rating.push({userID: us[1]._id, recipeId: rs[5]._id, rating: 10});
    rating.push({userID: us[1]._id, recipeId: rs[6]._id, rating: 9});
    rating.push({userID: us[1]._id, recipeId: rs[7]._id, rating: 8});
    rating.push({userID: us[1]._id, recipeId: rs[8]._id, rating: 7});
    rating.push({userID: us[1]._id, recipeId: rs[9]._id, rating: 6});
    rating.push({userID: us[3]._id, recipeId: rs[10]._id, rating: 10});
    rating.push({userID: us[3]._id, recipeId: rs[11]._id, rating: 9});
    rating.push({userID: us[3]._id, recipeId: rs[12]._id, rating: 8});
    rating.push({userID: us[3]._id, recipeId: rs[13]._id, rating: 7});
    rating.push({userID: us[3]._id, recipeId: rs[14]._id, rating: 6});
    rating.push({userID: us[4]._id, recipeId: rs[15]._id, rating: 10});
    rating.push({userID: us[4]._id, recipeId: rs[16]._id, rating: 9});
    rating.push({userID: us[4]._id, recipeId: rs[17]._id, rating: 8});
    rating.push({userID: us[4]._id, recipeId: rs[18]._id, rating: 7});
    rating.push({userID: us[4]._id, recipeId: rs[19]._id, rating: 6});
    
    console.log("Pushing Ratings to DB");
    let rts = [];
    for ( let i = 0; i < rating.length; i++ ) {
        let r = rating[i];
        let data = await ratings.createRating ( r.userID, r.recipeId, r.rating );
        rts.push(data);
    }

    //Create Favorites

    //Create Comments

    closeDB();
}

main();