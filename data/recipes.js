const mongoCollections = require ( "../config/mongoCollections" );
const recipes = mongoCollections.recipeItems;
const uuidv1 = require ( "uuid/v1" );
let data = require ( "../data" );
const commentData = data.comments;
const ratingData = data.ratings;
const favoriteData = data.favorites;

const exported_methods = {
    /**
     * Gets all recipes
     */
    async getAllRecipes ( ) {
        const recipeCollection = await recipes();
        const data = await recipeCollection.find ( {} ).toArray();
        return data;
    },
    /**
     * Gets a given recipe
     * @param {string} id The recipe id
     */
    async getRecipeById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getRecipeById: Expected a string but received a ${typeof(id)}`;
        }
        const recipeCollection = await recipes();
        const data = await recipeCollection.findOne ( { _id: id } );
        return data;
    },
    /**
     * Finds recipes that match name along %name%.
     * @param {string} name The name of the recipe to search for.
     */
    async getRecipesByLikeName ( name ) {
        if ( typeof ( name ) !== 'string' ) {
            throw `getRecipesByLikeName: Expected a string name but received a ${typeof(name)}`;
        }
        const recipeCollection = await recipes();
        const data = await recipeCollection.find ( { name: {$regex: ".*" + name + ".*"} } ).toArray();
        return data;
    },
    /**
     * Retrieves the top X recipes by popularity value.
     * @param {number} X The number of recipes to get with this popularity.
     */
    async topXTrendingRecipes ( X ) {
        if ( typeof ( X ) !== 'number' ) {
            throw `topXTrendingRecipes: Expected a number X, but received a ${typeof(name)}`;
        }
        const recipeCollection = await recipes();
        const data = await recipeCollection.find().sort( { popularity: -1 } ).limit(X).toArray();
        return data;
    },
    /**
     * Updates the given recipe with any number of values
     * @param {string} id The id of the recipe
     * @param {string|undefined} name A new recipe name
     * @param {string|undefined} description A new description
     * @param {number|undefined} price A new price
     * @param {number|undefined} cookTime A new cooktime
     * @param {Array<string>|undefined} appliances A new list of appliances
     * @param {number|undefined} popularity A new popularity
     * @param {Array<string>|undefined} tags A new list of tags
     * @param {Array<string>|undefined} ingredients A new list of ingredients
     * @param {Array<string>|undefined} steps A new list of steps
     * @param {string|undefined} imgpath A new imagepath
     */
    async updateRecipeById ( id, name, description, price, cookTime, appliances, popularity, tags, ingredients, steps, imgpath ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `updateRecipeById: Expected a string id, received a ${typeof(id)}`;
        }
        
        update = {};
        if ( name ) {
            if ( typeof ( name ) !== 'string' ) {
                throw `updateRecipeById: Expected a string name, but received a ${typeof(name)}`;
            }
            update.name = name;
        }
        if ( description ) {
            if ( typeof ( description ) !== 'string' ) {
                throw `updateRecipeById: Expected a string description, but received a ${typeof(name)}`;
            }
            update.description = description;
        }
        if ( price ) {
            if ( typeof ( price ) !== 'number' ) {
                throw `updateRecipeById: Expected a number price, but received a ${typeof(price)}`;
            }
            update.price = price;
        }
        if ( cookTime ) {
            if ( typeof ( cookTime ) !== 'number' ) {
                throw `updateRecipeById: Expected a number cookTime, but received a ${typeof(cookTime)}`;
            }
            update.cookTime = cookTime;
        }
        if ( appliances ) {
            if ( typeof ( appliances ) !== 'string' ) {
                throw `updateRecipeById: Expected a string appliances, but received a ${typeof(appliances)}`;
            }
            update.appliances = appliances;
        }
        if ( popularity ) {
            if ( typeof ( popularity ) !== 'string' ) {
                throw `updateRecipeById: Expected a string popularity, but received a ${typeof(popularity)}`;
            }
            update.popularity = popularity;
        }
        if ( tags ){
            if ( typeof ( tags ) !== 'string' ) {
                throw `updateRecipeById: Expected a string tags, but received a ${typeof(tags)}`;
            }
            update.tags = tags;
        }
        if ( ingredients ) {
            if ( typeof ( ingredients ) !== 'string' ) {
                throw `updateRecipeById: Expected a string ingredients, but received a ${typeof(ingredients)}`;
            }
            update.ingredients = ingredients;
        }
        if ( steps ) {
            if ( typeof ( steps ) !== 'string' ) {
                throw `updateRecipeById: Expected a string steps, but received a ${typeof(steps)}`;
            }
            update.steps = steps;
        }
        if ( imgpath ) {
            if ( typeof ( imgpath ) !== 'string' ) {
                throw `updateRecipeById: Expected a string imgpath, but received a ${typeof(imgpath)}`;
            }
            update.imgpath = imgpath;
        }

        const recipeCollection = await recipes();
        const data = await recipeCollection.updateOne ( { _id: id }, { $set: ret } );
        return await exported_methods.getRecipeById( id );
    },
    /**
     * Removes a given recipe
     * @param {string} id The id of the recipe to remove
     */
    async removeRecipeById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `removeRecipeById: Expected a string but received a ${typeof(id)}`;
        }
        const recipeCollection = await recipes();
        await commentData.removeCommentsByUserId ( id );
        await ratingData.removeRatingsByUserId ( id );
        await favoriteData.removeFavoritesByUserId ( id );
        const data = await recipeCollection.removeOne ( { _id: id } );
        return data;
    },
    /**
     * Gets all recipes matching a given filter
     * @param {!Object} filter The filter to match on
     */
    async getRecipesByFilter ( filter ) {
        if ( typeof ( filter ) !== 'object' ){
            throw `getRecipeByFilter: Not yet implemented`;
        }
        const recipeCollection = await recipes();
        const data = await recipeCollection.find ( filter ).toArray();
        return data;
    },
    /**
     * Gets all recipes made by a given user
     * @param {string} userid The username to look for
     */
    async getRecipesByUserId ( userid ) {
        if ( typeof ( userid ) !== 'string' ) {
            throw `getRecipesByUserId: Expected a string userid, but received a ${typeof(userid)}`;
        }
        const recipeCollection = await recipes();
        const data = await recipeCollection.find ( { userid: userid } ).toArray();
        return data;
    },
    /**
     * Removes all users by a given username
     * @param {string} userid The username to remove on
     */
    async removeRecipesByUserId ( userid ) {
        if ( typeof ( userid ) !== 'string' ) {
            throw `removeRecipesByUserId: Expected a string userid, but received a ${typeof(userid)}`;
        }
        const recipeCollection = await recipes();
        let data = await recipeCollection.remove ( { userid: userid } );
        return data;
    },
    /**
     * Creates a recipe with the given fields
     * @param {string} userid The username of the user who created it
     * @param {string} name The name of the recipe
     * @param {number} price The price to make the recipe
     * @param {number} cookTime The time needed prepare it (in minutes)
     * @param {Array<string>} appliances The appliances need to prepare it
     * @param {number} popularity The popularity of the recipe
     * @param {Array<string>} tags The tags attached to the recipe
     * @param {Array<string>} ingredients The ingredients needed to make the recipe
     * @param {Array<string>} steps The steps to make the recipe
     * @param {string} imgpath The Path for the image associated with this recipe
     * @param {string} description The description for the recipe
     */
    async createRecipe ( userid, name, description, price, cookTime, appliances, popularity, tags, ingredients, steps, imgpath ) {
        if ( typeof ( userid ) !== 'string' ) {
            throw `createRecipe: Expected a string userid, but received a ${typeof(userid)}`;
        }
        if ( typeof ( name ) !== 'string' ) {
            throw `createRecipe: Expected a string name, but received a ${typeof(name)}`;
        }
        if ( typeof ( description ) !== 'string' ) {
            throw `createRecipe: Expected a string description but received a ${typeof(description)}`;
        }
        if ( typeof ( price ) !== 'number' ) {
            throw `createRecipe: Expected a number price, but received a ${typeof(price)}`;
        }
        if ( typeof ( cookTime ) !== 'number' ) {
            throw `createRecipe: Expected a number cookTime, but received a ${typeof(cookTime)}`;
        }
        if ( typeof ( appliances ) !== 'object' ) {
            throw `createRecipe: Expected an array appliances, but received a ${typeof(appliances)}`;
        }
        if ( typeof ( popularity ) !== 'number' ) {
            throw `createRecipe: Expected a number popularity, but received a ${typeof(popularity)}`;
        }
        if ( typeof ( tags ) !== 'object' ) {
            throw `createRecipe: Expected an array tags, but received a ${typeof(tags)}`;
        }
        if ( typeof ( ingredients ) !== 'object' ) {
            throw `createRecipe: Expected an array ingredients, but received a ${typeof(ingredients)}`;
        }
        if ( typeof ( steps ) !== 'object' ) {
            throw `createRecipe: Expected an array steps, but received a ${typeof(steps)}`;
        }
        if ( typeof ( imgpath ) !== 'string' ) {
            throw `createRecipe: Expected a string imgpath, but received a ${typeof ( imgpath )}`;
        }

        ret = {};
        ret._id = uuidv1();
        ret.userid = userid;
        ret.name = name;
        ret.description = description;
        ret.price = price;
        ret.cookTime = cookTime;
        ret.appliances = appliances;
        ret.popularity = popularity;
        ret.tags = tags;
        ret.ingredients = ingredients;
        ret.steps = steps;
        ret.imgpath = imgpath;

        const recipeCollection = await recipes();
        const data = await recipeCollection.insertOne ( ret );
        return ret;
    },
    /**
     * Empties the recipe collection. Does not ensure deletion cascade.
     */
    async empty () {
        const recipeCollection = await recipes();
        const data = await recipeCollection.remove({});
        return data;
    }
};

module.exports = exported_methods;