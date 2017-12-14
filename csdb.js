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
    user.push({username:"Bobby", password:"Coolio", email:"bobby@dank.com", description:"I'm a cool dude I guess"});
    user.push({username:"DankMeister", password:"memelord278", email:"dank@meist.com", description:"Memes are the greatest of all of God's creations. Hail Memes."});
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
    recipe.push({name:"Ketchup Fudge", description: "An abomination concocted by the vilest of human minds.", price: 0.67, cookTime: 25, appliances: ["Blender", "Microwave"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[0]._id, imgpath: "./image/ketfudge.jpg"});
    recipe.push({name:"Turger", description: "A burger that is half burger, half turkey.", price: 6, cookTime: 70, appliances: ["Oven", "Grill"], popularity: 100, ingredients:["Turkey", "Ground Beef", "Cheese", "Tomato", "Lettuce", "BBQ Sauce"], tags:["Burger","Fun", "Independence Day"],steps: ["Cook Turkey", "Cook Beef", "Stack in Buns", "Burger is Made!"], userid: us[1]._id, imgpath: "./image/turger.jpeg"});
    recipe.push({name:"Sacriligious Goo", description: "Goo that would never be allowed in the Vatican.", price: 15, cookTime: 240, appliances: ["Blender", "Microwave"], popularity: 16, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[2]._id, imgpath: "./image/goo.png"});
    recipe.push({name:"The Taste of Asgard", description: "A dish that brings to mind the longful reminitions of Asgard.", price: 2.54, cookTime: 30, appliances: ["Blender", "Microwave"], popularity: -10, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[3]._id, imgpath: "./image/asgard.png"});
    recipe.push({name:"Heavy Sauce", description: "A unique sauce with a density higher than lead.", price: 2546, cookTime: 7, appliances: ["Blender", "Microwave"], popularity: 5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[0]._id, imgpath: "./image/heavysauce.jpg"});
    recipe.push({name:"Bacon Turducken", description: "A turkey, stuffed with duck, stuffed with chicken, covered with bacon.", price: 5.46, cookTime: 200, appliances: ["Blender", "Microwave"], popularity: 12, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[1]._id, imgpath: "./image/baconturducken.jpg"});
    recipe.push({name:"Chicken Fried Bacon", description: "Bacon fried like chicken.", price: 8.6, cookTime: 50, appliances: ["Blender", "Microwave"], popularity: 25, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[2]._id, imgpath: "./image/chickenfriedbacon.jpg"});
    recipe.push({name:"Bacon Fried Chicken", description: "Chicken fried like bacon.", price: 8.2, cookTime: 40, appliances: ["Blender", "Microwave"], popularity: 30, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[3]._id, imgpath: "./image/baconfriedchicken.jpg"});
    recipe.push({name:"Fried Bacon Chicken", description: "Bacon covered chicken that's been fried.", price: 8.6, cookTime: 50, appliances: ["Blender", "Microwave"], popularity: 24, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[0]._id, imgpath: "./image/friedbaconchicken.jpg"});
    recipe.push({name:"Fried Chicken Bacon", description: "Chicken covered bacon that's been fried.", price: 8.2, cookTime: 40, appliances: ["Blender", "Microwave"], popularity: 12, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[1]._id, imgpath: "./image/chickenfriedbacon.jpg"});
    recipe.push({name:"Foolish Mortal Juice", description: "A juice frequently consumed by foolish mortals.", price: 1234, cookTime: 42048000, appliances: ["Blender", "Microwave"], popularity: 12, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[2]._id, imgpath: "./image/foolishmortal.jpg"});
    recipe.push({name:"The One Ring", description: "A ring that grants one the nebulous power of being invisible kinda.", price: 1337.34, cookTime: 180, appliances: ["Mount Doom","Forge"], popularity: 11, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[3]._id, imgpath: "./image/theonering.png"});
    recipe.push({name:"Sauteed Hobbit", description: "A hobbit that is sauteeing various foods.", price: 526.12, cookTime: 267840, appliances: ["Blender", "Microwave"], popularity: 3, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[0]._id, imgpath: "./image/sauteedhobbit.jpg"});
    recipe.push({name:"The Angry Trooper", description: "A trooper that is angry, and who made a cool dish.", price: 21.87, cookTime: 20, appliances: ["Blender", "Microwave"], popularity: 546, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[1]._id, imgpath: "./image/angrytrooper.jpg"});
    recipe.push({name:"Nostalgia in a Bottle", description: "A drink that brings to mind happiness and old memories, with just a tinge of regret.", price: 8.77, cookTime: 2628000, appliances: ["Blender", "Microwave"], popularity: 125, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[2]._id, imgpath: "./image/nostalgia.jpg"});
    recipe.push({name:"Pie That I Like", description: "It's a pie that I like.", price: 31.41, cookTime: 592, appliances: ["Blender", "Microwave"], popularity: -20, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[3]._id, imgpath: "./image/pie.jpg"});
    recipe.push({name:"Grandma Perry's Old Fashioned Vodka", description: "A vodka my grandma used to make.", price: 0.25, cookTime: 120, appliances: ["Still", "Tubing", "Fire Pit"], popularity: -5, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[0]._id, imgpath: "./image/vodka.jpg"});
    recipe.push({name:"Unusual Chicken Sauce", description: "A sauce that is quite unusual, typically served over chicken.", price: 12.23, cookTime: 30, appliances: ["Blender", "Microwave"], popularity: 56, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[1]._id, imgpath: "./image/unusualsauce.jpg"});
    recipe.push({name:"Sour Dwarf Ale", description: "An ale made out of sour dwarf cherries.", price: 2.56, cookTime: 128, appliances: ["Blender", "Microwave"], popularity: 10, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[2]._id, imgpath: "./image/sourdwarf.jpg"});
    recipe.push({name:"The Empire Supreme", description: "A meal that makes one want to go listen to Imperial March.", price: 24.56, cookTime: 54, appliances: ["Blender", "Microwave"], popularity: 100, ingredients:["White Chocolate", "Ketchup", "Maple Syrup"], tags:["What","Unnatural"],steps: ["Lose all sense of self", "Make this"], userid: us[3]._id, imgpath: "./image/empire.jpg"});
    
    console.log("Pushing Recipes to DB");
    let rs = [];
    for ( let i = 0; i < recipe.length; i++ ) {
        let r = recipe[i];
        let data = await recipes.createRecipe(r.userid, r.name, r.description, r.price, r.cookTime, r.appliances, r.popularity, r.tags, r.ingredients, r.steps, r.imgpath);
        rs.push(data);
    }

    //Create Ratings
    let rating = [];
    rating.push({userID: us[0]._id, recipeId: rs[0]._id, rating: 5});
    rating.push({userID: us[0]._id, recipeId: rs[1]._id, rating: 5});
    rating.push({userID: us[0]._id, recipeId: rs[2]._id, rating: 5});
    rating.push({userID: us[0]._id, recipeId: rs[3]._id, rating: 5});
    rating.push({userID: us[0]._id, recipeId: rs[4]._id, rating: 5});
    rating.push({userID: us[1]._id, recipeId: rs[5]._id, rating: 5});
    rating.push({userID: us[1]._id, recipeId: rs[6]._id, rating: 5});
    rating.push({userID: us[1]._id, recipeId: rs[7]._id, rating: 5});
    rating.push({userID: us[1]._id, recipeId: rs[8]._id, rating: 5});
    rating.push({userID: us[1]._id, recipeId: rs[9]._id, rating: 5});
    rating.push({userID: us[2]._id, recipeId: rs[10]._id, rating: 5});
    rating.push({userID: us[2]._id, recipeId: rs[11]._id, rating: 5});
    rating.push({userID: us[2]._id, recipeId: rs[12]._id, rating: 5});
    rating.push({userID: us[2]._id, recipeId: rs[13]._id, rating: 5});
    rating.push({userID: us[2]._id, recipeId: rs[14]._id, rating: 5});
    rating.push({userID: us[3]._id, recipeId: rs[15]._id, rating: 5});
    rating.push({userID: us[3]._id, recipeId: rs[16]._id, rating: 2});
    rating.push({userID: us[3]._id, recipeId: rs[17]._id, rating: 2});
    rating.push({userID: us[3]._id, recipeId: rs[18]._id, rating: 2});
    rating.push({userID: us[3]._id, recipeId: rs[19]._id, rating: 2});
    rating.push({userID: us[3]._id, recipeId: rs[0]._id, rating: 3});
    rating.push({userID: us[3]._id, recipeId: rs[0]._id, rating: 3});
    rating.push({userID: us[3]._id, recipeId: rs[0]._id, rating: 3});
    
    console.log("Pushing Ratings to DB");
    let rts = [];
    for ( let i = 0; i < rating.length; i++ ) {
        let r = rating[i];
        let data = await ratings.createRating ( r.userID, r.recipeId, r.rating );
        rts.push(data);
    }

    //Create Favorites
    let favorite = [];
    favorite.push ( { userID: us[0]._id, recipeId: rs[0]._id } );
    favorite.push ( { userID: us[0]._id, recipeId: rs[2]._id } );
    favorite.push ( { userID: us[0]._id, recipeId: rs[4]._id } );
    favorite.push ( { userID: us[1]._id, recipeId: rs[6]._id } );
    favorite.push ( { userID: us[1]._id, recipeId: rs[8]._id } );
    favorite.push ( { userID: us[1]._id, recipeId: rs[10]._id } );
    favorite.push ( { userID: us[0]._id, recipeId: rs[12]._id } );
    favorite.push ( { userID: us[0]._id, recipeId: rs[14]._id } );
    favorite.push ( { userID: us[0]._id, recipeId: rs[16]._id } );
    favorite.push ( { userID: us[1]._id, recipeId: rs[18]._id } );
    favorite.push ( { userID: us[1]._id, recipeId: rs[3]._id } );
    favorite.push ( { userID: us[1]._id, recipeId: rs[15]._id } );
    
    console.log ( "Pushing Favorites to DB" );
    let fs = [];
    while ( f = favorite.pop() ) {
        let data = await favorites.createFavorite ( f.userID, f.recipeId );
        fs.push ( data );
    }

    //Create Comments
    let comment = [];
    comment.push ( { userId: us[0]._id, recipeId: rs[0]._id, comment: "I love this!"});
    comment.push ( { userId: us[1]._id, recipeId: rs[1]._id, comment: "Cool!"});
    comment.push ( { userId: us[2]._id, recipeId: rs[2]._id, comment: "This sucks!"});
    comment.push ( { userId: us[3]._id, recipeId: rs[3]._id, comment: "I recommend adding butter!"});
    comment.push ( { userId: us[0]._id, recipeId: rs[4]._id, comment: "How do I make this using a toaster?"});
    comment.push ( { userId: us[1]._id, recipeId: rs[5]._id, comment: "I don't have any of the ingredients. What should I do?"});
    comment.push ( { userId: us[2]._id, recipeId: rs[6]._id, comment: "I don't know about this."});
    comment.push ( { userId: us[3]._id, recipeId: rs[7]._id, comment: "Meh."});
    comment.push ( { userId: us[0]._id, recipeId: rs[8]._id, comment: "BOO!"});
    comment.push ( { userId: us[1]._id, recipeId: rs[9]._id, comment: "This was way 3spoopy5me."});
    comment.push ( { userId: us[2]._id, recipeId: rs[10]._id, comment: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"});
    comment.push ( { userId: us[3]._id, recipeId: rs[11]._id, comment: "People shouldn't eat this."});
    comment.push ( { userId: us[0]._id, recipeId: rs[12]._id, comment: "My dog loves this!"});
    comment.push ( { userId: us[1]._id, recipeId: rs[13]._id, comment: "What?!?!?"});
    comment.push ( { userId: us[2]._id, recipeId: rs[14]._id, comment: "People are strange. Who came up with this?"});
    comment.push ( { userId: us[3]._id, recipeId: rs[15]._id, comment: "Use More Butter Next time"});
    comment.push ( { userId: us[0]._id, recipeId: rs[16]._id, comment: "All your soul are belong to us."});
    comment.push ( { userId: us[1]._id, recipeId: rs[17]._id, comment: "This is fantastic when eaten alongside the cow level."});
    comment.push ( { userId: us[2]._id, recipeId: rs[18]._id, comment: "I'm not really a fan"});
    comment.push ( { userId: us[3]._id, recipeId: rs[19]._id, comment: "Fantastic!"});
    comment.push ( { userId: us[1]._id, recipeId: rs[1]._id, comment: "I've seen more appetising cow patties."});
    comment.push ( { userId: us[2]._id, recipeId: rs[2]._id, comment: "Perfect Meal. 5/7"});
    comment.push ( { userId: us[3]._id, recipeId: rs[3]._id, comment: "But what are we supposed to use here? I don't understand."});
    comment.push ( { userId: us[0]._id, recipeId: rs[4]._id, comment: "Can I use a cat instead"});

    console.log ( "Pushing Comments to DB" );
    let cs = [];
    while ( c = comment.pop() ) {
        let data = await comments.createComment ( c.userId, c.recipeId, c.comment );
        cs.push ( data );
    }

    closeDB();
}

main().catch(function (e) {
    console.error(e);
});