const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.commentItems;
const uuidv1 = require ( "uuid/v1" );

const exported_methods = {
    async getCommentById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getCommentById: Expected a string but received a ${typeof ( id )}`;
        }
        const commentCollection = await comments();
        const data = await commentCollection.findOne ( { _id: id } );
        return data;
    },
    async updateCommentById ( id, comment ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `updateCommentById: Expected a string but received a ${typeof ( id )}`;
        } 
        update = {};
        update.comment = comment;
        const commentCollection = await comments();
        await commentCollection.updateOne ( { _id: id }, { $set: update } );
        
    },
    async removeCommentById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `removeCommentById: Expected a string but received a ${typeof(id)}`;
        }
        const commentCollection = await comments();
        let data = await commentCollection.removeOne ( { _id: id } );
        return data;
    },
    async getCommentsByUserId ( userId ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getCommentById: Expected a string but received a ${typeof ( id )}`;
        }
        const commentCollection = await comments();
        const data = await commentCollection.find ( { userId: userId } ).toArray();
        return data;
    },
    async removeCommentsByUserId ( userId ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `removeCommentById: Expected a string but received a ${typeof(id)}`;
        }
        const commentCollection = await comments();
        let data = await commentCollection.remove ( { userId: userId } );
        return data;
    },
    async getCommentsByRecipeId ( recipeId ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getCommentById: Expected a string but received a ${typeof ( id )}`;
        }
        const commentCollection = await comments();
        const data = await commentCollection.find ( { recipeId: recipeId } ).toArray();
        return data;
    },
    async removeCommentsByRecipeId ( recipeId ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `removeCommentById: Expected a string but received a ${typeof(id)}`;
        }
        const commentCollection = await comments();
        let data = await commentCollection.remove ( { recipeId: recipeId } );
        return data;
    },
    async createComment ( userId, recipeId, comment ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `createComment: Expected a string but received a ${typeof ( userId )}`;
        }
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `createComment: Expected a string but received a ${typeof ( recipeId )}`;
        }
        if ( typeof ( comment ) !== 'string' ) {
            throw `createComment: Expected a string but received a ${typeof ( comment )}`;
        }

        comBody = {};
        comBody.userId = userId;
        comBody.recipeId = recipeId;
        comBody.comment = comment;

        const commentCollection = await comments();
        const data = await commentCollection.insertOne ( comBody );
        return comBody;
    }
};

module.exports = exported_methods;