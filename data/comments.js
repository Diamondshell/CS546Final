const comments = mongoCollections.comments;
const uuidv1 = require ( "uuid/v1" );

const exported_methods = {
    async getCommentById ( id ) {
        if ( typeof ( id ) !== 'string' ) {
            throw `getCommentById: Expected a string but received a ${typeof ( id )}`;
        }
        const commentCollection = await comments();
        const data = await commentCollection.find ( { _id: id } );

        return data;
    },
    async createComment ( userId, recipeId, comment ) {
        if ( typeof ( userId ) !== 'string' ) {
            throw `getCommentById: Expected a string but received a ${typeof ( userId )}`;
        }
        if ( typeof ( recipeId ) !== 'string' ) {
            throw `getCommentById: Expected a string but received a ${typeof ( recipeId )}`;
        }
        if ( typeof ( comment ) !== 'string' ) {
            throw `getCommentById: Expected a string but received a ${typeof ( comment )}`;
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