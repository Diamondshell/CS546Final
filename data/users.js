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
        if ( typeof ( description ) !== 'string' ) {
            throw `createUser: Expected a string description, but received a ${typeof(description)}`;
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
    async empty() {
        const userCollection = await users();
        const data = await userCollection.remove({});
        return data;
    }
};

module.exports = exported_methods;