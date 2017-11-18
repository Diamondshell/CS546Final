const mongoCollections = require("../config/mongoCollections");
const favorites = mongoCollections.favoriteItems;
const uuidv1 = require ( "uuid/v1" );

const exported_methods = {
    async getFavoriteById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getFavoriteById: Expected a string, received a ${typeof(id)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.findOne ( { _id: id } );
        return data;
    },
    async removeFavoriteById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `removeFavoriteById: Expected a string, received a ${typeof(id)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.removeOne ( { _id: id } );
        return data;
    },
    async getFavoritesByUserId ( userId ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `getFavoritesByUserId: Expected a string, but received a ${typeof(userId)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.find ( { userid: userId } ).toArray();
        return data;
    },
    async removeFavoritesByUserId ( userId ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `removeFavoritesByUserId: Expected a string but received a ${typeof(userId)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.remove ( { userId: userId } );
        return data;
    },
    async getFavoritesByRecipeId ( recipeId ) {
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `getFavoritesByRecipeId: Expected a string but received a ${typeof(recipeId)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.find ( { recipeId: recipeId } ).toArray();
        return data;
    },
    async removeFavoritesByRecipeId ( recipeId ) {
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `removeFavoritesByRecipeId: Expected a string but received a ${typeof(recipeId)}`;
        }
        const favoriteData = await favorites();
        const data = await favoriteData.remove ( { recipeId: recipeId } );
        return data;
    },
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
    }
}

module.exports = exported_methods;