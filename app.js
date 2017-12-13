/*
 *
 *
 *
 *
 *
 * app.js
 *
 **/

//import packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connection = require(__dirname + '/config/mongoConnection.js');
const index = require(__dirname + '/data/index.js');
const uuid = require('uuid4');
const bcrypt = require('bcrypt');

//create express
let app = express();

//add body and cookie parser to app
app.use(cookieParser());
app.use(bodyParser.json());

//provide static files to express
app.use('/static', express.static(__dirname + '/static'));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//Middleware
// add authentication here
app.get('/loginstatus', async function(req, res) {
    if (req.cookies.validated) {
        res.json({validated:true, username:req.cookies.validated});
    }else {
        res.json({validated:false});
    }
});

app.post('/login', async function(req, res) {
    console.log(req.body);
    //res.json({data:"FUCK"});
    //return; 
    username = req.body.username;
    password = req.body.password;
    userData = await users.getUserById(username);
    console.log(userData);

    var validated;

    if (userData){
        validated = await bcrypt.compare(password, userData.password).then(function(res) {
            return res;
        });
    }else {
        validated = false;
    }
    console.log(validated);

    if (validated) {
        //If valid, create a validated cookie that holds the username also for use in displaying data later
        res.cookie('validated', userData._id, {path: '/', maxAge: 1000 * 60 * 5 /* cookies expires in 5 minutes after login */, httpOnly: true});
        //Send something back when validated
        res.json({data:true});
    }
    else {
        //Send something back when the user isn't validated
        res.json({data:false});
    }
});

app.post('/logout', async function(req, res) {
    res.cookie('validated', '', {path: '/', maxAge: 1000 * 60 * 5, httpOnly:true});
    res.clearCookie('validated', req.cookies.validated, {path: '/', httpOnly: true});
    res.json({"status":"ok"});
});

app.get('/userprofile', async function (req, res) {
    if (req.cookies.validated) {
        res.json({validated:true, username:req.cookies.validated});
    }else {
        res.redirect('/forbidden');
    }
});

app.get('/login', async function(req, res) {
    res.redirect('/forbidden');
});


//Server Routes 

//Specific Routes

app.get('*', function(req, res) {
    //do stuff
    console.log("Get Path: " + req.path);
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.post('*', function(req, res) {
    console.log("Post Path: " + req.path);
    //res.json({data:"TADA"});
});


//Users Database Routes

//GET user/:id route, responds with user information for user with specified userId
app.get('/user/:userId', async function(req, res) {
    //try to get user info
    try {
        let userInfo = await index.users.getUserById(req.params.userId);
        
        //send status and response 
        res.status(200);
        res.send(userInfo);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Can't retrieve information for user with id: " + req.params.userId});
    }
});

//POST user route, creates a user with the supplied data in the request body, returns user info
app.post('/user', async function(req, res) {
    //check and get parameters
    let password = "";
    let username = "";
    let email = "";
    let description = "";
    
    //check for password
    if(req.body.hasOwnProperty("password")) {
        //check if password is a string
        if(typeof req.body.password == 'string') {
            password = req.body.password;
        }else {
            res.status(400).json({error: "Bad Request: requires password to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a password"});
        return;
    }
    
    //check for username
    if(req.body.hasOwnProperty("username")) {
        //check if username is a string
        if(typeof req.body.username == 'string') {
            username = req.body.username;
        }else {
            res.status(400).json({error: "Bad Request: requires username to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a username"});
        return;
    }
    
    //check for email 
    if(req.body.hasOwnProperty("email")) {
        //check if email is a string
        if(typeof req.body.email == 'string') {
            email = req.body.email;
        }else {
            res.status(400).json({error: "Bad Request: requires email to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a email"});
        return;
    }
    
    //check for description
    if(req.body.hasOwnProperty("description")) {
        //check if description is a string
        if(typeof req.body.description == 'string') {
            description = req.body.description;
        }else {
            res.status(400).json({error: "Bad Request: requires description to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a description"});
        return;
    }
    
    //try to add user to database
    try {
        let newUser = await index.users.createUser(password, username, email, description);
        
        //send status and response
        res.status(200);
        res.send(newUser);
    }catch(error) {
        res.status(500).json({error: "Failed to add user with username: " + username});
    }
});

//PUT user/:userId route, updates the specified user with only the supplied changes, returns updated user information 
app.put('/user/:userId', async function(req, res) {
    //check and get parameters
    let password = "";
    let username = "";
    let email = "";
    let description = "";
    
    //check for password
    if(req.body.hasOwnProperty("password")) {
        //check if password is a string
        if(typeof req.body.password == 'string') {
            password = req.body.password;
        }else {
            res.status(400).json({error: "Bad Request: requires a password to be a string"});
            return;
        }
    }else {
        password = undefined;
    }
    
    //check for username
    if(req.body.hasOwnProperty("username")) {
        //check if username is a string
        if(typeof req.body.username == 'string') {
            username = req.body.username;
        }else {
            res.status(400).json({error: "Bad Request: requires username to be a string"});
            return;
        }
    }else {
        username = undefined;
    }
    
    //check for email 
    if(req.body.hasOwnProperty("email")) {
        //check if email is a string
        if(typeof req.body.email == 'string') {
            email = req.body.email;
        }else {
            res.status(400).json({error: "Bad Request: requires email to be a string"});
            return;
        }
    }else {
        email = undefined;
    }
    
    //check for description
    if(req.body.hasOwnProperty("description")) {
        //check if description is a string
        if(typeof req.body.description == 'string') {
            description = req.body.description;
        }else {
            res.status(400).json({error: "Bad Request: requires description to be a string"});
            return;
        }
    }else {
        description = undefined;
    }
    
    //try to update user info
    try {
        let userInfo = await index.users.updateUserById(req.params.userId, password, username, email, description);
        
        //send status and response
        res.status(200);
        res.send(userInfo);
    }catch(error) {
        res.status(500).json({error: "Failed to update user with id: " + req.params.userId});
    }
});

//DELETE user/:userId route, deletes the user with the specified id
app.delete('/user/:userId', async function(req, res) {
    //try to delete user
    try {
        let delUser = await index.users.removeUserById(req.params.userId);
        
        //send status and response
        let retVal = { "status": "User with id: " + req.params.userId + " deleted successfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Failed to delete user"});
    }
});



//Recipes Database Routes

//GET recipes route, responds with a list of all recipes in the form {_id: RECIPE_ID, title: RECIPE_TITLE}
app.get('/recipes', async function(req, res) {
    console.log("Attempting to get all recipes");
    //try to get recipes
    try {
        let getAll = await index.recipes.getAllRecipes();
      console.log(getAll);

        //send status and response
        res.status(200);
        res.send(getAll);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Can't retrieve recipes"});
    }
});

//get / route, does blank
app.get('*', function(req, res) {
    //do stuff
    console.log("Get Path: " + req.path);
    res.sendFile(path.join(__dirname, './dist/index.html'));
});


//GET recipe/:id route, responds with full content of specified recipe
app.get('/recipe/:recipeId', async function(req, res) {
    //try to get recipe with specified recipeId
    try{
        let getRecipe = await index.recipes.getRecipeById(req.params.recipeId);
        
        //send status and response
        res.status(200);
        res.send(getRecipe);
    }catch(error) {
        //handle error
        res.status(404).json({error: "Recipe not found with id: " + req.params.recipeId});
    }
});

//GET recipes/user/:id route, responds with recipes made by specififed user
app.get('/recipes/user/:userId', async function(req, res) {
    //try to get recipes with specified userId
    try{
        let getRecipe = await index.recipes.getRecipeByUserId(req.params.userId);
        
        //send status and response
        res.status(200);
        res.send(getRecipe);
    }catch(error) {
        //handle error
        res.status(404).json({error: "No recipes found for specified user"});
    }
});

//GET recipes/filter route, responds with recipes that match filter
app.get('/recipes/filter', async function(req, res) {
    //check and get filter
    let filter = {};
   
    if(req.body.hasOwnProperty("filter")) {
        //check if filter is an object
        if(typeof req.body.filter == 'object') {
            filter = req.body.filter;
        }else {
            res.status(400).json({error: "Bad Request: requires filter to be an object"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a filter"});
        return;
    }

    //try to get recipes with specified filter
    try{
        let getRecipe = await index.recipes.getRecipesByFilter(filter);
        
        //send status and response
        res.status(200);
        res.send(getRecipe);
    }catch(error) {
        //handle error
        res.status(404).json({error: "Recipe not found"});
    }
});

//GET recipes/byname/:name, responds with all recipes match9ing name along %name%
app.get('/recipes/byname/:name', async function(req, res) {
    //try to get recipes that match name
    try{
        let getRecipes = await index.recipes.getRecipesByLikeName(req.params.name);
        
        //send status and response
        res.status(200);
        res.send(getRecipes);
    }catch(error) {
        //handle error
        res.status(404).json({error: "No recipes found for search word: " + req.params.name});
    }
});

//GET recipes/topx/:X route, responds with top X recipes by popularity
app.get('/recipes/topx/:x', async function(req, res) {
    //try to get top x recipes by popularity
    try{
        let getRecipes = await index.recipes.topXTrendingRecipes(req.params.x);
        
        //send status and response
        res.status(200);
        res.send(getRecipes);
    }catch(error) {
        //handle error
        res.status(404).json({error: "Could not retrieve top " + req.params.x + " recipes"});
    }
});

//POST recipe route, creates a recipe with the supplied data in the request body, returns new recipe
app.post('/recipe', async function(req, res) {
    //check and get parameters
    let userid = "";
    let name = "";
    let price = 0;
    let cookTime = 0;
    let appliances = [];
    let popularity = 0;
    let tags = [];
    let ingredients = [];
    let steps = [];
    
    //check for userid
    if(req.body.hasOwnProperty("userid")) {
        //check if userid is a string
        if(typeof req.body.userid == 'string') {
            userid = req.body.userid;
        }else {
            res.status(400).json({error: "Bad Request: requires userid to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a tuserid"});
        return;
    }

    //check for name
    if(req.body.hasOwnProperty("name")) {
        //check if name is a string
        if(typeof req.body.name == 'string') {
            name = req.body.name;
        }else {
            res.status(400).json({error: "Bad Request: requires name to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a title"});
        return;
    }

    //check for price
    if(req.body.hasOwnProperty("price")) {
	//check if price is a number
	if(typeof req.body.price == 'number') {
	    price = req.body.price;
	}else {
	    res.status(400).json({error: "Bad Request: requires price to be a number"});
	    return;
	}
    }else {
	res.status(400).json({error: "Bad Request: requires a price"});
	return;
    }

    //check for cookTime
    if(req.body.hasOwnProperty("cookTime")) {
	//check if cookTime is a number
	if(typeof req.body.cookTime == 'number') {
	    cookTime = req.body.cookTime;
	}else {
	    res.status(400).json({error: "Bad Request: requires cookTime to be a number"});
	    return;
	}
    }else {
	res.status(400).json({error: "Bad Request: requires a cookTime"});
	return;
    }

    //check for appliances 
    if(req.body.hasOwnProperty("appliances")) {
        //check if appliances is a list
        if(typeof req.body.appliances == 'object') {
            appliances = req.body.appliances;
        }else {
            res.status(400).json({error: "Bad Request: requires appliances to be a list"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a list of appliances"});
        return;
    }

    //check for popularity
    if(req.body.hasOwnProperty("popularity")) {
	//check if popularity is a number
	if(typeof req.body.popularity == 'number') {
	    popularity = req.body.popularity;
	}else {
	    res.status(400).json({error: "Bad Request: requires popularity to be a number"});
	    return;
	}
    }else {
	res.status(400).json({error: "Bad Request: requires a popularity"});
	return;
    }

    //check for tags
    if(req.body.hasOwnProperty("tags")) {
        //check if tags is a list
        if(typeof req.body.tags == 'object') {
            tags = req.body.tags;
        }else {
            res.status(400).json({error: "Bad Request: requires tags to be a list"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a list of tags"});
        return;
    }

    //check for ingredients
    if(req.body.hasOwnProperty("ingredients")) {
        //check if ingredients is a list
        if(typeof req.body.ingredients == 'object') {
            ingredients = req.body.ingredients;
        }else {
            res.status(400).json({error: "Bad Request: requires ingredients to be a list"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a list of ingredients"});
        return;
    }

    //check for steps
    if(req.body.hasOwnProperty("steps")) {
        //check if steps is a list
        if(typeof req.body.steps == 'object') {
            steps = req.body.steps;  
        }else {
            res.status(400).json({error: "Bad Request: requires title to be a string and ingredients and steps to be lists"});
            return;
        } 
    }else {
        res.status(400).json({error: "Bad Request: Get requires a title, ingredients, and steps"});
        return;
    }
    
    //try to add recipe to database
    try {
        let newRecipe = await index.recipes.createRecipe(userid, name, price, cookTime, appliances, popularity, tags, ingredients, steps);
        
        //send status and response
        res.status(200);
        res.send(newRecipe);
    }catch(error) {
        res.status(500).json({error: "Failed to add recipe"});
    }
    
});

//PUT recipe/:id route, updates the specified recipe with only the supplied changes, returns updated recipe
app.put('/recipe/:recipeId', async function(req, res) {
    //check for and get parameters
    let userid = "";
    let name = "";
    let price = 0;
    let cookTime = 0;
    let appliances = [];
    let popularity = 0;
    let tags = [];
    let ingredients = [];
    let steps = [];
    
    //check for userid
    if(req.body.hasOwnProperty('userid')) {
        //check if userid is a string
        if(typeof req.body.userid == 'string') {
            userid = req.body.userid;
        }else {
            res.status(400).json({error: "Bad Request: requires userid to be a string"});
            return;
        }
    }else {
	   userid = undefined;
    }

    //check for name
    if(req.body.hasOwnProperty('name')) {
        //check if name is a string
        if(typeof req.body.name == 'string') {
            name = req.body.name;
        }else {
            res.status(400).json({error: "Bad Request: requires name to be a string"});
            return;
        }
    }else {
	   name = undefined;
    }

    //check for price
    if(req.body.hasOwnProperty("price")) {
	//check if price is a number
	if(typeof req.body.price == 'number') {
	    price = req.body.price;
	}else {
	    res.status(400).json({error: "Bad Request: requires price to be a number"});
	    return;
	}
    }else {
	   price = undefined;
    }

    //check for cookTime
    if(req.body.hasOwnProperty("cookTime")) {
	//check if cookTime is a number
	if(typeof req.body.cookTime == 'number') {
	    cookTime = req.body.cookTime;
	}else {
	    res.status(400).json({error: "Bad Request: requires cookTime to be a number"});
	    return;
	}
    }else {
	   cookTime = undefined;
    }

    //check for appliances 
    if(req.body.hasOwnProperty("appliances")) {
        //check if appliances is a list
        if(typeof req.body.appliances == 'object') {
            appliances = req.body.appliances;
        }else {
            res.status(400).json({error: "Bad Request: requires appliances to be a list"});
            return;
        }
    }else {
        appliances = undefined;
    }

    //check for popularity
    if(req.body.hasOwnProperty("popularity")) {
	//check if popularity is a number
	if(typeof req.body.popularity == 'number') {
	    popularity = req.body.popularity;
	}else {
	    res.status(400).json({error: "Bad Request: requires popularity to be a number"});
	    return;
	}
    }else {
	   popularity = undefined;
    }

    //check for tags
    if(req.body.hasOwnProperty("tags")) {
        //check if tags is a list
        if(typeof req.body.tags == 'object') {
            tags = req.body.tags;
        }else {
            res.status(400).json({error: "Bad Request: requires tags to be a list"});
            return;
        }
    }else {
        tags = undefined;
    }

    //check for ingredients
    if(req.body.hasOwnProperty("ingredients")) {
        //check if ingredients is a list
        if(typeof req.body.ingredients == 'object') {
            ingredients = req.body.ingredients;
        }else {
            res.status(400).json({error: "Bad Request: requires ingredients to be a list"});
            return;
        }
    }else {
        ingredients = undefined;
    }

    //check for steps
    if(req.body.hasOwnProperty("steps")) {
        //check if steps is a list
        if(typeof req.body.steps == 'object') {
            steps = req.body.steps;  
        }else {
            res.status(400).json({error: "Bad Request: requires title to be a string and ingredients and steps to be lists"});
            return;
        } 
    }else {
        steps = undefined;
    }
    
    //try to update recipe
    try {
        let updRecipe = await index.recipes.updateRecipeById(req.params.recipeId, userid, name, price, cookTime, appliances, popularity, tags, ingredients, steps);
    
        //send status and response
        res.status(200);
        res.send(updRecipe);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Failed to update recipe with id: " + req.params.recipeId});
    }
});

//DELETE recipe/:id route, deletes the recipe with the specified id
app.delete('/recipe/:recipeId', async function(req, res) {
    //try to delete recipe
    try{
        let delRecipe = await index.recipes.removeRecipesById(req.params.recipeId);
        
        //send status and response
        let retVal = { "status": "Recipe with id: " + req.params.recipeId + " deleted succesfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Failed to delete recipe with id: " + req.params.recipeId});
    }
});

//DELETE recipes/user/:userId route, deletes recipes created by specified user
app.delete('/recipes/user/:userId', async function(req, res) {
    //try to delete recipe
    try{
        let delRecipe = await index.recipes.removeRecipesById(req.params.userId);
        
        //send status and response
        let retVal = { "status": "Recipe with id: " + req.params.userId + " deleted succesfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Failed to delete recipes with specified userId"});
    }
});



//Ratings Database Routes

//GET rating/:ratingId route, responds with information for specified rating
app.get('/rating/:ratingId', async function(req, res) {
    //try to get rating info
    try {
        let ratingInfo = await index.ratings.getRatingById(req.params.ratingId);
        
        //send status and response 
        res.status(200);
        res.send(ratingInfo);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Can't retrieve rating"});
    }
});

//GET ratings/:userId route, responds with ratings from specified user
app.get('/ratings/user/:userId', async function(req, res) {
    //try to get ratings for user
    try {
        let ratingsRes = await index.ratings.getRatingsByUserId(req.params.userId);
        
        //send status and response
        res.status(200);
        res.send(ratingsRes);
    }catch(error) {
        res.status(500).json({error: "Can't retrieve ratings for specified user"});
    }
});

//GET ratings/:recipeId route, responds with ratings from specified recipe
app.get('/ratings/recipe/:recipeId', async function(req, res) {
    //try to get ratings for recipe
    try {
        let ratingsRes = await index.ratings.getRatingsByRecipeId(req.params.recipeId);
        
        //send status and response
        res.status(200);
        res.send(ratingsRes);
    }catch(error) {
        res.status(500).json({error: "Can't retrieve ratigns for specified recipe"});
    }
});

//POST rating route, creates a rating with the supplied data in the request body, returns rating info
app.post('/rating', async function(req, res) {
    //check and get parameters 
    let userId = "";
    let recipeId = "";
    let rating = 0;
    
    //check for userId
    if(req.body.hasOwnProperty("userId")) {
        //check if userId is a string
        if(typeof req.body.userId == 'string') {
            userId = req.body.userId;
        }else {
            res.status(400).json({error: "Bad Request: requires userId to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a userId"});
        return;
    }
    
    //check for recipeId
    if(req.body.hasOwnProperty("recipeId")) {
        //check if recipeId is a string
        if(typeof req.body.recipeId == 'string') {
            recipeId = req.body.recipeId;
        }else {
            res.status(400).json({error: "Bad Request: requires recipeId to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a recipeId"});
        return;
    }
    
    //check for rating
    if(req.body.hasOwnProperty("rating")) {
        //check if rating is a string
        if(typeof req.body.rating == 'string') {
            rating = req.body.rating;
        }else {
            res.status(400).json({error: "Bad Request: requires rating to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a rating"});
        return;
    }
    
    //try to add rating
    try {
        let newRating = await index.ratings.createRating(userId, recipeId, rating);
        
        //send status and response
        res.status(200);
        res.send(newRating);
    }catch(error) {
        res.status(500).json({error: "Failed to add rating"});
    }
});

//PUT rating/:ratingId route, updates the specified rating with only the supplied changes, returns updated user information
app.put('/rating/:ratingId', async function(req, res) {
    //check and get parameters 
    let userId = "";
    let recipeId = "";
    let rating = 0;
    
    //check for userId
    if(req.body.hasOwnProperty("userId")) {
        //check if userId is a string
        if(typeof req.body.userId == 'string') {
            userId = req.body.userId;
        }else {
            res.status(400).json({error: "Bad Request: requires userId to be a string"});
            return;
        }
    }else {
        userId = undefined;
    }
    
    //check for recipeId
    if(req.body.hasOwnProperty("recipeId")) {
        //check if recipeId is a string
        if(typeof req.body.recipeId == 'string') {
            recipeId = req.body.recipeId;
        }else {
            res.status(400).json({error: "Bad Request: requires recipeId to be a string"});
            return;
        }
    }else {
        recipeId = undefined;
    }
    
    //check for rating
    if(req.body.hasOwnProperty("rating")) {
        //check if rating is a string
        if(typeof req.body.rating == 'string') {
            rating = req.body.rating;
        }else {
            res.status(400).json({error: "Bad Request: requires rating to be a string"});
            return;
        }
    }else {
        rating = undefined;
    }
    
    //try to update rating info
    try {
        let ratingInfo = await index.ratings.updateRatingById(req.params.ratingId, userId, recipeId, rating);
        
        //send status and response
        res.status(200);
        res.send(ratingInfo);
    }catch(error) {
        res.status(500).json({error: "Failed to update rating"});
    }
});

//DELETE rating/:ratingId route, deletes the rating with the specified id
app.delete('/rating/:ratingId', async function(req, res) {
    //try to delete rating
    try {
        let delRating = await index.ratings.removeRatingById(req.params.ratingId);
        
        //send status and response
        let retVal = { "status": "Rating with id: " + req.params.ratingId + " deleted successfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        res.status(500).json({error: "Failed to delete rating"});
    }
});

//DELETE ratings/:userId route, deletes ratings from a specified user
app.delete('/ratings/user/:userId', async function(req, res) {
    //try to delete ratings for user
    try {
        let delRatings = await index.ratings.removeRatingsByUserId(req.params.userId);
        
        //send status and response
        let retVal = { "status": "Ratings for user with id: " + req.params.userId + " deleted successfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        res.status(500).json({error: "Failed to delete ratings for specified user"});
    }
});

//DELETE ratings:/recipeId route, deletes ratings from a specified recipe
app.delete('/ratings/recipe/:recipeId', async function(req, res) {
    //try to delete ratings for recipe
    try {
        let delRatings = await index.ratings.removeRatingsByRecipeId(req.params.recipeId);
        
        //send status and response 
        let retVal = { "status": "Ratings for recipe with id: " + req.params.userId + " deleted successfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        res.status(500).json({error: "Failed to delete ratings for specified recipe"});
    }
});



//Favorites Database Routes 

//GET favorite/:favoriteId route, responds with information for specified favorite
app.get('/favorite/:favoriteId', async function(req, res) {
    //try to get favorite info
    try {
        let favoriteInfo = await index.favorites.getFavoriteById(req.params.favoriteId);
        
        //send status and response 
        res.status(200);
        res.send(favoriteInfo);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Can't retrieve favorite"});
    }
});

//GET favorites/user/:userId route, responds with favorites for specified user
app.get('/favorites/user/:userId', async function(req, res) {
    //try to get favorite info
    try {
        let favoritesInfo = await index.favorites.getFavoritesByUserId(req.params.userId);
        
        //send status and response 
        res.status(200);
        res.send(favoritesInfo);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Can't retrieve favorites for specified user"});
    }
});

//GET favorites/recipe/:recipeId route, responds with favorites for specified recipe
app.get('/favorites/recipe/:recipeId', async function(req, res) {
    //try to get favorite info
    try {
        let favoritesInfo = await index.favorites.getFavoritesByRecipeId(req.params.recipeId);
        
        //send status and response 
        res.status(200);
        res.send(favoritesInfo);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Can't retrieve favorites for specified recipe"});
    }
});

//POST favorite route, creates a favorite with the supplied data in the request body, returns favorite info
app.post('/favorite', async function(req,res) {
    //check and get parameters 
    let userId = "";
    let recipeId = "";
    
    //check for userId
    if(req.body.hasOwnProperty("userId")) {
        //check if userId is a string
        if(typeof req.body.userId == 'string') {
            userId = req.body.userId;
        }else {
            res.status(400).json({error: "Bad Request: requires userId to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a userId"});
        return;
    }
    
    //check for recipeId
    if(req.body.hasOwnProperty("recipeId")) {
        //check if recipeId is a string
        if(typeof req.body.recipeId == 'string') {
            recipeId = req.body.recipeId;
        }else {
            res.status(400).json({error: "Bad Request: requires recipeId to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a recipeId"});
        return;
    }
    
    //try to add favorite
    try {
        let newFavorite = await index.favorites.createFavorite(userId, recipeId);
        
        //send status and response
        res.status(200);
        res.send(newFavorite);
    }catch(error) {
        res.status(500).json({error: "Failed to add favorite"});
    }
});

//DELETE favorite/:favoriteId route, deletes the favorite with the specified id
app.delete('/favorite/:favoriteId', async function(req, res) {
    //try to delete favorite
    try {
        let delFavorite = await index.favorites.removeFavoriteById(req.params.favoriteId);
        
        //send status and response
        let retVal = { "status": "Favorite with id: " + req.params.favoriteId + " deleted successfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        res.status(500).json({error: "Failed to delete favorite"});
    }
});

//DELETE favorites/user/:userId route, deletes favorites of specified user
app.delete('/favorites/user/:userId', async function(req, res) {
    //try to delete favorites for user
    try {
        let delFavorites = await index.favorites.removeFavoriteById(req.params.userId);
        
        //send status and response
        let retVal = { "status": "Favorites for user with id: " + req.params.userId + " deleted successfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        res.status(500).json({error: "Failed to delete favorites for specified user"});
    }
});

//DELETE favorites/recipe/recipeId route, deletes favorites for specified recipe
app.delete('/favorites/recipe/:recipeId', async function(req, res) {
    //try to delete favorites for user
    try {
        let delFavorites = await index.favorites.removeFavoriteById(req.params.recipeId);
        
        //send status and response
        let retVal = { "status": "Favorites for recipe with id: " + req.params.recipeId + " deleted successfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        res.status(500).json({error: "Failed to delete favorites for specified recipe"});
    }
});



//Comment Database Routes

//GET comment/:commentId route, responds with information for specified comment
app.get('/comment/:commentId', async function(req, res) {
    //try to get comment info
    try {
        let commentInfo = await index.comments.getCommentById(req.params.commentId);
        
        //send status and response 
        res.status(200);
        res.send(commentInfo);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Can't retrieve comment"});
    }
});

//GET comments/user/:userId route, responds with comments for the specified user
app.get('/comments/user/:userId', async function(req, res) {
    //try to get comments for specified user
    try {
        let commentsInfo = await index.comments.getCommentById(req.params.userId);
        
        //send status and response 
        res.status(200);
        res.send(commentsInfo);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Can't retrieve comments for specified user"});
    }
});

//GET comments/recipe/:recipeId route, responds with the comments for the specified recipe
app.get('/comments/recipe/:recipeId', async function(req, res) {
    //try to get comments for specified recipe
    try {
        let commentsInfo = await index.comments.getCommentById(req.params.recipeId);
        
        //send status and response 
        res.status(200);
        res.send(commentsInfo);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Can't retrieve comments for specified recipe"});
    }
});

//POST comment route, creates a comment with supplied data in the request bdoy, returns user info
app.post('/comment', async function(req, res) {
    //check and get parameters 
    let userId = "";
    let recipeId = "";
    let comment = "";
    
    //check for userId
    if(req.body.hasOwnProperty("userId")) {
        //check if userId is a string
        if(typeof req.body.userId == 'string') {
            userId = req.body.userId;
        }else {
            res.status(400).json({error: "Bad Request: requires userId to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a userId"});
        return;
    }
    
    //check for recipeId
    if(req.body.hasOwnProperty("recipeId")) {
        //check if recipeId is a string
        if(typeof req.body.recipeId == 'string') {
            recipeId = req.body.recipeId;
        }else {
            res.status(400).json({error: "Bad Request: requires recipeId to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a recipeId"});
        return;
    }
    
    //check for comment
    if(req.body.hasOwnProperty("comment")) {
        //check if comment is a string
        if(typeof req.body.comment == 'string') {
            comment = req.body.comment;
        }else {
            res.status(400).json({error: "Bad Request: requires comment to be a string"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a comment"});
        return;
    }
    
    //try to add comment
    try {
        let newComment = await index.comments.createComment(userId, recipeId, comment);
        
        //send status and response
        res.status(200);
        res.send(newComment);
    }catch(error) {
        res.status(500).json({error: "Failed to add comment"});
    }
});

//PUT comment/:commentId route, updates the specified comment with only the supplied changes, returns updated user information
app.put('/comment/:commentId', async function(req, res) {
    //check and get parameters 
    let userId = "";
    let recipeId = "";
    let comment = "";
    
    //check for userId
    if(req.body.hasOwnProperty("userId")) {
        //check if userId is a string
        if(typeof req.body.userId == 'string') {
            userId = req.body.userId;
        }else {
            res.status(400).json({error: "Bad Request: requires userId to be a string"});
            return;
        }
    }else {
        userId = undefined;
    }
    
    //check for recipeId
    if(req.body.hasOwnProperty("recipeId")) {
        //check if recipeId is a string
        if(typeof req.body.recipeId == 'string') {
            recipeId = req.body.recipeId;
        }else {
            res.status(400).json({error: "Bad Request: requires recipeId to be a string"});
            return;
        }
    }else {
        recipeId = undefined;
    }
    
    //check for comment
    if(req.body.hasOwnProperty("comment")) {
        //check if comment is a string
        if(typeof req.body.comment == 'string') {
            comment = req.body.comment;
        }else {
            res.status(400).json({error: "Bad Request: requires comment to be a string"});
            return;
        }
    }else {
        comment = undefined;
    }
    
    //try to update comment
    try {
        let commentInfo = await index.comments.updateCommentById(req.params.commentId, userId, recipeId, comment);
        
        //send status and response
        res.status(200);
        res.send(commentInfo);
    }catch(error) {
        res.status(500).json({error: "Failed to update comment"});
    }
});

//DELETE comment/:commentId route, deletes the comment with the specified id
app.delete('/comment/:commentId', async function(req, res) {
    //try to delete comment
    try {
        let delComment = await index.comments.removeCommentById(req.params.commentId);
        
        //send status and response
        let retVal = { "status": "Comment with id: " + req.params.commentId + " deleted successfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        res.status(500).json({error: "Failed to delete comment"});
    }
});

//DELETE comments/user/:userId route, deletes the comments of the specified user
app.delete('/comments/user/:userId', async function(req, res) {
    //try to delete comments for user
    try {
        let delComments = await index.comments.removeCommentsByUserId(req.params.userId);
        
        //send status and response
        let retVal = { "status": "Comments for user with id: " + req.params.userId + " deleted successfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        res.status(500).json({error: "Failed to delete comments for specified user"});
    }
});

//DELETE comments/recipe/:recipeId route, deletes the comments from a specified recipe
app.delete('/comments/recipe/:recipeId', async function(req, res) {
    //try to delete comments for recipe
    try {
        let delComments = await index.comments.removeCommentsByRecipeId(req.params.recipeId);
        
        //send status and response
        let retVal = { "status": "Comments for recipe with id: " + req.params.recipeId + " deleted successfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        res.status(500).json({error: "Failed to delete comments for specified recipe"});
    }
});


//Run Server on port 3000, and print a line with the port and address
let server = app.listen(3000, function() {
    console.log("Server running at http://127.0.0.1:3000");
});
