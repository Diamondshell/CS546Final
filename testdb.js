var data = require ( "./data" );
const comments = data.comments;
const favorites = data.favorites;
const users = data.users;
const recipes = data.recipes;
const ratings = data.ratings;
const mongoCollections = require("./config/mongoCollections");
const closeDB = mongoCollections.end;

async function main() {
    
    filter = {};
    //filter.name = "e";
    //filter.tags = [ "What", "Unnatural" ];
    //filter.ingredients = [ "Butter", "Ketchup" ];
    //filter.appliances = [ "Oven", "Grill" ];
    //filter.price = [{$gte: 1000},{$lte: .5}];
    //filter.popularity = [{$lte: 11}];
    //filter.time = [{$lte: 120}];
    //filter.rating = [2,5];
    const data = await recipes.getRecipesByFilter ( filter );

    //console.log ( data );
    
    closeDB();

}

main().catch((e) => {
    console.error(e);
});