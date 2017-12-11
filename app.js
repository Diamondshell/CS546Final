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
const connection = require('./config/mongoConnection.js');
const comments = require('./data/comments.js');
const favorites = require('./data/favorites.js');
const index = require('./data/index.js');
const ratings = require('./data/ratings.js');
const recipe = require('./data/recipes.js');
const users = require('./data/users.js');
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
app.post('/login', async function(req, res) {
    username = req.body.username;
    password = req.body.password;
    userData = await users.getUserById(username);

    const validated = await bcrypt.compare(password, userData.password).then(function(res) {
        return res;
    });

    if (validated) {
        //If valid, create a validated cookie that holds the username also for use in displaying data later
        res.cookie('validated', user.username, {maxAge: 1000 * 60 * 5 /* cookies expires in 5 minutes after login */, httpOnly: true});
        //Send something back when validated
    }
    else {
        //Send something back when the user isn't validated
    }
});

app.get('/login', async function(req, res) {
    res.redirect('/forbidden');

});

//server routes 

//get / route, does blank
app.get('*', function(req, res) {
    //do stuff
    console.log("Path: " + req.path);
    res.sendFile(path.join(__dirname, './dist/index.html'));
});


//a route that on a get, returns json, for each recipe content, name, and id

//a route that on a get, reutrns the user who is currently logged in

//a route that on a get, given a recipeId, return all the recipe details

//a route that on a put, given a user, update information on user

//a route that on a put, given a recipeId, update information on that recipe

//routes that do everything from the recipeId server 
//GET recipes route, responds with a list of all recipes in the form {_id: RECIPE_ID, title: RECIPE_TITLE}
app.get('/recipes', async function(req, res) {
    //try to get recipes
    try {
	let getAll = await recipe.getAllRecipes();

	//send status and response
	res.status(200);
	res.send(getAll);
    }catch(error) {
	//handle error
	res.status(500).json({error: "Can't retrieve recipes"});
    }
});


//GET recipes/:id route, responds with full content of specified recipe
app.get('/recipes/:id', async function(req, res) {
    //try to get recipe with specified id
    try{
        let getRecipe = await recipe.getRecipeById(req.params.id);
        
        //send status and response
        res.status(200);
        res.send(getRecipe);
    }catch(error) {
        //handle error
        res.status(404).json({error: "Recipe not found"});
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
        let getRecipe = await recipe.getRecipesByFilter(filter);
        
        //send status and response
        res.status(200);
        res.send(getRecipe);
    }catch(error) {
        //handle error
        res.status(404).json({error: "Recipe not found"});
    }
});

//POST recipes route, creates a recipe with the supplied data in the request body, returns new recipe
app.post('/recipes', async function(req, res) {
    //check and get parameters
    let name = "";
    let price = 0;
    let cookTime = 0;
    let appliances = [];
    let popularity = 0;
    let tags = [];
    let ingredients = [];
    let steps = [];

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
        let newRecipe = await recipe.createRecipe(name, price, cookTime, appliances, popularity, tags, ingredients, steps);
        
        //send status and response
        res.status(200);
        res.send(newRecipe);
    }catch(error) {
        res.status(500).json({error: "Failed to add recipe"});
    }
    
});

//PUT recipes/:id route, updates the specified recipe with only the supplied changes, returns updated recipe
app.put('/recipes/:id', async function(req, res) {
    //check for and get parameters
    let name = "";
    let price = 0;
    let cookTime = 0;
    let appliances = [];
    let popularity = 0;
    let tags = [];
    let ingredients = [];
    let steps = [];

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
        let updRecipe = await recipe.updateRecipeById(req.params.id, name, price, cookTime, appliances, popularity, tags, ingredients, steps);
    
        //send status and response
        res.status(200);
        res.send(updRecipe);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Failed to update recipe"});
    }
});

//DELETE recipes/:id route, deletes the recipe with the specified id
app.delete('/recipes/:id', async function(req, res) {
    //try to delete recipe
    try{
        let delRecipe = await recipe.removeRecipesById(req.params.id);
        
        //send status and response
        let retVal = { "status": "Recipe with id: " + req.params.id + " deleted succesfully" };
        res.status(200);
        res.send(retVal);
    }catch(error) {
        //handle error
        res.status(500).json({error: "Failed to delete recipe"});
    }
});












//run server on port 3000, and print a line with the port and address
let server = app.listen(3000, function() {
    console.log("Server running at http://127.0.0.1:3000");
});
