const mongoCollections = require ( "../config/mongoCollections" );
const recipes = mongoCollections.recipeItems;
const uuidv1 = require ( "uuid/v1" );
let data = require ( "../data" );
const commentData = data.comments;
const ratingData = data.ratings;
const favoriteData = data.favorites;

function isArrayType ( arr, type ) {
    let c = Array.isArray ( arr );
    if ( c ) {
        let i = 0;
        for ( i = 0; i < arr.length; i++ ) {
            if ( typeof ( arr[i] ) !== type ) {
                return false;
            }
        }
    }
    return c;
}

const exported_methods = {
    async getRecipeById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getRecipeById: Expected a string but received a ${typeof(id)}`;
        }
        const recipeCollection = await recipes();
        const data = await recipeCollection.findOne ( { _id: id } );
        return data;
    },
    async updateRecipeById ( id, name, price, cookTime, appliances, popularity, tags, ingredients, steps ) {
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
        if ( price ) {
            if ( typeof ( price ) !== 'string' ) {
                throw `updateRecipeById: Expected a string price, but received a ${typeof(price)}`;
            }
            update.price = price;
        }
        if ( cookTime ) {
            if ( typeof ( cookTime ) !== 'string' ) {
                throw `updateRecipeById: Expected a string cookTime, but received a ${typeof(cookTime)}`;
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

        const recipeCollection = await recipes();
        const data = await recipeCollection.updateOne ( { _id: id }, { $set: ret } );
        return await exported_methods.getRecipeById( id );
    },
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
    async getRecipesByFilter ( filter ) {
        if ( typeof ( filter ) !== 'object' ){
            throw `getRecipeByFilter: Not yet implemented`;
        }
        const recipeCollection = await recipes();
        const data = await recipeCollection.find ( filter ).toArray();
        return data;
    },
    async createRecipe ( name, price, cookTime, appliances, popularity, tags, ingredients, steps ) {
        if ( typeof ( name ) !== 'string' ) {
            throw `createRecipe: Expected a string name, but received a ${typeof(name)}`;
        }
        if ( typeof ( price ) !== 'string' ) {
            throw `createRecipe: Expected a string price, but received a ${typeof(price)}`;
        }
        if ( typeof ( cookTime ) !== 'string' ) {
            throw `createRecipe: Expected a string cookTime, but received a ${typeof(cookTime)}`;
        }
        if ( typeof ( appliances ) !== 'string' ) {
            throw `createRecipe: Expected a string appliances, but received a ${typeof(appliances)}`;
        }
        if ( typeof ( popularity ) !== 'string' ) {
            throw `createRecipe: Expected a string popularity, but received a ${typeof(popularity)}`;
        }
        if ( typeof ( tags ) !== 'string' ) {
            throw `createRecipe: Expected a string tags, but received a ${typeof(tags)}`;
        }
        if ( typeof ( ingredients ) !== 'string' ) {
            throw `createRecipe: Expected a string ingredients, but received a ${typeof(ingredients)}`;
        }
        if ( typeof ( steps ) !== 'string' ) {
            throw `createRecipe: Expected a string steps, but received a ${typeof(steps)}`;
        }

        ret = {};
        ret._id = uuidv1();
        ret.name = name;
        ret.price = price;
        ret.cookTime = cookTime;
        ret.appliances = appliances;
        ret.popularity = popularity;
        ret.tags = tags;
        ret.ingredients = ingredients;
        ret.steps = steps;

        const recipeCollection = await recipes();
        const data = await recipeCollection.insertOne ( ret );
        return ret;
    },
    async empty () {
        const recipeCollection = await recipes();
        const data = await recipeCollection.remove({});
        return data;
    }
};

module.exports = exported_methods;