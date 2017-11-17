let MongoClient = require ( 'mongodb' ).MongoClient;

const settings = {
    MongoConfig: {
        ServerUrl: "mongodb://localhost:27017/",
        database: "BonAppetelli_Final"
    }
}

let fullMongoUrl = settings.MongoConfig.ServerUrl + settings.MongoConfig.database;
let _connection = undefined;

let connectDb = () => {
    if ( !_connection ) {
        _connection = MongoClient.connect(fullMongoUrl).then ( ( db ) => {
            return db;
        });
    }

    return _connection;
}

module.exports = connectDb;