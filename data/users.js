const mongoCollections = require ( "../config/mongoCollections" );
const users = mongoCollections.userItems;
const uuidv1 = require ( "uuid/v1" );
let data = require ( "../data" );
const commentData = data.comments;
const ratingData = data.ratings;
const favoriteData = data.favorites;

const exported_methods = {
    async getUserById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getUserById: Expected as string, received a ${typeof(id)}`;
        }
        const userCollection = await users();
        const data = userCollection.findOne ( { _id: id } );
        return data;
    },
    async updateUserById ( id, password, username, email, description ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `updateUserById: Expected a string id, but received a ${typeof(id)}`;
        }
        
        updateInfo = {};
        if ( password ) {
            if ( typeof ( password ) !== 'string' ) {
                throw `updateUserById: Expected a string password, but received a ${typeof(password)}`;
            }
            updateInfo.password = password;
        }
        if ( username ) {
            if ( typeof ( username ) !== 'string' ) {
                throw `updateUserById: Expected a string username, but received a ${typeof(username)}`;
            }
            updateInfo.username = username;
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
        const data = userCollection.updateOne ( { _id: id }, { $set: updateInfo } );

        return await exported_methods.getUserById ( id );
    },
    async removeUserById ( id ) {
        if ( typeof ( id ) ) {
            throw `removeUserById: Expected a string, but received a ${typeof(id)}`;
        }
        const userCollection = await users();
        await commentData.removeCommentsByUserId ( id );
        await ratingData.removeRatingsByUserId ( id );
        await favoriteData.removeFavoritesByUserId ( id );
        return await userCollection.removeOne ( { _id: id } );
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
        ret._id = uuidv1();
        ret.password = password;
        ret.username = username;
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