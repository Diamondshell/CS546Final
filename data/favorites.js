const mongoCollections = require("../config/mongoCollections");
const favorites = mongoCollections.favoriteItems;
const uuidv1 = require ( "uuid/v1" );

const exported_methods = {
    /**
     * Gets the given favorite
     * @param {string} id The id of the favorite
     */
    async getFavoriteById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getFavoriteById: Expected a string, received a ${typeof(id)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.findOne ( { _id: id } );
        return data;
    },
    /**
     * Removes the favorite
     * @param {string} id The id of the favorite
     */
    async removeFavoriteById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `removeFavoriteById: Expected a string, received a ${typeof(id)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.removeOne ( { _id: id } );
        return data;
    },
    /**
     * Gets all favorites made by a given user
     * @param {string} userId The username of the user
     */
    async getFavoritesByUserId ( userId ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `getFavoritesByUserId: Expected a string, but received a ${typeof(userId)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.find ( { userId: userId } ).toArray();
        return data;
    },
    /**
     * Removes all favorites made by a user
     * @param {string} userId The username of the user
     */
    async removeFavoritesByUserId ( userId ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `removeFavoritesByUserId: Expected a string but received a ${typeof(userId)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.remove ( { userId: userId } );
        return data;
    },
    /**
     * Gets all favorites for a given recipe
     * @param {string} recipeId The id of the recipe
     */
    async getFavoritesByRecipeId ( recipeId ) {
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `getFavoritesByRecipeId: Expected a string but received a ${typeof(recipeId)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.find ( { recipeId: recipeId } ).toArray();
        return data;
    },
    /**
     * Removes all favorites for a given recipe
     * @param {string} recipeId The id of the recipe
     */
    async removeFavoritesByRecipeId ( recipeId ) {
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `removeFavoritesByRecipeId: Expected a string but received a ${typeof(recipeId)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.remove ( { recipeId: recipeId } );
        return data;
    },
    /**
     * Creates of favorite entry pairing a recipe and a user
     * @param {string} userId The username of the user making the favorite
     * @param {string} recipeId The id of the recipe the user is favoriting
     */
    async createFavorite ( userId, recipeId ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `createFavorite: Expected a string userId but received a ${typeof(userId)}`;
        }
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `createFavorite: Expected a string recipeId but received a ${typeof(recipeId)}`;
        }
        let ret = {};
        ret._id = uuidv1();
        ret.userId = userId;
        ret.recipeId = recipeId;
        const favoriteData = await favorites();
        const data = await favoriteData.insertOne ( ret );
        return ret;
    },
    /**
     * Empties the favorite collection
     */
    async empty () {
        const favoriteCollection = await favorites();
        const data = await favoriteCollection.remove({});
        return data;
    }
}

module.exports = exported_methods;