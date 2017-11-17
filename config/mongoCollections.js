const dbConnection = require ( "./mongoConnection" );

let getConnectionFn = ( collection ) => {
    let _col = undefined;

    return () => {
        if ( !_col ) {
            _col = dbConnection().then ( db => {
                return db.collection ( collection );
            });
        }

        return _col;
    }
}

function end() {
    return dbConnection().then ( db => {
        db.close();
    });
}

module.exports = {
    commentItems: getConnectionFn ( 'commentItems' ),
    favoriteItems: getConnectionFn ( 'favoriteItems' ),
    ratingItems: getConnectionFn ( 'ratingItems' ),
    recipeItems: getConnectionFn ( 'recipeItems' ),
    userItems: getConnectionFn ( 'userItems' ),
    end: end
};