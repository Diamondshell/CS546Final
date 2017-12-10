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

//server routes 

//get / route, does blank
app.get('/', function(req, res) {
    //do stuff
    res.sendFile(path.join(__dirname, 'src/index.html'));
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
        let getRecipe = await recipe.getRecipe(req.params.id);
        
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
    let title = "";
    let ingredients = [];
    let steps = [];
    //check for title
    if(req.body.hasOwnProperty("title")) {
        //check if title is a string
        if(typeof req.body.title == 'string') {
            title = req.body.title;
        }else {
            res.status(400).json({error: "Bad Request: requires title to be a string and ingredients and steps to be lists"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: requires a title, ingredients, and steps"});
        return;
    }
    //check for ingredients
    if(req.body.hasOwnProperty("ingredients")) {
        //check if ingredients is a list
        if(typeof req.body.ingredients == 'object') {
            ingredients = req.body.ingredients;
        }else {
            res.status(400).json({error: "Bad Request: requires title to be a string and ingredients and steps to be lists"});
            return;
        }
    }else {
        res.status(400).json({error: "Bad Request: Get requires a title, ingredients, and steps"});
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
        let newRecipe = await recipe.createRecipe(title, ingredients, steps);
        
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
    let title = "";
    let ingredients = [];
    let steps = [];
    let changes = [0, 0, 0];
    //check for title
    if(req.body.hasOwnProperty('title')) {
        //check if title is a string
        if(typeof req.body.title == 'string') {
            title = req.body.title;
            changes[0] = 1;
        }else {
            res.status(400).json({error: "Bad Request: requires title to be a string"});
            return;
        }
    }
    //check for ingredients
    if(req.body.hasOwnProperty('ingredients')) {
        //check if ingredients is a list
        if(typeof req.body.ingredients == 'object') {
            ingredients = req.body.ingredients;
            changes[1] = 1;
        }else {
            res.status(400).json({error: "Bad Request: requries ingredients to be a list"});
            return;
        }
    }
    //check for steps
    if(req.body.hasOwnProperty('steps')) {
        //check if steps is a list
        if(typeof req.body.steps == 'object') {
            steps = req.body.steps;
            changes[2] = 1;
        }else {
            res.status(400).json({error: "Bad Request: requries steps to be a list"});   
            return;
        }
    }
    
    //try to update recipe
    try {
        let updRecipe = await recipe.updateRecipe(req.params.id, title, ingredients, steps, changes);
    
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
        let delRecipe = await recipe.deleteRecipe(req.params.id);
        
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
