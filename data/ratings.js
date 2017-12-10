const mongoCollections = require ( "../config/mongoCollections" );
const ratings = mongoCollections.ratingItems;
const uuidv1 = require ( "uuid/v1" );

const exported_methods = {
    /**
     * Returns the given rating
     * @param {string} id The rating id
     */
    async getRatingById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getRatingById: Expected a string but received a ${typeof ( id )}`;
        }
        const ratingCollection = await ratings();
        const data = await ratingCollection.findOne ( { _id: id } );
        return data;
    },
    /**
     * Updates a specified rating with a new number
     * @param {string} id The id of the rating
     * @param {number} rating The new rating value
     */
    async updateRatingById ( id, rating ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `updateRatingById: Expected a string id but received a ${typeof ( id )}`;
        }
        if ( typeof ( rating ) !== 'number' ) {
            throw `updateRatingById: Expected a number rating but received a ${typeof(rating)}`;
        }
        update = {};
        update.rating = rating;
        const ratingCollection = await ratings();
        await ratingCollection.updateOne ( { _id: id }, { $set: update } );

        return await exported_methods.getRatingById ( id );
        
    },
    /**
     * Removes the given rating
     * @param {string} id The rating id
     */
    async removeRatingById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `removeRatingById: Expected a string but received a ${typeof(id)}`;
        }
        const ratingCollection = await ratings();
        let data = await ratingCollection.removeOne ( { _id: id } );
        return data;
    },
    /**
     * Gets all ratings made by the specified user
     * @param {string} userId The username of the user
     */
    async getRatingsByUserId ( userId ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `getRatingsByUserId: Expected a string but received a ${typeof ( userId )}`;
        }
        const ratingCollection = await ratings();
        const data = await ratingCollection.find ( { userId: userId } ).toArray();
        return data;
    },
    /**
     * Removes all ratings made by the specified user
     * @param {string} userId The username of the user
     */
    async removeRatingsByUserId ( userId ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `removeRatingsByUserId: Expected a string but received a ${typeof(userId)}`;
        }
        const ratingCollection = await ratings();
        let data = await ratingCollection.remove ( { userId: userId } );
        return data;
    },
    /**
     * Gets all ratings for the specified recipe
     * @param {string} recipeId The id of the recipe
     */
    async getRatingsByRecipeId ( recipeId ) {
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `getRatingsByRecipeId: Expected a string but received a ${typeof ( recipeId )}`;
        }
        const ratingCollection = await ratings();
        const data = await ratingCollection.find ( { recipeId: recipeId } ).toArray();
        return data;
    },
    /**
     * Removes the ratings for the given recipe
     * @param {string} recipeId The id of the recipe
     */
    async removeRatingsByRecipeId ( recipeId ) {
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `removeCommenstByRecipeId: Expected a string but received a ${typeof(recipeId)}`;
        }
        const ratingCollection = await ratings();
        let data = await ratingCollection.remove ( { recipeId: recipeId } );
        return data;
    },
    /**
     * Creates a new rating
     * @param {string} userId The username of the user
     * @param {string} recipeId The id of the recipe
     * @param {number} rating The numerical rating
     */
    async createRating ( userId, recipeId, rating ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `createRating: Expected a string userId but received a ${typeof ( userId )}`;
        }
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `createRating: Expected a string recipeId but received a ${typeof ( recipeId )}`;
        }
        if ( typeof ( rating ) !== 'number' ) {
            throw `createRating: Expected a number rating but received a ${typeof ( rating )}`;
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
    /**
     * Empties the rating collection
     */
    async empty () {
        const ratingCollection = await ratings();
        const data = await ratingCollection.remove({});
        return data;
    }
};

module.exports = exported_methods;