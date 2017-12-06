// Cleans and Seeds the database
var data = require ( "./data" );
const comments = data.comments;
const favorites = data.favorites;
const ratings = data.ratings;
const data = data.recipes;
const users = data.users;

function main() {
    /*
        username: Bobby
        password: Coolio
        email: bobby@dank.me
        description: I'm a cool dude I guess

        username: dankMeister
        password: Memelord278
        email: dank@meist.er
        description: Meme's are the greatest of all the things on the planet. Hail Memes.

        username: Bobby
        password: Coolio
        email: bobby@dank.me
        description: I'm a cool dude I guess

        username: Bobby
        password: Coolio
        email: bobby@dank.me
        description: I'm a cool dude I guess
    */
    
    let u1 = await users.createUser();
    let u2 = await users.createUser();
    let u3 = await users.createUser();
    let u4 = await users.createUser();

    let r1 = await recipes.createRecipe();
    let r2 = await recipes.createRecipe();
    let r3 = await recipes.createRecipe();
    let r4 = await recipes.createRecipe();

    let c1 = await comments.createComment();
    let c2 = await comments.createComment();
    let c3 = await comments.createComment();
    let c4 = await comments.createComment();

    let f1 = await favorites.createFavorite();
    let f2 = await favorites.createFavorite();
    let f3 = await favorites.createFavorite();
    let f4 = await favorites.createFavorite();
    
    let ra1 = await ratings.createFavorite();
    let ra2 = await ratings.createFavorite();
    let ra3 = await ratings.createFavorite();
    let ra4 = await ratings.createFavorite();
}

main();