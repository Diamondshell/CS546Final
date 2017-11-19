const mongoCollections = require ( "../config/mongoCollections" );
const ratings = mongoCollections.ratingItems;
const uuidv1 = require ( "uuid/v1" );

const exported_methods = {
    async getRatingById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getRatingById: Expected a string but received a ${typeof ( id )}`;
        }
        const ratingCollection = await ratings();
        const data = await ratingCollection.findOne ( { _id: id } );
        return data;
    },
    async updateRatingById ( id, rating ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `updateRatingById: Expected a string but received a ${typeof ( id )}`;
        } 
        update = {};
        update.rating = rating;
        const ratingCollection = await ratings();
        await ratingCollection.updateOne ( { _id: id }, { $set: update } );

        return await exported_methods.getRatingById ( id );
        
    },
    async removeRatingById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `removeRatingById: Expected a string but received a ${typeof(id)}`;
        }
        const ratingCollection = await ratings();
        let data = await ratingCollection.removeOne ( { _id: id } );
        return data;
    },
    async getRatingsByUserId ( userId ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `getRatingsByUserId: Expected a string but received a ${typeof ( userId )}`;
        }
        const ratingCollection = await ratings();
        const data = await ratingCollection.find ( { userId: userId } ).toArray();
        return data;
    },
    async removeRatingsByUserId ( userId ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `removeRatingsByUserId: Expected a string but received a ${typeof(userId)}`;
        }
        const ratingCollection = await ratings();
        let data = await ratingCollection.remove ( { userId: userId } );
        return data;
    },
    async getRatingsByRecipeId ( recipeId ) {
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `getRatingsByRecipeId: Expected a string but received a ${typeof ( recipeId )}`;
        }
        const ratingCollection = await ratings();
        const data = await ratingCollection.find ( { recipeId: recipeId } ).toArray();
        return data;
    },
    async removeRatingsByRecipeId ( recipeId ) {
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `removeCommenstByRecipeId: Expected a string but received a ${typeof(recipeId)}`;
        }
        const ratingCollection = await ratings();
        let data = await ratingCollection.remove ( { recipeId: recipeId } );
        return data;
    },
    async createRating ( userId, recipeId, rating ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `createRating: Expected a string userId but received a ${typeof ( userId )}`;
        }
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `createRating: Expected a string recipeId but received a ${typeof ( recipeId )}`;
        }
        if ( typeof ( rating ) !== 'string' ) {
            throw `createRating: Expected a string rating but received a ${typeof ( rating )}`;
        }
        ratBody = {};
        ratBody._id = uuidv1();
        ratBody.userId = userId;
        ratBody.recipeId = recipeId;
        ratBody.rating = rating;
        const ratingCollection = await ratings();
        const data = await ratingCollection.insertOne ( ratBody );
        return ratBody;
    },
    async empty () {
        const ratingCollection = await ratings();
        const data = await ratingCollection.remove({});
        return data;
    }
};

module.exports = exported_methods;