const mongoCollections = require ( "../config/mongoCollections" );
const users = mongoCollections.userItems;
const uuidv1 = require ( "uuid/v1" );
let data = require ( "../data" );
const commentData = data.comments;
const recipeData = data.recipes;
const ratingData = data.ratings;
const favoriteData = data.favorites;

const exported_methods = {
    /**
     * Gets the user by the given username
     * @param {string} username The username of the user
     */
    async getUserById ( username ) {
        if ( typeof ( username ) !== 'string' ) {
            throw `getUserById: Expected as string, received a ${typeof(username)}`;
        }
        const userCollection = await users();
        const data = userCollection.findOne ( { _id: username } );
        return data;
    },
    /**
     * Updates the user with the given values (they can be undefined, but all must be present)
     * @param {string} username The user to update
     * @param {string|undefined} password A new password
     * @param {string|undefined} email A new email
     * @param {string|undefined} description A new description
     */
    async updateUserById ( username, password, email, description ) {
        if ( typeof ( username ) !== 'string' ) {
            throw `updateUserById: Expected a string id, but received a ${typeof(username)}`;
        }
        
        updateInfo = {};
        if ( password ) {
            if ( typeof ( password ) !== 'string' ) {
                throw `updateUserById: Expected a string password, but received a ${typeof(password)}`;
            }
            updateInfo.password = password;
        }
        if ( email ) {
            if ( typeof ( email ) !== 'string' ) {
                throw `updateUserById: Expected a string email, but received a ${typeof(email)}`;
            }
            updateInfo.email = email;
        }
        if ( description ) {
            if ( typeof ( description ) !== 'string' ) {
                throw `updateUserById: Expected a string description, but received a ${typeof(description)}`;
            }
            updateInfo.description = description;
        }

        const userCollection = await users();
        const data = userCollection.updateOne ( { _id: username }, { $set: updateInfo } );

        return await exported_methods.getUserById ( username );
    },
    /**
     * Removes a specified user, also deletes all recipes, ratings, comments, and favorites made by the user
     * @param {string} username The user to delete
     */
    async removeUserById ( username ) {
        if ( typeof ( username ) ) {
            throw `removeUserById: Expected a string, but received a ${typeof(username)}`;
        }
        const userCollection = await users();
        await commentData.removeCommentsByUserId ( username );
        await ratingData.removeRatingsByUserId ( username );
        await favoriteData.removeFavoritesByUserId ( username );
        await recipeData.removeRecipesByUserId ( username );
        return await userCollection.removeOne ( { _id: username } );
    },
    /**
     * Creates a user with the specified parameters
     * @param {string} password The password for the user (should be hashed)
     * @param {string} username The username for the user
     * @param {string} email The email for the user
     * @param {string|undefined} description The description for the user
     */
    async createUser ( password, username, email, description ) {
        if ( typeof ( password ) !== 'string' ) {
            throw `createUser: Expected a string password, but received a ${typeof(password)}`;
        }
        if ( typeof ( username ) !== 'string' ) {
            throw `createUser: Expected a string username, but received a ${typeof(username)}`;
        }
        if ( typeof ( email ) !== 'string' ) {
            throw `createUser: Expected a string email, but received a ${typeof(email)}`;
        }
        if ( typeof ( description ) !== 'string' && typeof ( description ) !== 'undefined' ) {
            throw `createUser: Expected a string or undefined description, but received a ${typeof(description)}`;
        }

        ret = {};
        ret._id = username;
        ret.password = password;
        ret.email = email;
        ret.description = description;

        const userCollection = await users();
        const data = await userCollection.insertOne ( ret );
        return ret;
    },
    /**
     * Empties the user collection (does not ensure deletion cascade)
     */
    async empty() {
        const userCollection = await users();
        const data = await userCollection.remove({});
        return data;
    }
};

module.exports = exported_methods;