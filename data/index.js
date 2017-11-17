const userData = require ( "./users" );
const commentData = require ( "./comments" );
const favoriteData = require ( "./favorites" );
const ratingData = require ( "./ratings" );
const recipeData = require ( "./recipes" );


module.exports = {
    users: userData,
    comments: commentData,
    favorites: favoriteData,
    ratings: ratingData,
    recipes: recipeData  
};