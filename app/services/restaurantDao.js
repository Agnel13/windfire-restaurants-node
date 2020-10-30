const propertyReader = require('../utils/propertyReader');
const MongoClient = require('mongodb').MongoClient;
const dbUrl = propertyReader.getProperty('db.url');
const dbUser = propertyReader.getProperty('db.user');
const dbPassword = propertyReader.getProperty('db.password');
const dbName = propertyReader.getProperty('db.dbname');
const collection = propertyReader.getProperty('db.collection');
const uri = "mongodb+srv://" + dbUser + ":" + dbPassword + "@" + dbUrl;

function findAll(callback) {
    MongoClient.connect(uri, function(err, db) {
        console.log("######## Connecting to uri " + uri + "...")
        if (err) 
            throw err;
        console.log("######## Connecting db " + dbName + " ...")
        var dbo = db.db(dbName);  
        const query = { name: 'Riviera Caterer' };
        console.log("######## Querying collection " + collection + " ...")
        dbo.collection(collection).find(query).toArray(function(err, result) {
            console.log("######## Query result ...")
            if (err) 
                throw err;
            console.log(result);
            callback(result);
            db.close();
        });
    });
}

async function queryAsync() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db('sample_mflix');
        const collection = database.collection('movies');
        // Query for a movie that has the title 'Back to the Future'
        const query = { title: 'Back to the Future' };
        const movie = await collection.findOne(query);
        //const movie = await collection.find();
        console.log(movie);
        //return movie
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

//run().catch(console.dir);

exports.findAll = findAll;
exports.queryAsync = queryAsync;